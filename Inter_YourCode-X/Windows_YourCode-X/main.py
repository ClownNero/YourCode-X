import subprocess
import openai
import jsonlines
import pymysql
import requests
import os
import json
from termcolor import cprint
from flask import Flask, request, jsonify
from flask_cors import CORS
from module import dbModule
from bs4 import BeautifulSoup


print_red = lambda x: cprint(x, 'red')
print_yellow = lambda x: cprint(x, 'yellow')
print_green = lambda x: cprint(x, 'green')
print_blue = lambda x: cprint(x, 'blue')
print_magenta = lambda x : cprint(x, "magenta")
print_cyan = lambda x : cprint(x, "cyan")
print_grey = lambda x : cprint(x, "grey")
print_white = lambda x : cprint(x, "white")

def dirScan(url):
    print_blue("\n[*] 디렉토리 스캔 점검")
    output = subprocess.run(['python', './Inter_YourCode-X/Scan/directory_scan.py', url], capture_output=True, text=True)
    extracted_info = output.stdout

    # 출력 디렉토리 이름
    directory_names_set = set()
    directory_names = []
    for line in extracted_info.split('\n'):
        if line.startswith("DIR: "):
            directory_names_set.add(line[5:])
    print_green("Directory Names:")
    print_green("===========")
    for directory_name in directory_names_set:
        directory_names.append(directory_name)
        print(directory_name)

    # 출력 파일 이름
    cnt = 0
    file_names_set = set()
    file_names = []
    for line in extracted_info.split('\n'):
        if line.startswith("FILE: "):
            file_names_set.add(line[6:])
    print_green("\nFile Names:")
    print_green("===========")
    for file_name in file_names_set:
        file_names.append(file_name)
        print(file_name)
        cnt +=1
    print_grey(f"File Name cnt: {cnt}")

    # 식별 경로
    identi_path_set = set()
    identi_paths = []
    identi_path_dict = {
        "script_location: ": 17,
        "script_src: ": 12,
        "a_href: ": 8,
        "form_action: ": 13,
        "link_href: ": 11,
        "img_src: ": 9,
        "area_href: ": 11,
        "meta: ": 6,
        "embed&object: ": 14,
    }
    for line in extracted_info.split('\n'):
        for key, prefix_len in identi_path_dict.items():
            if line.startswith(key):
                identi_path_set.add(line[prefix_len:])
                break
    print_green("\nIdentification path:")
    print_green("===========")
    for identi_path in identi_path_set:
        identi_paths.append(identi_path)
        print(identi_path) 

    return directory_names, file_names, identi_paths

def crawling():
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
    }
    cve_url = "https://www.cvedetails.com/vulnerabilities-by-types.php"
    req = requests.get(cve_url, headers=headers, verify=True)
    soup = BeautifulSoup(req.text, 'html.parser')

    tables = soup.body.find_all('table')
    table = tables[0] 
    rows = table.find_all('tr')

    data = {}
    for row in rows:
        th = row.find('th')
        a = th.find('a') if th else None
        if a:
            year = a.text.strip()
            if year == '2023':
                tds = row.find_all('td')
                for td in tds:
                    a = td.find('a')
                    if a:
                        key = a.get('title').replace(' vulnerabilities for 2023', '')
                        value = a.text.strip()
                        data[key] = value

    return data

