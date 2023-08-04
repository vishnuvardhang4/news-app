import "./App.css";
import React, { createContext, useState } from "react";
import Header from "./components/Header";
import ResultContainer from "./components/ResultContainer";
export const HeaderContext = createContext();

function App() {
  const languageArray = [
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
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const countryArray = [
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

  const languageOptions = languageArray.map((l) => (
    <option value={l}>{l}</option>
  ));
  const countryOptions = countryArray.map((l) => (
    <option value={l}>{l}</option>
  ));
  const categoryOptions = categoryArray.map((l) => (
    <option value={l}>{l}</option>
  ));

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [language, setLanguage] = useState("");
  const [priority, setPriority] = useState("");

  const contextData = {
    options: { languageOptions, countryOptions, categoryOptions },
    state: {
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
    },
  };

  return (
    <div className="App">
      <HeaderContext.Provider value={contextData}>
        <Header />
        <ResultContainer />
      </HeaderContext.Provider>
    </div>
  );
}

export default App;
