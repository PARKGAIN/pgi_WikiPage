import axios from "axios";

export const loadTitles = async () => {
    try {
      const res = await axios.get("http://localhost:8000/posts/title");
      return res.data;
    } catch (error) {
      console.log(error);
    }
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

export const updatePost = async (postId:number,title:string,content:string) => {
    try {
      await axios.patch(`http://localhost:8000/posts/${postId}`, {
        title: title,
        content: content,
      });
    } catch (err) {
      console.log(err);
    }
  };