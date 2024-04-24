import React from "react";
import TextInput from "../TextInput";
import { Form } from "react-bootstrap";

function ComponentTextInputWithLabel({
  label,
  name,
  value,
  type,
  onChange,
  placeholder,
}) {
  return (
    <Form.Group className="mb-2">
      <Form.Label>{label}</Form.Label>
      <TextInput
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default ComponentTextInputWithLabel;
