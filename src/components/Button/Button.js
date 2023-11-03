import css from "./button.module.css";
import clsx from "clsx";

// export default function Button({ children, variant, outline }) {
// const style = ["button", variant];
// if (outline) {
//   style.push("outline");
// }
// return (
//   <div className={clsx("button", variant, outline && "outline")}>
//     {children}
//   </div>
// );
// }

export default function Button({ children, variant, outline }) {
  return <div className={CSS[variant]}>{children}</div>;
}
