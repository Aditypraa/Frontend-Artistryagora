import React from "react";

export default function ComponentInput({ type, value, name, onChange }) {
  return <input type={type} value={value} name={name} onChange={onChange} />;
}
