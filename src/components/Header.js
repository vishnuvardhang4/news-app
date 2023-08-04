import React, { useContext } from "react";
import { HeaderContext } from "../App";

export default function Header() {
  const { options, state } = useContext(HeaderContext);

  const {
    keyword,
    setKeyword,
    category,
    setCategory,
    country,
    setCountry,
    language,
    setLanguage,
    priority,
    setPriority,
  } = state;

  const blockStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0px",
    padding: "0px 15px",
    background: "black",
    color: "white",
    position: "Sticky",
    top: 0,
  };

  const labelStyle = { fontSize: "18px", fontWeight: 500, paddingRight: "5px" };

  const selectBoxStyle = {
    width: "50px",
    height: "20px",
    paddingRight: "5px",
    backgroundColor: "darkorange",
    border: "1px solid #CCC",
    borderRadius: "5px",
  };

  const selectBlkStyle = {
    paddingRight: "10px",
  };

  const configBlkStyle = {
    display: "flex",
    flexGrow: 2,
    justifyContent: "flex-end",
  };

  const searchbarContainer = { paddingRight: "40px" };

  const searchbarStyle = {
    height: "25px",
    padding: "0px 10px",
    border: "1px solid #CCC",
    borderRadius: "5px",
  };

  return (
    <div style={blockStyle}>
      <div>
        <h1 id="title">Live NEWS</h1>
      </div>
      <div id="config-block" style={configBlkStyle}>
        <div id="search-container" style={searchbarContainer}>
          <input
            id="search-bar"
            style={searchbarStyle}
            type="text"
            placeholder="Enter keyword"
            value={keyword}
            onChange={(e) => {
              setKeyword(e.target.value);
              setPriority("keyword");
            }}
          />
        </div>
        <div id="select-block" style={selectBlkStyle}>
          <label style={labelStyle} for="category">
            Category
          </label>
          <select
            style={{ ...selectBoxStyle, width: "100px" }}
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              setPriority("category");
            }}
          >
            {options.categoryOptions}
          </select>
        </div>
        <div id="select-block" style={selectBlkStyle}>
          <label style={labelStyle} for="country">
            Country:
          </label>
          <select
            style={selectBoxStyle}
            id="country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
              setPriority("country");
            }}
          >
            {options.countryOptions}
          </select>
        </div>
        <div id="select-block" style={selectBlkStyle}>
          <label style={labelStyle} for="language">
            Language:
          </label>
          <select
            style={selectBoxStyle}
            id="language"
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setPriority("language");
            }}
          >
            {options.languageOptions}
          </select>
        </div>
      </div>
    </div>
  );
}
