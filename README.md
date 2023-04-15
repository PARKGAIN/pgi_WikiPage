# 위키 페이지

## 개발기간

2023.4.11. ~ 2023.4.14. 

refactor : 

## 기능
- 위키페이지는 제목과 본문으로 구성되며 각각 텍스트입니다.

- 메인페이지에서는 여러개의 위키페이지제목이 목록으로 나옵니다.

- 메인페이지에 목록으로 보여지는 제목의 갯수는 5개이며, 5개가 넘어가면 페이지를 구분해서 표시합니다.

- 위키페이지 제목을 클릭하면 제목과 본문을 볼 수 있습니다.

- 위키페이지 본문에 다른 위키페이지의 제목이 있으면 자동으로 링크가 걸리고,클릭하면 해당 위키페이지로 이동합니다.

- 메인페이지에서 추가 버튼을 누르면 새로이 입력할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있습니다.

- 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있습니다.

- 위키페이지 아래에는 위키페이지 제목을 포함하는 내용이 담긴 위키페이지의 제목들을 나열합니다.
## 실행방법
```
client : client폴더에서 npm install 후 yarn dev
server : server폴더에서 npm install 후 .env 파일 생성하고 mongodb 패스워드를 DB_PASSWORD로 저장 후 npm start
```
## 기술스택
#### Client
- React
- TypeScript
#### Server
- Node.js
- Express
- MongoDB
## API 명세
### GET /posts?page={page_number}&size={page_size}
- 페이징처리된 글 목록을 가져옴
- return : Posts[]
### POST /posts/write
- 글을 저장함
- body : {title: string, content: string}
- return : 'ok'
### PATCH /posts/:id
- 글을 수정함
- return : 'ok'
### GET /posts/title
- 전체 글의 제목을 가져옴 
- return : PostsTitle[]
### GET /posts/:id
- 글의 제목과 본문을 가져옴
- return : Post
### GET /postlist/:id
- 해당 id 값을 가진 글을 제외한 나머지 글들을 가져옴
- return : PostList[]