def sql_injection(url, check_url):
    urls_json = json.dumps(check_url)
    print_blue("\n[*] SQL Injection 점검")
    output = subprocess.run(['python', './Inter_YourCode-X/VulnerabilityList/SQLI/sql_injection.py' ,url ,urls_json], capture_output=True, text=True)
    extracted_info = output.stdout

    # payload_1 추출
    cnt = 0
    payload_1s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Attack Detected: "):
            payload_1s.add(line[17:])
    payload_1 = list(payload_1s)
    print_green("\npayload(Payload Code):")
    print_green("======================")
    for code in payload_1:
        print(code)
        cnt += 1
    print_grey(f"payload cnt: {cnt}")

    # category_1 추출
    category_1 = "SQL 인젝션(SQL Injection)"
    print_green("\ncategory:")
    print_green("======================")
    print(category_1)

    # targeturl_1 추출
    targeturl_1s = set()
    num_1 = 0
    for line in extracted_info.split('\n'):
        if line.startswith("Target url: "):
            targeturl_1s.add(line[12:])
    targeturl_1 = list(targeturl_1s)
    print_green("\ntargeturl(Vulnerable file path):")
    print_green("======================")
    for target in targeturl_1:
        print(target)
        num_1 += 1

    # num_1 추출
    print_green("\nnum(Number of vulnerable file paths):")
    print_green("======================")
    print(num_1)

    # risk_1 데이터 추출
    risk_1 = '양호'
    risk_order = {'위험':0, '주의':1, '양호':2}
    print_green("\nrisk:")
    print_green("======================")
    for line in extracted_info.split('\n'):
        if line.startswith("Risk: "):
            print(line[6:])
            extracted_risk = line[6:].strip()
            if risk_order[extracted_risk] < risk_order[risk_1]:
                risk_1 = extracted_risk

    # inspectionurl_1 추출
    inspectionurl_1s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Inspection_url: "):
            inspectionurl_1s.add(line[16:])
    inspectionurl_1 = list(inspectionurl_1s)
    print_green("\ninspection_url(Inspection url path):")
    print_green("======================")
    for inspection in inspectionurl_1:
        print(inspection)

    # detailpayload_1 추출
    detailpayload_1s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Detail payload: "):
            detailpayload_1s.add(line[16:])
    detailpayload_1 = list(detailpayload_1s)
    print_green("\ndetailpayload(Performance Indicators by Inspection Item):")
    print_green("======================")
    for detail in detailpayload_1:
        if detail:
            print(detail)

    return payload_1, category_1, num_1, risk_1, targeturl_1, inspectionurl_1, detailpayload_1

def xss(url, check_url, identi_paths):
    urls_json = json.dumps(check_url)
    identi_json = json.dumps(identi_paths)
    print_blue("\n[*] XSS 점검")
    output = subprocess.run(['python', './Inter_YourCode-X/VulnerabilityList/XSS/xss.py' ,url ,urls_json, identi_json], capture_output=True, text=True)
    extracted_info = output.stdout

    # payload_2 추출
    cnt = 0
    payload_2s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Attack Detected: "):
            payload_2s.add(line[17:])
    payload_2 = list(payload_2s)
    print_green("\npayload(Payload Code):")
    print_green("======================")
    for code in payload_2:
        print(code)
        cnt += 1
    print_grey(f"payload cnt: {cnt}")  

    # category_2 추출
    category_2 = "크로스사이트스크립팅(XSS)"
    print_green("\ncategory:")
    print_green("======================")
    print(category_2)

    # targeturl_2 추출
    targeturl_2s = set()
    num_2 = 0
    for line in extracted_info.split('\n'):
        if line.startswith("Target url: "):
            targeturl_2s.add(line[12:])
    targeturl_2 = list(targeturl_2s)
    print_green("\ntargeturl(Vulnerable file path):")
    print_green("======================")
    for target in targeturl_2:
        print(target)
        num_2 += 1

    # num_2 추출
    print_green("\nnum(Number of vulnerable file paths):")
    print_green("======================")
    print(num_2)

    # risk_2 데이터 추출
    risk_2 = '양호'
    risk_order = {'위험':0, '주의':1, '양호':2}
    print_green("\nrisk:")
    print_green("======================")
    for line in extracted_info.split('\n'):
        if line.startswith("Risk: "):
            print(line[6:])
            extracted_risk = line[6:].strip()
            if risk_order[extracted_risk] < risk_order[risk_2]:
                risk_2 = extracted_risk

    # inspectionurl_2 추출
    inspectionurl_2s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Inspection_url: "):
            inspectionurl_2s.add(line[16:])
    inspectionurl_2 = list(inspectionurl_2s)
    print_green("\nInspection_url(Inspection url path):")
    print_green("======================")
    for inspection in inspectionurl_2:
        print(inspection)

    # detailpayload_2 추출
    detailpayload_2s = set()  
    for line in extracted_info.split('\n'):
        if line.startswith("Detail payload: "):
            detailpayload_2s.add(line[16:])
    detailpayload_2 = list(detailpayload_2s)
    print_green("\nDetailpayload(Performance Indicators by Inspection Item):")
    print_green("======================")
    for detail in detailpayload_2:
        if detail:
            print(detail)

    return payload_2, category_2, num_2, risk_2, targeturl_2, inspectionurl_2, detailpayload_2

