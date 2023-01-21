import classes from "./Button.module.css";

function Button(props) {
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      
    >
      {props.children}
    </button>
  );
}

export default Button;