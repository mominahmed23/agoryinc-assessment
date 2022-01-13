import "./styles.scss";
const Input = ({ type = "text", onChange, value, children, ...rest }) => {
  if (type === "text") {
    return (
      <input
        className="custom-input"
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
        {...rest}
      />
    );
  }
  if (type === "select") {
    return (
      <select
        className="custom-select"
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e);
          }
        }}
      >
        {children}
      </select>
    );
  }
};

export default Input;
