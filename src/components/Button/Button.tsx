import React, { FC, memo } from "react";

import styles from "./Button.module.css";

interface Props {
  onClick?: () => void;
}

const Button: FC<Props> = memo(({ children, ...rest }) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
});

export default Button;
