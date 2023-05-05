import axios from "axios";

export const loadTitles = async () => {
    try {
      const res = await axios.get("http://localhost:8000/posts/title");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
export const loadPostList = async (pageNumber:string) => {
    const res = await axios.get(
      `http://localhost:8000/posts?pageNumber=${pageNumber}&pageSize=${5}`
    );
    return res.data;
  };
  
export const loadOtherPost = async (id:string|undefined) => {
  const res = await axios.get(`http://localhost:8000/postlists/${id}`);
  return res.data;
};

export const loadPost = async (id:string|undefined) => {
  const res = await axios.get(`http://localhost:8000/posts/${id}`);
  return res.data;
};

  export const savePost = async (title:string,content:string) => {
    try {
      await axios.post("http://localhost:8000/posts/write", {
        title: title,
        content: content,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const updatePost = async (postId:string|undefined,title:string,content:string) => {
    try {
      await axios.patch(`http://localhost:8000/posts/${postId}`, {
        title: title,
        content: content,
      });
    } catch (err) {
      console.log(err);
    }
  };