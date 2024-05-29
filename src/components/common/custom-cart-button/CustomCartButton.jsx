import CartIcon from "../../../assets/icons-svg-code/CartIcon";
import classNames from "classnames";
import styles from "./custom_car_button.module.scss";

function CustomCartButton({ propsBackground, hovered }) {
  return (
    <>
      <div
        className={classNames(styles.div, {
          [styles.gradient]: propsBackground === "gradient",
        })}
      >
        <CartIcon calor={hovered ? "#fff" : "#000"} />
      </div>
    </>
  );
}

export default CustomCartButton;
