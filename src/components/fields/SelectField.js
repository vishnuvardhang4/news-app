import React from "react";

export default function SelectField({ data }) {
  const { container, label, select } = data;
  const { containerStyle } = container;
  const { labelStyle, labelFor, labelValue } = label;
  const { selectStyle, selectId, selectValue, onChange, options } = select;
  const optionList = options.map((l, index) => (
    <option value={l} key={index}>
      {l}
    </option>
  ));
  return (
    <div id="select-block" style={containerStyle}>
      <label style={labelStyle} for={labelFor}>
        {labelValue}
      </label>
      <select
        style={selectStyle}
        id={selectId}
        value={selectValue}
        onChange={(e) => onChange(e)}
      >
        {optionList}
      </select>
    </div>
  );
}
