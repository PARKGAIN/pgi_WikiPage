import axios from "axios";

export const loadTitles = async () => {
    try {
      const res = await axios.get("http://localhost:8000/posts/title");
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
