# 위키 페이지

## 기능

## 실행방법
```
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