def directory_traversal(url, check_url, identi_paths):
    urls_json = json.dumps(check_url)
    identi_json = json.dumps(identi_paths)
    print_blue("\n[*] Directory Traversal 점검")
    output = subprocess.run(['python', './Inter_YourCode-X/VulnerabilityList/DT/directory_traversal.py' ,url ,urls_json, identi_json], capture_output=True, text=True, check=True)
    extracted_info = output.stdout

    # payload_3 추출
    cnt = 0
    payload_3s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Attack Detected: "):
            payload_3s.add(line[17:])
    payload_3 = list(payload_3s)
    print_green("\npayload(Payload Code):")
    print_green("======================")
    for code in payload_3:
        print(code)
        cnt += 1
    print_grey(f"payload cnt: {cnt}")

    # category_3 추출
    category_3 = "디렉토리 트레버설(Directory Traversal)"
    print_green("\ncategory:")
    print_green("======================")
    print(category_3)

    # targeturl_3 추출
    targeturl_3s = set()
    num_3 = 0
    for line in extracted_info.split('\n'):
        if line.startswith("Target url: "):
            targeturl_3s.add(line[12:])
    targeturl_3 = list(targeturl_3s)
    print_green("\ntargeturl(Vulnerable file path):")
    print_green("======================")
    for target in targeturl_3:
        print(target)
        num_3 += 1 #취약한 파일 경로 수 파악

    # num_3 추출
    print_green("\nnum(Number of vulnerable file paths):")
    print_green("======================")
    print(num_3)

    # risk_3 데이터 추출
    risk_3 = '양호'
    risk_order = {'위험':0, '주의':1, '양호':2}
    print_green("\nrisk:")
    print_green("======================")
    for line in extracted_info.split('\n'):
        if line.startswith("Risk: "):
            extracted_risk = line[6:].strip()
            if risk_order[extracted_risk] < risk_order[risk_3]:
                risk_3 = extracted_risk
    print(risk_3)

    # inspectionurl_3 추출
    inspectionurl_3 = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Inspection_url: "):
            inspectionurl_3.add(line[16:])
    inspectionurl_3 = list(inspectionurl_3)
    print_green("\ninspection_url(Inspection url path):")
    print_green("======================")
    for inspection in inspectionurl_3:
        print(inspection)

    # detailpayload_3 추출
    detailpayload_3s = set()
    for line in extracted_info.split('\n'):
        if line.startswith("Detail payload: "):
            detailpayload_3s.add(line[16:])
    detailpayload_3 = list(detailpayload_3s)
    print_green("\ndetailpayload(Performance Indicators by Inspection Item):")
    print_green("======================")
    for detail in detailpayload_3:
        if detail:
            print(detail)

    return payload_3, category_3, num_3, risk_3, targeturl_3, inspectionurl_3, detailpayload_3

