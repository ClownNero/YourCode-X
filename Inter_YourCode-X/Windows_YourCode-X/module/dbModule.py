import pymysql
 
class Database:
    def __init__(self):
        pass
    def checkList_1(self, url, payload_1, category_1, num_1, risk_1, targeturl_1, inspectionurl_1, detailpayload_1):
        try:
            # MySQL 데이터베이스 연결 & 데이터 베이스 접근
            db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
            cursor = db.cursor()             
            # 데이터베이스에서 입력받은 URL이 존재하는지 확인
            select_sql = "SELECT url FROM user where url=%s"
            cursor.execute(select_sql,(url,))
            result = cursor.fetchone()

            # payload_1, targeturl_1, inspectionurl_1, detailpayload_1 값을 문자열로 변환
            payload_1str = '\n'.join(payload_1)
            targeturl_1str = '\n'.join(targeturl_1)
            inspectionurl_1str = '\n'.join(inspectionurl_1)
            detailpayload_1str = '\n'.join(detailpayload_1)

            if result is None:
                # SQL 쿼리문 실행
                insert_user = "INSERT INTO user VALUES(%s)"
                cursor.execute(insert_user,(url,))
                print("DB_user Insert Success")

                # print(type(url), url)
                # print(type(payload_str), payload_str)
                # print(type(category), category)
                # print(type(num), num)
                # print(type(risk), risk)
                # print(type(targeturl_str), targeturl_str)

                insert_list = "INSERT INTO list_1 (url, payload_1, category_1, num_1, risk_1, targeturl_1, inspectionurl_1, detailpayload_1) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(insert_list, (url, payload_1str, category_1, num_1, risk_1, targeturl_1str, inspectionurl_1str, detailpayload_1str))
                print("DB list_1 Insert Success")
                db.commit()
            else:
                update_sql = "UPDATE list_1 SET payload_1=%s, category_1=%s, num_1=%s, risk_1=%s, targeturl_1=%s, inspectionurl_1=%s, detailpayload_1=%s WHERE url=%s"
                cursor.execute(update_sql, (payload_1str, category_1, num_1, risk_1, targeturl_1str, inspectionurl_1str, detailpayload_1str, url))
                print("DB list_1 Update Success")
                db.commit()
        except Exception as e:
            db.rollback()
            print(f"에러 발생: {e}")
        finally:
            db.close()