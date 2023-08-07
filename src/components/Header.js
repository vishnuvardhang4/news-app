import React, { useContext } from "react";
import { HeaderContext } from "../App";
import SelectField from "./fields/SelectField";
import InputField from "./fields/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faFilter } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const { options, state } = useContext(HeaderContext);

  const { filter, filterDispatch, showFilter, setShowFilter, setTriggerAPI } =
    state;

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
    height: "25px",
    paddingRight: "5px",
    backgroundColor: "darkorange",
    border: "1px solid #CCC",
    borderRadius: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "1px solid #CCC",
    borderRadius: "5px",
    color: "white",
    fontSize: "large",
    margin: "0px 10px",
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
          <InputField
            data={{
              container: {
                containerStyle: {},
              },
              label: { showLabel: false },
              input: {
                inputId: "search-bar",
                inputStyle: searchbarStyle,
                inputType: "text",
                placeholder: "Enter keyword",
                value: filter.keyword,
                onChange: (e) => {
                  filterDispatch({
                    action: "keyword",
                    keyword: e.target.value,
                  });
                },
              },
            }}
          />
        </div>
        <SelectField
          data={{
            select: {
              selectStyle: { ...selectBoxStyle, width: "100px" },
              selectId: "category",
              selectValue: filter.category,
              onChange: (e) => {
                filterDispatch({
                  action: "category",
                  category: e.target.value,
                });
              },
              options: options.categoryArray,
            },
            label: {
              labelStyle: labelStyle,
              labelFor: "category",
              labelValue: "category",
            },
            container: {
              containerStyle: selectBlkStyle,
            },
          }}
        />
        <SelectField
          data={{
            select: {
              selectStyle: selectBoxStyle,
              selectId: "country",
              selectValue: filter.country,
              onChange: (e) => {
                filterDispatch({ action: "country", country: e.target.value });
              },
              options: options.countryArray,
            },
            label: {
              labelStyle: labelStyle,
              labelFor: "country",
              labelValue: "country",
            },
            container: {
              containerStyle: selectBlkStyle,
            },
          }}
        />
        <SelectField
          data={{
            select: {
              selectStyle: selectBoxStyle,
              selectId: "language",
              selectValue: filter.language,
              onChange: (e) => {
                filterDispatch({
                  action: "language",
                  language: e.target.value,
                });
              },
              options: options.languageArray,
            },
            label: {
              labelStyle: labelStyle,
              labelFor: "language",
              labelValue: "language",
            },
            container: {
              containerStyle: selectBlkStyle,
            },
          }}
        />
        <button
          style={buttonStyle}
          onClick={() => {
            setTriggerAPI(true);
          }}
        >
          <FontAwesomeIcon icon={faPlay} />
        </button>
        <button
          style={{
            ...buttonStyle,
            backgroundColor: showFilter ? "darkorange" : "#4CAF50",
          }}
          onClick={() => setShowFilter(!showFilter)}
        >
          <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
  );
}
