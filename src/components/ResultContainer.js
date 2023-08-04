import React, { useEffect, useState, useContext } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import { HeaderContext } from "../App";

export default function ResultContainer() {
  const apiKey = "5581761c8fb14321a7e0b74248e4c56e";
  const { state } = useContext(HeaderContext);

  const [resultData, setResultData] = useState([]);
  const fetchNEWS = () => {
    let url = "https://newsapi.org/v2/",
      keyParam = `&apiKey=${apiKey}`;
    switch (state.priority) {
      case "keyword":
        url =
          url +
          `everything?q=${state.keyword}&from=${new Date()
            .toJSON()
            .slice(0, 10)}&sortBy=publishedAt` +
          keyParam;
        break;
      case "category":
        url = url + `top-headlines?category=${state.category}` + keyParam;
        break;
      case "country":
        url = url + `top-headlines?country=${state.country}` + keyParam;
        break;
      case "language":
        url = url + `top-headlines?language=${state.language}` + keyParam;
        break;
      default:
        url =
          url +
          `everything?q=all&from=${new Date()
            .toJSON()
            .slice(0, 10)}&sortBy=publishedAt` +
          keyParam;
    }
    axios.get(url).then((response) => {
      console.log(response);
      setResultData(response.data.articles);
    });
  };

  useEffect(() => {
    fetchNEWS();
  }, [state]);

  const content = resultData?.map((x, index) => (
    <NewsCard key={index} article={x} />
  ));

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "10px",
        }}
      >
        {content}
      </div>
    </div>
  );
}