def inspection_result(url, payload, category, num, risk, targeturl, inspectionurl, detailpayload):
    print_green("url:\n======================")
    print(url)
    print_green("\npayload:\n======================")
    print(payload)
    print_green("\ncategory:\n======================")
    print(category)
    print_green("\nnum:\n======================")
    print(num)
    print_green("\nrisk:\n======================")
    print(risk)
    print_green("\ntargeturl:\n======================")
    print(targeturl)
    print_green("\ninspectionurl:\n======================")
    print(inspectionurl)
    print_green("\ndetailpayload:\n======================")
    print(detailpayload)  

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
    
    data = request.json
    url = data.get('processedData')
    print(f"URL: {url}")
    
    checkedContents = data.get("checkItems")
    print(f"category: {checkedContents}")

    directories, files, identi_paths = dirScan(url)
    check_url = []
    for file in files:
        full_url = "{}/{}".format(url.rstrip('/'), file.lstrip('/'))
        check_url.append(full_url)

    ## CVE(https://www.cvedetails.com/vulnerabilities-by-types.php) ###
    cve = crawling()
    # print(f"CVE-2023: {cve}")
    ov_d = cve['Overflow']
    mc_d = cve['Memory corruption']
    si_d = cve['Sql injection']
    xss_d = cve['Cross site scripting']
    dt_d = cve['Directory traversal']
    fi_d = cve['File inclusion']
    csrf_d = cve['Cross site request forgery, CSRF,']
    xxe_d = cve['XML external entity, XXE, injection']
    ssrf_d = cve['Server-side request forgery (SSRF)']
    opr_d = cve['Open redirect']
    iv_d = cve['Input valdiation']
    if cve:
        print_blue("\n[*] CVE-2023 DB Connection")
        db_class = dbModule.Database()
        db_class.cveData(ov_d, mc_d, si_d, xss_d, dt_d, fi_d, csrf_d, xxe_d, ssrf_d, opr_d, iv_d)
        print_blue("\n[*] CVE-2023 DB Close")
    else:
        print_red("\n[*] CVE-2023: {cve}")

    ### 점검 시작 & 점검 결과 & DB Connection ###
    # 점검항목1: SQL 인젝션(SQL Injection)
    if 'SQL 인젝션(SQL Injection)' in checkedContents:
        payload_1, category_1, num_1, risk_1, targeturl_1, inspectionurl_1, detailpayload_1 = sql_injection(url, check_url)
        print_blue("\n[*] SQL Injection 점검 결과")
        inspection_result(url, payload_1, category_1, num_1, risk_1, targeturl_1, inspectionurl_1, detailpayload_1)
        
        print_blue("\n[*] DB Connection")
        db_class = dbModule.Database()
        db_class.checkList(url, payload_1, category_1, num_1, risk_1, targeturl_1, inspectionurl_1, detailpayload_1)
        print_blue("[*] DB Close")

    # 점검항목2: 크로스사이트스크립트(XSS)
    if '크로스사이트스크립팅(XSS)' in checkedContents:
        payload_2, category_2, num_2, risk_2, targeturl_2, inspectionurl_2, detailpayload_2 = xss(url, check_url, identi_paths)
        print_blue("\n[*] XSS 점검 결과")
        inspection_result(url, payload_2, category_2, num_2, risk_2, targeturl_2, inspectionurl_2, detailpayload_2)

        print_blue("\n[*] DB Connection")
        db_class = dbModule.Database()
        db_class.checkList(url, payload_2, category_2, num_2, risk_2, targeturl_2, inspectionurl_2, detailpayload_2)
        print_blue("[*] DB Close")

    # 점검항목3: 디렉토리 트레버셜(Directory Traversal)
    if '디렉토리 트레버설(Directory Traversal)' in checkedContents: 
        payload_3, category_3, num_3, risk_3, targeturl_3, inspectionurl_3, detailpayload_3 = directory_traversal(url, check_url, identi_paths)
        print_blue("\n[*] Directory Traversal 점검 결과")
        inspection_result(url, payload_3, category_3, num_3, risk_3, targeturl_3, inspectionurl_3, detailpayload_3)

        print_blue("\n[*] DB Connection")
        db_class = dbModule.Database()
        db_class.checkList(url, payload_3, category_3, num_3, risk_3, targeturl_3, inspectionurl_3, detailpayload_3)
        print_blue("[*] DB Close")

    return url

################## jsonl 1 ###############################
# def update_jsonl_with_added_record(record):
#     existing_records = []

#     with jsonlines.open('./Inter_YourCode-X/Windows_YourCode-X/openai_dataset.jsonl', 'r') as reader:
#         for existing_record in reader:
#             existing_records.append(existing_record)

#     existing_records.append(record)

