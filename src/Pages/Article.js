import React, { useEffect } from "react";
import Container from "../components/Container";
import Post from "../components/Post";
import { useState } from "react";
import axios from "axios";
import { base_url } from "../environment";

const Article = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(base_url + "article/getArticles");
        console.log(res);
        setArticles(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticles();
  }, []);
  return (
    <Container>
      <div className=" w-screen pt-4 ">
        <div className="flex flex-col items-center md:px-8 space-y-4">
          {articles.map((article, index) => (
            <Post article={article} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Article;
