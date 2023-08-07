import React from "react";

export default function ProgressBar({ style }) {
  return (
    <div style={style} className="spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
