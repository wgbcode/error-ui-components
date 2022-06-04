import * as React from "react";
import "./importIcons.js";

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkHref={`#${props.name}`} />
      </svg>
    </span>
  );
};

export default Icon;
