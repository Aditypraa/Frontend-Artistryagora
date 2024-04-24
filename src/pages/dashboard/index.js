import React from "react";
import { Container } from "react-bootstrap";
import ComponentBreadCrumb from "../../components/Breadcrumb";

export default function PagesDashboard() {
  return (
    <Container className="mt-3">
      <ComponentBreadCrumb />
      <h1>Dashboard</h1>
    </Container>
  );
}
