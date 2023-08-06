import React, { useEffect, useState, useContext } from "react";
import NewsCard from "./NewsCard";
// import axios from "axios";
import { HeaderContext } from "../App";
import FilterContainer from "./FilterContainer";

export default function ResultContainer({ triggerAPI }) {
  const apiKey = "5581761c8fb14321a7e0b74248e4c56e";
  const { state } = useContext(HeaderContext);
  const { filter, setTriggerAPI } = state;

  const [resultData, setResultData] = useState([]);

  const getActiveFilter = (param) => {
    let activeFilter = [],
      i;
    for (i in param) {
      if (i === "date") {
        param[i].from !== "" && activeFilter.push("from");
        param[i].to !== "" && activeFilter.push("to");
      } else param[i] !== "" && activeFilter.push(i);
    }
    return activeFilter;
  };

  const getFilterQuery = (filter, queryObj) => {
    return filter.map((f) => {
      return queryObj[f];
    });
  };

  const where = (source, filter, fliterClass = "not-in") => {
    if (fliterClass === "not-in")
      return source.filter((f) => !filter.includes(f));
    else return source.filter((f) => filter.includes(f));
  };

  const fetchNEWS = () => {
    console.group("resultContainer");

    let url = "https://newsapi.org/v2/",
      keyParam = `&apiKey=${apiKey}`;

    const filterObj = {
      keyword: `&q=${filter.keyword}`,
      category: `&category=${filter.category}`,
      country: `&country=${filter.country}`,
      language: `&language=${filter.language}`,
      from: `&from=${filter.date.from}`,
      to: `&to=${filter.date.to}`,
      sortBy: `&sortBy=${filter.sortBy}`,
      searchIn: `&searchIn=${filter.searchIn}`,
      pageSize: `&pageSize=${filter.pageSize}`,
      page: `&page=${filter.page}`,
    };

    let filterArray = getActiveFilter(filter);
    let path = "everything?";

    switch (filter.priority) {
      case "everything":
        filterArray = where(filterArray, ["category", "country", "priority"]);
        break;
      case "top-headlines":
        filterArray = where(filterArray, [
          "language",
          "from",
          "to",
          "searchIn",
          "sortBy",
          "priority",
        ]);
        path = filter.priority + "?";
        break;
      case "sources":
        filterArray = where(
          filterArray,
          ["category", "country", "language"],
          "in"
        );
        path = `top-headlines/${filter.priority}?`;
        break;
    }

    filterArray = getFilterQuery(filterArray, filterObj);

    const qFilter =
      filterArray.join("")[0] === "&"
        ? filterArray.join("").substring(1)
        : filterArray.join("");

    url = url + path + qFilter + keyParam;
    console.log({ url });

    // if (url.length)
    // axios
    //   .get(url)
    //   .then((response) => {
    //     switch (response.status) {
    //       case 200:
    //         console.log("status: 200");
    //         if (response?.data?.articles.length > 0)
    //           setResultData(response.data.articles);
    //         else if (response?.data?.articles.length)
    //           console.log("no data found");
    //         break;
    //       default:
    //         console.log("error occured");
    //     }
    //     state.setPriority("");
    //   })
    //   .catch((err) => {
    //     console.log(err.response.data.status);
    //     if (err.response.data.status === "error")
    //       alert(err.response.data.message);
    // switch (err.response.data.code) {
    //   case "parameterInvalid":
    //     console.log(err.response.data.message);
    //     break
    //   case "apiKeyExhausted":
    //     console.log(err.response.data.message);
    //     break
    //   case "apiKeyDisabled":
    //     console.log(err.response.data.message);
    //     break
    //     case "apiKeyDisabled":
    //       console.log(err.response.data.message);
    //       break
    // }
    //   state.setPriority("");
    // });
    setTriggerAPI(false);
    console.groupEnd("resultContainer");
  };

  useEffect(() => {
    triggerAPI && fetchNEWS();
  }, [triggerAPI]);

  const content = resultData?.map((x, index) => (
    <NewsCard key={index} article={x} />
  ));

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          padding: "10px",
          width: "100%",
        }}
      >
        {content}
      </div>

      {state.showFilter && (
        <FilterContainer
          style={{
            width: "fit-content",
            padding: "10px",
            height: "82.6vh",
            textAlign: "end",
            backgroundColor: "darkcyan",
            borderLeft: "1px solid #CCC",
          }}
        />
      )}
    </div>
  );
}
