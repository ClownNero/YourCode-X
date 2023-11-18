import pymysql
 
class Database:
    def __init__(self):
        pass
    def checkList(self, url, payload, category, num, risk, targeturl, inspectionurl, detailpayload):
        try:
            # MySQL 데이터베이스 연결 & 데이터 베이스 접근
            db = pymysql.connect(host='localhost', user='root', db='YourCode', password='root', charset='utf8')
            cursor = db.cursor()             
            # 데이터베이스에서 입력받은 URL이 존재하는지 확인
            select_user = "SELECT url FROM user where url=%s"
            cursor.execute(select_user,(url,))
            result = cursor.fetchone()

            # payload, targeturl, inspectionurl, detailpayload 값을 문자열로 변환
            payload_str = '\n'.join(payload)
            targeturl_str = '\n'.join(targeturl)
            inspectionurl_str = '\n'.join(inspectionurl)
            detailpayload_str = '\n'.join(detailpayload)

            # user 테이블에 없는 경우
            if result is None:
                # SQL 쿼리문 실행
                insert_user = "INSERT INTO user VALUES(%s)"
                cursor.execute(insert_user,(url,))
                print(f"DB 'user' Table Insert Success: {url}")

                insert_list = "INSERT INTO list (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str))
                print(f"DB 'list' Table Insert Success: {category}")
                db.commit()
            
            # user 테이블에는 있는 경우
            else:
                select_list = "SELECT category FROM list where url=%s AND category=%s"
                cursor.execute(select_list,(url,category))
                result = cursor.fetchone()

            # user 테이블에는 있지만 취약점이 다른 경우
                if result is None:
                    insert_list = "INSERT INTO list (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                    cursor.execute(insert_list, (url, payload_str, category, num, risk, targeturl_str, inspectionurl_str, detailpayload_str))
                    print(f"DB 'list' Table Insert Success: {category}")
                    db.commit()
            
            # user에도 있고 취약점도 같음
                else:
                    # checking 테이블에서 있는지 확인
                    select_checking = "SELECT category FROM checking where url=%s AND category=%s"
                    cursor.execute(select_checking,(url,category))
                    result_c = cursor.fetchone()

                    # 없음 -> checking 테이블: list에 있던 값 삽입
                    #      -> list 테이블에 결과값 삽입
                    if result_c is None:
                        insert_checking ="""
                                            INSERT INTO checking (url, payload, category, num, risk, targeturl, inspectionurl, detailpayload) 
                                            SELECT url, payload, category, num, risk, targeturl, inspectionurl, detailpayload 
                                            FROM list WHERE url = %s AND category = %s
                                         """
                        cursor.execute(insert_checking, (url, category))

                        update_list = "UPDATE list SET payload=%s, num=%s, risk=%s, targeturl=%s, inspectionurl=%s, detailpayload=%s WHERE url=%s AND category=%s"
                        cursor.execute(update_list, (payload_str, num, risk, targeturl_str, inspectionurl_str, detailpayload_str,url, category))
                        print(f"DB 'chaking' Table Insert Success: {cateogry}")
                        print(f"DB 'list' Table Update Success: {cateogry}")

                        db.commit()    

                    # 있음 -> checking 테이블: list에 있던 값 업뎃
                    #      -> list 테이블: 새로운 결과값 업뎃
                    else:                 
                        update_checking ="""
                                            UPDATE checking 
                                            SET payload = (SELECT payload FROM list WHERE url=%s AND category=%s),
                                            num = (SELECT num FROM list WHERE url=%s AND category=%s),
                                            risk = (SELECT risk FROM list WHERE url=%s AND category=%s),
                                            targeturl = (SELECT targeturl FROM list WHERE url=%s AND category=%s),
                                            inspectionurl = (SELECT inspectionurl FROM list WHERE url=%s AND category=%s),
                                            detailpayload = (SELECT detailpayload FROM list WHERE url=%s AND category=%s)
                                            WHERE url=%s AND category=%s
                                         """
                        cursor.execute(update_checking, (url, category,url, category,url, category,url, category,url, category,url, category,url, category))

                        update_list = "UPDATE list SET payload=%s, num=%s, risk=%s, targeturl=%s, inspectionurl=%s, detailpayload=%s WHERE url=%s AND category=%s"
                        cursor.execute(update_list, (payload_str, num, risk, targeturl_str, inspectionurl_str, detailpayload_str,url, category))
                        print(f"DB 'checking' Table Update Success: {category}")
                        print(f"DB 'list' Table Update Success: {category}")
                    db.commit()
        except Exception as e:
            db.rollback()
            print(f"에러 발생: {e}")
        finally:
            db.close()
