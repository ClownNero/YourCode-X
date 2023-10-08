import pymysql
 
class Database:
    def __init__(self):
        pass

    def insert_url(self,url):
        # MySQL  데이터베이스 연결
        db = pymysql.connect(host='localhost', user='root', db='yourcode', password='root',charset='utf8')
        # 데이터 베이스 접근
        cursor = db.cursor()

        # SQL 쿼리문 실행
        sql = '''INSERT INTO user (url) VALUES (%s)'''
        cursor.execute(sql,(url,))
        
        # 수정 사항 DB에 저장 후 닫기
        db.commit()
        db.close()