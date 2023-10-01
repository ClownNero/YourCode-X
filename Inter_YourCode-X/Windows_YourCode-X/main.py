import subprocess;
from termcolor import cprint;
import os;
import json;
from flask import Flask, request, jsonify;
from flask_cors import CORS

print_red = lambda x: cprint(x, 'red')
print_yellow = lambda x: cprint(x, 'yellow')
print_green = lambda x: cprint(x, 'green')
print_blue = lambda x: cprint(x, 'blue')
print_magenta = lambda x : cprint(x, "magenta")
print_cyan = lambda x : cprint(x, "cyan")
print_grey = lambda x : cprint(x, "grey")
print_white = lambda x : cprint(x, "white")

def dirScan(url):
    # Windows에서 동작
    print_blue("\n[*] 디렉토리 스캔 점검")
    output = subprocess.run(['python', './Inter_YourCode-X/Scan/directory_scan.py', url], capture_output=True, text=True)
    extracted_info = output.stdout
    directory_names = []
    file_names = []

    # 출력 디렉토리 이름
    print("Directory Names:")
    print("===========")
    for line in extracted_info.split('\n'):
        if line.startswith("DIR: "):
            directory_names.append(line[5:])
            print(line[5:])
    # 출력 파일 이름
    print("\nFile Names:")
    print("===========")
    for line in extracted_info.split('\n'):
        if line.startswith("FILE: "):
            file_names.append(line[6:])
            print(line[6:])

    return directory_names, file_names

def sqlI(url, check_url):
    urls_json = json.dumps(check_url)
    print_blue("\n[*] SQL Injection 점검")
    #subprocess.call(['python', './Inter_YourCode-X/VulnerabilityList/SQLI/sql_injection.py' ,url ,urls_json])
    output = subprocess.run(['python', './Inter_YourCode-X/VulnerabilityList/SQLI/sql_injection.py' ,url ,urls_json], capture_output=True, text=True)
    extracted_info = output.stdout
    # payload = []
    category = "SQL 인젝션"
    num = None
    risk = None

    # for line in extracted_info.split('\n'):
    #     if line.startswith("Attack Detected: "):
    #         payload.append(line[17:])
    for line in extracted_info.split('\n'):
        if line.startswith("num: "):
            num = int(line[5:])
            break
    for line in extracted_info.split('\n'):
        if line.startswith("risk: "):
            risk = str(line[6:])
            break

    # print(f"payload: {payload}")
    # print(f"category: {category}")
    # print(f"num: {num}")
    # print(f"risk: {risk}")

    # return payload, category, num, risk
    return category, num, risk



app = Flask(__name__)
cors = CORS(app, resources={r"/*":{"origins": "http://localhost:3000"}})
@app.route('/gomain', methods=['POST'])
def process_request():
    print_blue("\n==================================================================================\n")
    print_blue("     __   __                     _____             _               __   __ ")
    print_blue("     __   __                     _____             _               __   __ ")
    print_blue("     \ \ / /                    /  __ \           | |              \ \ / / ")
    print_blue("      \ V /   ___   _   _  _ __ | /  \/  ___    __| |  ___  ______  \ V /  ")
    print_blue("       \ /   / _ \ | | | || '__|| |     / _ \  / _` | / _ \|______| /   \  ")
    print_blue("       | |  | (_) || |_| || |   | \__/\| (_) || (_| ||  __/        / /^\ \\")
    print_blue("       \_/   \___/  \__,_||_|    \____/ \___/  \__,_| \___|        \/   \/ ")
    print_blue("\n                                           동아대학교 컴퓨터공학과(웹 취약점 진단)   ")
    print_blue("==================================================================================\n")
    print_red(" ※  주 의  ※\n")
    print_red(" - 웹 사이트의 보안을 테스트하거나 스캔하기 전에 반드시 사전 허가를 받아야 합니다.")
    print_red(" - 허가된 사이트에서 진단 도구를 사용하지 않을 경우 법적인 책임은 사용자에게 있습니다.")
    print_red(" - 스캔 과정에서 데이터 손실이 발생할 수도 있으므로 점검을 시작하기 전에 중요 데이터는 반드시 백업해주세요.")
    
    data = request.json  # 클라이언트로부터 JSON 데이터 수신
    url = data.get('processedData')  # 'processedData' 키의 값을 추출
    print(f"URL: {url}")
    
    # 디렉토리 스캔 함수
    directories, files = dirScan(url)
    # 프로토콜+점검IP+리소스 경로
    check_url = []
    for file in files:
        full_url = "{}/{}".format(url.rstrip('/'), file.lstrip('/'))
        check_url.append(full_url)

    ### 점검 시작 ###
    #점검항목1: SQL 인젝션(SQL Injection)
    # num, payload, category, risk = sqlI(url, check_url)
    category, num, risk = sqlI(url, check_url)
    #################

    ### 점검 결과 ###
    # url, payload, category, num, risk 
    print_blue("\n[*] 점검 결과")
    print(f"url: {url}")
    # print(f"payload: {payload}")
    print(f"category: {category}")
    print(f"num: {num}")
    print(f"risk: {risk}")
    #################

    # Flask 애플리케이션에서 클라이언트로 응답을 보낼 수 있음
    return url

if __name__ == '__main__':
    app.run()

    