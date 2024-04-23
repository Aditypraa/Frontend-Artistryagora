export const Hello = (props) => {
  return `Hello Bang ${props.name}`;
};

Hello.defaultProps = {
  name: "Stranger",
};
