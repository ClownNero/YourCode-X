import pymysql
 
class Database:
    def __init__(self):
        pass

    def checkList(self, url, payload, category, num, risk, targeturl):
        try:
            # MySQL 데이터베이스 연결 & 데이터 베이스 접근
            db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
            cursor = db.cursor()             
            # 데이터베이스에서 입력받은 URL이 존재하는지 확인
            print(url)
            select_sql = "SELECT url FROM user where url=%s"
            cursor.execute(select_sql,(url,))
            result = cursor.fetchone()
            print(result)

            # payload, targeturl 값을 문자열로 변환
            payload_str = '\n'.join(payload)
            targeturl_str = '\n'.join(targeturl)

            if result is None:
                # SQL 쿼리문 실행
                insert_user = "INSERT INTO user VALUES(%s)"
                cursor.execute(insert_user,(url,))

                # print(type(url), url)
                # print(type(payload_str), payload_str)
                # print(type(category), category)
                # print(type(num), num)
                # print(type(risk), risk)
                # print(type(targeturl_str), targeturl_str)

                insert_list = "INSERT INTO list (url, payload, category, num, risk, targeturl) VALUES (%s, %s, %s, %s, %s, %s)"
                cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str))
                db.commit()
            else:
                update_sql = "UPDATE list SET payload=%s, category=%s, num=%s, risk=%s, targeturl=%s  WHERE url=%s"
                cursor.execute(update_sql, (payload_str, category, num, risk, targeturl_str, url))
                db.commit()
        except Exception as e:
            db.rollback()
            print(f"에러 발생: {e}")
        finally:
            db.close()