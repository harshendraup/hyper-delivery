import * as React from "react";
import Svg, { Path } from "react-native-svg";
import SvgImage from "react-native-svg/lib/typescript/elements/Image";
const WhiteArrowSVG = (props:SvgImage) => (
  <Svg
    width={10}
    height={16}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.375 14.75L1.625 8L8.375 1.25"
      stroke="white"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default WhiteArrowSVG;
