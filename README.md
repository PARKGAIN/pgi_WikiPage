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
### GET /posts/:id/mentioned-posts
- 글의 본문에 포함된 다른 글의 제목을 가져옴
- return : PostsTitle[]
### GET /posts/:id
- 글의 제목과 본문을 가져옴
- return : Post
