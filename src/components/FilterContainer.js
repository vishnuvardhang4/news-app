import React, { useContext } from "react";
import SelectField from "./fields/SelectField";
import InputField from "./fields/InputField";
import { HeaderContext } from "../App";

export default function FilterContainer({ style }) {
  const { state } = useContext(HeaderContext);
  const { filter, filterDispatch, setShowFilter, setTriggerAPI } = state;

  const containerStyle = {
    display: "flex",
    fontSize: "18px",
    fontWeight: 500,
    paddingRight: "5px",
    marginBottom: "10px",
  };

  const selectBoxStyle = {
    color: "white",
    width: "100px",
    height: "25px",
    paddingRight: "5px",
    backgroundColor: "darkorange",
    border: "1px solid #CCC",
    borderRadius: "5px",
  };

  const labelStyle = {
    color: "white",
    display: "inline-block",
    fontSize: "18px",
    fontWeight: 500,
    width: "100px",
    paddingRight: "5px",
  };

  return (
    <div style={style}>
      <h3
        style={{
          color: "white",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        Filters
      </h3>
      <SelectField
        data={{
          select: {
            selectStyle: selectBoxStyle,
            selectId: "searchIn",
            selectValue: filter.searchIn,
            onChange: (e) => {
              filterDispatch({ action: "searchIn", searchIn: e.target.value });
            },
            options: ["", "title", "description", "content"],
          },
          label: {
            labelStyle: labelStyle,
            labelFor: "searchIn",
            labelValue: "searchIn",
          },
          container: {
            containerStyle,
          },
        }}
      />
      <SelectField
        data={{
          select: {
            selectStyle: selectBoxStyle,
            selectId: "sortBy",
            selectValue: filter.sortBy,
            onChange: (e) => {
              filterDispatch({ action: "sortBy", sortBy: e.target.value });
            },
            options: ["", "publishedAt", "Relevency", "popularity"],
          },
          label: {
            labelStyle: labelStyle,
            labelFor: "sortBy",
            labelValue: "sortBy",
          },
          container: {
            containerStyle,
          },
        }}
      />
      <InputField
        data={{
          container: {
            containerStyle,
          },
          label: {
            showLabel: true,
            labelValue: "pageSize",
            labelFor: "pageSize",
            labelStyle: labelStyle,
          },
          input: {
            inputId: "pageSize",
            inputStyle: {
              padding: "1px",
              height: "25px",
              width: "100px",
              border: "1px solid #CCC",
              borderRadius: "5px",
            },
            inputType: "number",
            placeholder: "",
            value: filter.pageSize,
            onChange: (e) => {
              filterDispatch({ action: "pageSize", pageSize: e.target.value });
            },
          },
        }}
      />
      <InputField
        data={{
          container: {
            containerStyle,
          },
          label: {
            showLabel: true,
            labelValue: "from",
            labelFor: "from",
            labelStyle: labelStyle,
          },
          input: {
            inputId: "from",
            inputStyle: {
              height: "25px",
              width: "100px",
              border: "1px solid #CCC",
              borderRadius: "5px",
            },
            inputType: "date",
            placeholder: "dd/mm/yyyy",
            value: filter.date.from,
            onChange: (e) => {
              filterDispatch({
                action: "date",
                date: { from: e.target.value, to: filter.date.to },
              });
            },
          },
        }}
      />
      <InputField
        data={{
          container: {
            containerStyle,
          },
          label: {
            showLabel: true,
            labelValue: "to",
            labelFor: "to",
            labelStyle: labelStyle,
          },
          input: {
            inputId: "to",
            inputStyle: {
              height: "25px",
              width: "100px",
              border: "1px solid #CCC",
              borderRadius: "5px",
            },
            inputType: "date",
            placeholder: "dd/mm/yyyy",
            value: filter.date.to,
            onChange: (e) => {
              filterDispatch({
                action: "date",
                date: { to: e.target.value, from: filter.date.from },
              });
            },
          },
        }}
      />
      <button
        style={{
          width: "200px",
          height: "25px",
          border: "1px solid #CCC",
          borderRadius: "5px",
          marginTop: "20px",
          backgroundColor: "darkorange",
          color: "white",
          fontSize: "14px",
          fontWeight: "700",
        }}
        onClick={() => {
          setTriggerAPI(true);
          setShowFilter(false);
        }}
      >
        Apply
      </button>
    </div>
  );
}
