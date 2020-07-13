import React, { FC, memo } from "react";

import classes from "./Icon.module.css";

import { ReactComponent as like } from "./icons/like.svg";
import { ReactComponent as more } from "./icons/more.svg";
import { ReactComponent as clock } from "./icons/clock.svg";
import { ReactComponent as comment } from "./icons/comment.svg";
import { ReactComponent as likeFilled } from "./icons/like-filled.svg";

const icons = {
  likeFilled,
  comment,
  clock,
  like,
  more,
} as const;

interface Props {
  name: keyof typeof icons;
}

const Icon: FC<Props> = memo(({ name }) => {
  const I = icons[name];
  return (
    <i className={classes.icon}>
      <I height="0.875rem" />
    </i>
  );
});

export default Icon;
