
**How to Run**
1. Make sure you have Chrome browser installed.  
2. Download chromedriver and put it into bin folder: ./inscrawler/bin/chromedriver  
3. Install Selenium: pip install -r requirements.txt  
```
cp inscrawler/secret.py.dist inscrawler/secret.py
```

Crawler reference: [https://github.com/huaying/instagram-crawler](https://github.com/huaying/instagram-crawler)

**How to run Frontend=REACT**
https://eunvanz.github.io/react/2018/06/05/React-create-react-app%EC%9C%BC%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/


Success! Created react-todo at C:\Users\jeoki\OneDrive\SCC Projects\scc-hotplace\react-todo
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd react-todo
  npm start

**webpack error**
```
$ npm uninstall webpack
$ npm i -D webpack
```


## Running the app

If you're using a virtualenv, activate it.

```
source venv/bin/activate
```

Then run the Flask app:

```
python app.py
```

## mongodb 설치
https://devlog.jwgo.kr/2019/02/26/how-to-install-mongodb-on-ubuntu/

http://blog.miyu.pe.kr/953

# ubuntu 16.04 mongodb
sudo systemctl stop mongod
sudo systemctl restart mongod 

// 실행
sudo service mongod start
// 확인(mongoDB 콘솔에 접속해보기)
mongo
// 나오기
exit
// 참고: 스탑
sudo service mongod stop


. myenv/bin/activate

**인코딩 해결**
https://toughrogrammer.tistory.com/222

**port forwarding**
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 5000

**server 계속 돌리기**
nohup python app.py &

//확인
cat nohup.out

//서버 강제종료
// 아래 명령어로 미리 pid 값(프로세스 번호)을 본다
ps -ef | grep 'python'
// 아래 명령어로 특정 프로세스를 죽인다
kill -9 [pid값]


