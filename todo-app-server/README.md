```bash
mkdir todo-app-backend

cd todo-app-backend

npm init

npm install express-generator -g

express --view=jade

npm install cors ejs helmet
# cors : Cross-Origin Resource Sharing, 한 출처에서 실행 중인 웹앱이 다른 출처의 선택한 자원에 접근할 수 있는 권한을 부여하도록 브라우저에게 알려주는 모듈
# ejs : Embedded Javascript, Html 태그 안에 자바스크립트를 내장할 수 있도록 하는 모듈
# helmet : Express.js 사용시 http 헤더 설정을 자동으로 바꿔 취약성으로부터 보호할 수 있도록 하는 모듈

npm install nodemon -g
# 해당 프로젝트의 파일을 트래킹하며 변경사항이나 어떠한 파일에서 저장이 일어났을 경우 서버를 다시 시작함

package.json의 scripts 수정
"start": "node ./bin/www"
"start": "nodemon --lagacy-watch ./bin/www"

npm install dotenv
# 환경변수 작업

npm install sequelize sequelize-cli mysql2 @babel/core @babel/register
# mysql2, mysql 사용할 수 있게 해주는 모듈
# sequelize-cli, sequelize를 손쉽게 생성하기 위한 cli 모듈
# @babel/register, js 컴파일러 Babel을 사용할 수 있게 해주는 모듈

sequelize
# sequelize 명령어를 사용하려면 루트 디렉토리까지 이동한 뒤 실행해야하므로 .sequelizerc 파일을 생성하여 셋업한다.

sequelize init

sequelize model:generate --name User --attributes "username:String,password:String"
sequelize model:generate --name Todo --attributes "todoType:Integer,todoName:String,alias:String,inputType:String,completeYn:String,note:String"
# [--name user] user라는 이름의 모델에
# [--attributes "username:String,password:String"] String 타입의 username, String 타입의 password를 가진 모델을 만들라는 명령어

sequelize db:create
# table 생성

sequelize db:migrate:undo:all
# 컬럼 되돌리기
sequelize db:migrate
# 컬럼 생성

sequelize seed:generate --name todo-init-data
sequelize seed:generate --name user-init-data
# DB를 생성하자마자 필수적으로 가지고 있어야 하는 정적 데이터를 넣을 때 사용

sequelize db:seed:all
```