#     with jsonlines.open('./Inter_YourCode-X/Windows_YourCode-X/openai_dataset.jsonl', 'w') as writer:
#         writer.write_all(existing_records)

#     print("JSONL 파일이 성공적으로 업데이트되었습니다.")

# def fetch_data_and_export_to_jsonl():
#     try:
#         db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
#         cursor = db.cursor()

#         select_query = "SELECT * FROM list"
#         cursor.execute(select_query)

#         result = cursor.fetchall()

#         chat_messages = []
#         for record in result:
#             system_message = {"role": "system", "content": "do not answer except to provide code analyzed based on the results of web vulnerability checks. All text except code is provided in Korean"}

#             user_messages = [
#                 {"role": "user", "content": "url"},
#                 {"role": "assistant", "content": record[1]}  # Use record[1] for the 'url' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#             user_messages = [
#                 {"role": "user", "content": "payload"},
#                 {"role": "assistant", "content": record[2]}  # Use record[2] for the 'payload' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#             user_messages = [
#                 {"role": "user", "content": "category"},
#                 {"role": "assistant", "content": record[3]}  # Use record[3] for the 'category' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#             user_messages = [
#                 {"role": "user", "content": "num"},
#                 {"role": "assistant", "content": str(record[4])}  # Use record[4] for the 'num' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#             user_messages = [
#                 {"role": "user", "content": "target_url"},
#                 {"role": "assistant", "content": record[6]}  # Use record[6] for the 'targeturl' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#             user_messages = [
#                 {"role": "user", "content": "inspection_url"},
#                 {"role": "assistant", "content": record[7]}  # Use record[7] for the 'inspectionurl' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#             user_messages = [
#                 {"role": "user", "content": "detail_payload"},
#                 {"role": "assistant", "content": record[8]}  # Use record[8] for the 'detailpayload' column
#             ]

#             chat_messages.append({"messages": [system_message, *user_messages]})

#         # JSONL 파일로 저장
#         with jsonlines.open('./Inter_YourCode-X/Windows_YourCode-X/openai_dataset.jsonl', 'w') as writer:
#             for message in chat_messages:
#                 writer.write(message)

#     except Exception as e:
#         print(f"에러 발생: {e}")
#     finally:
#         db.close()

# # Call the function to fetch data and export to JSONL
# fetch_data_and_export_to_jsonl()

# def get_openai_dataset():
#     try:
#         dataset_file_path = './Inter_YourCode-X/Windows_YourCode-X/openai_dataset.jsonl'

#         openai_dataset_list = []

#         with jsonlines.open(dataset_file_path, 'r') as reader:
#             for record in reader:
#                 openai_dataset_list.append(record)

#         return openai_dataset_list
#     except Exception as e:
#         print(f"에러 발생: {e}")
#         return []

# ######################### openai #####################################
# # openai.api_key 설정
# openai.api_key = "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"

# # Fine-tuning에 사용할 JSONL 파일 업로드
# file_path = "E:\\YourCode-X\\YourCode-X\\Inter_YourCode-X\\Windows_YourCode-X\\openai_dataset.jsonl"
# file_upload_response = openai.File.create(
#     file=open(file_path, "rb"),
#     purpose="fine-tune"
# )

# # 업로드한 파일의 ID 얻기
# file_id = file_upload_response["id"]

# # 작업 시작
# fine_tuning_job_response = openai.FineTuningJob.create(training_file=file_id, model="gpt-3.5-turbo")

# # Fine-tuning 작업이 완료될 때까지 대기
# # fine_tuning_job_id = fine_tuning_job_response['id']
# # openai.FineTuningJob.wait_until_done(fine_tuning_job_id)

# @app.route("/openai/api", methods=["POST"])
# def chatGPT():
#     try:
#         input_data = request.json
#         user_content = input_data.get('userContent')
#         print(f"user_content: {user_content}")

#         completion = openai.ChatCompletion.create(
#             model="gpt-3.5-turbo",
#             prompt=user_content,
#             max_tokens=1000
#         )
#         assistant_content = completion["choices"][0]["text"]
#         return jsonify({"result": assistant_content})

