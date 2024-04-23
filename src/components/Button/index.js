import React from "react";
import { Button } from "react-bootstrap";

function AButton({
  children,
  action,
  variant,
  size,
  loading,
  disabeld,
  className,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabeld}
      size={size}
    >
      {loading ? "Loading" : children}
    </Button>
  );
}

export default AButton;
