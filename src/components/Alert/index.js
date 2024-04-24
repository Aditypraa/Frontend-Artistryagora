import React from "react";
import { Alert } from "react-bootstrap";

export default function ComponentAlert({ message, type }) {
  return <Alert variant={type}> {message} </Alert>;
}
