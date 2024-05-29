import CartIcon from "../../../assets/icons-svg-code/CartIcon";
import classNames from "classnames";
import styles from "./custom_car_button.module.scss";

function CustomCartButton({ propsBackground }) {
  return (
    <>
      <div
        className={classNames(styles.div, {
          [styles.gradient]: propsBackground === "gradient",
        })}
      >
        <CartIcon />
      </div>
    </>
  );
}

export default CustomCartButton;
