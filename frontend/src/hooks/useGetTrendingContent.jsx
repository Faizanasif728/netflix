import { useEffect, useState } from "react";
import { useContentStore } from "../store/content";
import axios from "axios";
import { useAuthStore } from "../store/authUser";

const useGetTrendingContent = () => {
  const [trendingContent, setTrendingContent] = useState(null);
  const { contentType } = useContentStore();
  const { user } = useAuthStore();

  useEffect(() => {
    const getTrendingContent = async () => {
      const res = await axios.get(`http://localhost:3000/movie/trending`, {
        headers: {
          Authorization: `Bearer ${user}`, // Add the token to the Authorization header
        },
      });
      console.log(res);
      setTrendingContent(res.data.content);
    };

    getTrendingContent();
  }, [contentType, user]);

  return { trendingContent };
};
export default useGetTrendingContent;
