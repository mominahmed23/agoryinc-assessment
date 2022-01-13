import "./styles.css";
const Button = ({ variant = "primary", children, onClick, ...rest }) => {
  return (
    <button
      className={`custom-button ${variant}`}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
