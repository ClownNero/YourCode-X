import csv

# 연결된 MySQL 데이터베이스 커넥션을 사용합
db = your_existing_database_connection

# 커서 생성
cursor = db.cursor()

# 데이터 쿼리
cursor.execute("SELECT * FROM list_1")

# 결과를 CSV 파일에 쓰기
with open("dataset.csv", "w", newline="") as csv_file:
    csv_writer = csv.writer(csv_file)
    csv_writer.writerow([i[0] for i in cursor.description])  # 열 이름을 추가
    csv_writer.writerows(cursor.fetchall())

# 연결 닫기
cursor.close()