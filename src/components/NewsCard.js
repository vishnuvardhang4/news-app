import React from "react";

export default function NewsCard({ article }) {
  const cardStyle = {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "300px",
    backgroundColor: "ghostwhite",
    border: "1px solid #CCC",
    padding: "0px 10px",
    margin: "0px 0px 10px 0px",
  };

  const sideHeader = {
    fontSize: "18px",
    fontWeight: 700,
    textDecoration: "underline",
    paddingRight: "10px",
  };

  return (
    <div id="news-card" style={cardStyle}>
      <div style={{ minWidth: "35%" }}>
        <img
          src={article.urlToImage}
          style={{ width: "450px", height: "280px" }}
          alt={article.title?.slice(0, 25)}
        />
      </div>
      <div
        style={{
          textAlign: "justify",
          lineHeight: "18px",
          fontSize: "16px",
          fontWeight: 300,
          fontFamily: "math",
          padding: "0px 20px",
        }}
      >
        <div>
          <span style={sideHeader}>Title:</span>
          {article.title}
        </div>
        <div>
          <span style={sideHeader}>Source:</span>
          {article.source.name}
        </div>
        <div>
          <span style={sideHeader}>Author:</span>
          {article.author}
        </div>
        <div>
          <span style={sideHeader}>Published at:</span>
          {article.publishedAt}
        </div>
        <p>
          <span style={sideHeader}>content:</span>
          {article.content?.split("[")[0]}
          <span>
            <a href={article.url}>show more...</a>
          </span>
        </p>
      </div>
    </div>
  );
}
