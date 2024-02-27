import clsx from "clsx";
import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({
  selected = false,
  type = "button",
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  selected: PropTypes.bool,
  type: PropTypes.string,
  customProp: PropTypes.any,
  children: PropTypes.node,
};
