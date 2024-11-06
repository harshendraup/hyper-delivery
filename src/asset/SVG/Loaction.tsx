import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import SvgImage from "react-native-svg/lib/typescript/elements/Image";
const LocationSVG = (props:SvgImage) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_53_1831)">
      <Path
        d="M4.1665 11.9054C2.6237 12.586 1.6665 13.5344 1.6665 14.5834C1.6665 16.6545 5.39746 18.3334 9.99984 18.3334C14.6022 18.3334 18.3332 16.6545 18.3332 14.5834C18.3332 13.5344 17.376 12.586 15.8332 11.9054M14.9998 6.66675C14.9998 10.0532 11.2498 11.6667 9.99984 14.1667C8.74984 11.6667 4.99984 10.0532 4.99984 6.66675C4.99984 3.90532 7.23841 1.66675 9.99984 1.66675C12.7613 1.66675 14.9998 3.90532 14.9998 6.66675ZM10.8332 6.66675C10.8332 7.12699 10.4601 7.50008 9.99984 7.50008C9.5396 7.50008 9.1665 7.12699 9.1665 6.66675C9.1665 6.20651 9.5396 5.83341 9.99984 5.83341C10.4601 5.83341 10.8332 6.20651 10.8332 6.66675Z"
        stroke="#333333"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_53_1831">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LocationSVG;
