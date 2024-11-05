import * as React from "react";
import Svg, { Path } from "react-native-svg";
import SvgImage from "react-native-svg/lib/typescript/elements/Image";
const BackSVG = (props:SvgImage) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 12H5M5 12L12 19M5 12L12 5"
      stroke="#333333"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackSVG;
