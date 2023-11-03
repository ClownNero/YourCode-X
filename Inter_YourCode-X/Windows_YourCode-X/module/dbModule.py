import pymysql
 
class Database:
    def __init__(self):
        pass
    def checkList_1(self, url, payload, category, num, risk, targeturl, inspectionurl, detailpayload):
        try:
            # MySQL 데이터베이스 연결 & 데이터 베이스 접근
            db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
            cursor = db.cursor()             
            # 데이터베이스에서 입력받은 URL이 존재하는지 확인
            select_sql = "SELECT url FROM user where url=%s"
            cursor.execute(select_sql,(url,))
            result = cursor.fetchone()

            # payload_1, targeturl_1, inspectionurl_1, detailpayload_1 값을 문자열로 변환
            payload_str = '\n'.join(payload)
            targeturl_str = '\n'.join(targeturl)
            inspectionurl_str = '\n'.join(inspectionurl)
            detailpayload_str = '\n'.join(detailpayload)

            if result is None:
                # SQL 쿼리문 실행
                insert_user = "INSERT INTO user VALUES(%s)"
                cursor.execute(insert_user,(url,))
                print("DB_user Insert Success")

                insert_list = "INSERT INTO list_1 (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str))
                print("DB list_1 Insert Success")
                db.commit()
            else:
                select_list1 = "SELECT url FROM list_1 where url=%s"
                cursor.execute(select_list1,(url,))
                result = cursor.fetchone()

                if result is None:
                    insert_list = "INSERT INTO list_1 (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                    cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str))
                    print("DB list_1 Insert Success")
                    db.commit()
                else:
                    update_sql = "UPDATE list_1 SET payload=%s, category=%s, num=%s, risk=%s, targeturl=%s, inspectionurl=%s, detailpayload=%s WHERE url=%s"
                    cursor.execute(update_sql, (payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str, url))
                    print("DB list_1 Update Success")
                    db.commit()
        except Exception as e:
            db.rollback()
            print(f"에러 발생: {e}")
        finally:
            db.close()

    def checkList_2(self, url, payload, category, num, risk, targeturl, inspectionurl, detailpayload):
        try:
            # MySQL 데이터베이스 연결 & 데이터 베이스 접근
            db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
            cursor = db.cursor()             
            # 데이터베이스에서 입력받은 URL이 존재하는지 확인
            select_sql = "SELECT url FROM user where url=%s"
            cursor.execute(select_sql,(url,))
            result = cursor.fetchone()

            # payload_2, targeturl_2, inspectionurl_2, detailpayload_2 값을 문자열로 변환
            payload_str = '\n'.join(payload)
            targeturl_str = '\n'.join(targeturl)
            inspectionurl_str = '\n'.join(inspectionurl)
            detailpayload_str = '\n'.join(detailpayload)

            if result is None:
                # SQL 쿼리문 실행
                insert_user = "INSERT INTO user VALUES(%s)"
                cursor.execute(insert_user,(url,))
                print("DB_user Insert Success")

                insert_list = "INSERT INTO list_2 (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str))
                print("DB list_2 Insert Success")
                db.commit()
            else:
                select_list1 = "SELECT url FROM list_2 where url=%s"
                cursor.execute(select_list1,(url,))
                result = cursor.fetchone()

                if result is None:
                    insert_list = "INSERT INTO list_2 (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                    cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str))
                    print("DB list_2 Insert Success")
                    db.commit()
                else:
                    update_sql = "UPDATE list_2 SET payload=%s, category=%s, num=%s, risk=%s, targeturl=%s, inspectionurl=%s, detailpayload=%s WHERE url=%s"
                    cursor.execute(update_sql, (payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str, url))
                    print("DB list_2 Update Success")
                    db.commit()
        except Exception as e:
            db.rollback()
            print(f"에러 발생: {e}")
        finally:
            db.close()