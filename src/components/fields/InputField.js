import React from "react";

export default function InputField({ data }) {
  const { container, label, input } = data;
  const { showLabel, labelStyle, labelFor, labelValue } = label;
  const {
    inputId,
    inputStyle,
    inputType,
    placeholder,
    value,
    onChange,
    onBlur = () => {},
  } = input;
  const { containerStyle } = container;

  return (
    <div id="input-block" style={containerStyle}>
      {showLabel && (
        <label style={labelStyle} for={labelFor}>
          {labelValue}
        </label>
      )}

      <input
        id={inputId}
        style={inputStyle}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
        onBlur={() => onBlur()}
      />
    </div>
  );
}