#     except Exception as e:
#         print(f"에러 메시지: {str(e)}")
#         return jsonify({"result": "답변할 수 있는 질문이 아닙니다."})
    
# if __name__ == '__main__':
#     app.run(debug=True)


# Flask 애플리케이션 초기화
app = Flask(__name__)

# openai.api_key 설정
openai.api_key = "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"

# 데이터베이스에서 대화 데이터를 가져와서 JSONL 파일로 저장하는 함수
def fetch_data_and_export_to_jsonl():
    try:
        db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
        cursor = db.cursor()

        select_query = "SELECT * FROM list"
        cursor.execute(select_query)

        result = cursor.fetchall()

        chat_messages = []
        for record in result:
            system_message = {"role": "system", "content": "do not answer except to provide code analyzed based on the results of web vulnerability checks. All text except code is provided in Korean"}

            user_messages = [
                {"role": "user", "content": "url"},
                {"role": "assistant", "content": record[1]}  # Use record[1] for the 'url' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

            user_messages = [
                {"role": "user", "content": "payload"},
                {"role": "assistant", "content": record[2]}  # Use record[2] for the 'payload' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

            user_messages = [
                {"role": "user", "content": "category"},
                {"role": "assistant", "content": record[3]}  # Use record[3] for the 'category' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

            user_messages = [
                {"role": "user", "content": "num"},
                {"role": "assistant", "content": str(record[4])}  # Use record[4] for the 'num' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

            user_messages = [
                {"role": "user", "content": "target_url"},
                {"role": "assistant", "content": record[6]}  # Use record[6] for the 'targeturl' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

            user_messages = [
                {"role": "user", "content": "inspection_url"},
                {"role": "assistant", "content": record[7]}  # Use record[7] for the 'inspectionurl' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

            user_messages = [
                {"role": "user", "content": "detail_payload"},
                {"role": "assistant", "content": record[8]}  # Use record[8] for the 'detailpayload' column
            ]

            chat_messages.append({"messages": [system_message, *user_messages]})

        # JSONL 파일로 저장
        with jsonlines.open('./Inter_YourCode-X/Windows_YourCode-X/openai_dataset.jsonl', 'w') as writer:
            for message in chat_messages:
                writer.write(message)

    except Exception as e:
        print(f"에러 발생: {e}")
    finally:
        db.close()

# OpenAI API로 대화 데이터 전송
def send_data_to_openai():
    try:
        # JSONL 파일 업로드
        file_path = "./Inter_YourCode-X/Windows_YourCode-X/openai_dataset.jsonl"
        file_upload_response = openai.File.create(
            file=open(file_path, "rb"),
            purpose="fine-tune"
        )

        # 업로드한 파일의 ID 얻기
        file_id = file_upload_response["id"]

        # Fine-tuning 작업 시작
        fine_tuning_job_response = openai.FineTuningJob.create(training_file=file_id, model="gpt-3.5-turbo")

        # Fine-tuning 작업이 완료될 때까지 대기
        # fine_tuning_job_id = fine_tuning_job_response['id']
        # openai.FineTuningJob.wait_until_done(fine_tuning_job_id)

        print("OpenAI에 데이터 전송 및 Fine-tuning 작업이 시작되었습니다.")

    except Exception as e:
        print(f"에러 발생: {e}")

# 데이터베이스에서 대화 데이터 가져오고 JSONL 파일로 저장
fetch_data_and_export_to_jsonl()

# OpenAI API로 데이터 전송
send_data_to_openai()

# OpenAI API로 대화 생성 및 반환
@app.route("/openai/api", methods=["POST"])
def chat_gpt():
    try:
        input_data = request.json
        user_content = input_data.get('userContent')
        print(f"user_content: {user_content}")

        completion = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            prompt=user_content,
            max_tokens=1000
        )

        assistant_content = completion["choices"][0]["text"]
        return jsonify({"result": assistant_content})

    except Exception as e:
        print(f"에러 메시지: {str(e)}")
        return jsonify({"result": "답변할 수 있는 질문이 아닙니다."})

if __name__ == '__main__':
    app.run(debug=True)