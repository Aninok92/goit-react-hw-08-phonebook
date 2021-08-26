import PropTypes from "prop-types";
import s from "./Button.module.scss";

const Button = ({ children, onClick, type = "button", ...otherProps }) => (
  <button type={type} className={s.button} onClick={onClick} {...otherProps}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
