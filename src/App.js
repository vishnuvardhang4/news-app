import "./App.css";
import React, { createContext, useState, useReducer } from "react";
import Header from "./components/Header";
import ResultContainer from "./components/ResultContainer";
export const HeaderContext = createContext();

function App() {
  const languageArray = [
    "",
    "ar",
    "de",
    "en",
    "es",
    "fr",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "ru",
    "sv",
    "ud",
    "zh",
  ];
  const categoryArray = [
    "",
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countryArray = [
    "",
    "ae",
    "ar",
    "at",
    "au",
    "be",
    "bg",
    "br",
    "ca",
    "ch",
    "cn",
    "co",
    "cu",
    "cz",
    "de",
    "eg",
    "fr",
    "gb",
    "gr",
    "hk",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "it",
    "jp",
    "kr",
    "lt",
    "lv",
    "ma",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "ph",
    "pl",
    "pt",
    "ro",
    "rs",
    "ru",
    "sa",
    "se",
    "sg",
    "si",
    "sk",
    "th",
    "tr",
    "tw",
    "ua",
    "us",
    "ve",
    "za",
  ];

  const setPriority = (state) => {
    let key,
      updatedState = [],
      priority;

    for (key in state) {
      if (key === "date") {
        state[key].from !== "" && updatedState.push("from");
        state[key].to !== "" && updatedState.push("to");
      } else state[key] !== "" && updatedState.push(key);
    }

    if (updatedState.includes("language")) {
      if (
        updatedState.includes("category") ||
        updatedState.includes("country")
      ) {
        priority = "sources";
      }
    } else if (
      updatedState.includes("category") ||
      updatedState.includes("country")
    ) {
      priority = "top-headlines";
    }

    if (priority === undefined) priority = "everything";

    console.log({ priority });

    return { priority };
  };

  // Filter page options state management useReducer
  const initFilter = {
    keyword: "",
    category: "",
    country: "",
    language: "",
    searchIn: "",
    date: {
      from: "",
      to: "",
    },
    sortBy: "publishedAt",
    pageSize: 20,
    priority: "",
  };

  const reducer = (filter, param) => {
    switch (param.action) {
      case "keyword":
        const { keyword } = param;
        return {
          ...filter,
          keyword,
          ...setPriority({ ...filter, keyword }),
        };
      case "category":
        const { category } = param;
        return {
          ...filter,
          category,
          ...setPriority({ ...filter, category }),
        };
      case "country":
        const { country } = param;
        return {
          ...filter,
          country,
          ...setPriority({ ...filter, country }),
        };
      case "language":
        const { language } = param;
        return {
          ...filter,
          language,
          ...setPriority({ ...filter, language }),
        };
      case "searchIn":
        const { searchIn } = param;
        return {
          ...filter,
          searchIn,
          ...setPriority({ ...filter, searchIn }),
        };
      case "date":
        const { date } = param;
        return {
          ...filter,
          date,
          ...setPriority({ ...filter, date }),
        };
      case "sortBy":
        const { sortBy } = param;
        return {
          ...filter,
          sortBy,
          ...setPriority({ ...filter, sortBy }),
        };
      case "pageSize":
        const { pageSize } = param;
        return {
          ...filter,
          pageSize,
          ...setPriority({ ...filter, pageSize }),
        };
      default:
        return filter;
    }
  };
  const [filter, filterDispatch] = useReducer(reducer, initFilter);

  const filterDispatchCall = (e) => {
    console.group("filterDispatch");
    filterDispatch(e);
    console.groupEnd("filterDispatch");
  };

  const [triggerAPI, setTriggerAPI] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const contextData = {
    options: { languageArray, countryArray, categoryArray },

    state: {
      showFilter,
      setShowFilter,
      triggerAPI,
      setTriggerAPI,
      filter,
      filterDispatch: filterDispatchCall,
    },
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={contextData}>
        <Header />
        <ResultContainer triggerAPI={triggerAPI} />
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
