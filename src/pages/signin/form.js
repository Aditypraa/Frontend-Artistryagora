import React from "react";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import ComponentButton from "../../components/Button";
import { Form } from "react-bootstrap";

export default function FormSignin({
  form,
  handleChange,
  handleSubmit,
  isLoading,
}) {
  return (
    <Form>
      <TextInputWithLabel
        label="Email"
        name="email"
        value={form.email}
        type="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <TextInputWithLabel
        label="Password"
        type="password"
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      <ComponentButton
        loading={isLoading}
        disabeld={isLoading}
        action={handleSubmit}
        variant="primary"
      >
        Submit
      </ComponentButton>
    </Form>
  );
}
