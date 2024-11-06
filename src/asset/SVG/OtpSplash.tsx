import * as React from "react";
import Svg, { G, Rect, Path, Defs } from "react-native-svg";
import SvgImage from "react-native-svg/lib/typescript/elements/Image";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const OtpSplashSVG = (props:SvgImage) => (
  <Svg
    width={390}
    height={386}
    viewBox="0 0 390 386"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#filter0_dddd_246_13041)">
      <Rect x={39} y={9} width={311} height={213} rx={20} fill="#409C59" />
      <G filter="url(#filter1_dddd_246_13041)">
        <Rect x={156} y={29} width={77} height={77} rx={38.5} fill="white" />
        <Path
          d="M187.375 77.4751L179.063 69.1626C178.845 68.9426 178.586 68.7679 178.301 68.6487C178.016 68.5295 177.709 68.4681 177.4 68.4681C177.091 68.4681 176.785 68.5295 176.499 68.6487C176.214 68.7679 175.955 68.9426 175.738 69.1626C175.517 69.38 175.343 69.6389 175.224 69.9242C175.104 70.2096 175.043 70.5158 175.043 70.8251C175.043 71.1344 175.104 71.4406 175.224 71.726C175.343 72.0114 175.517 72.2702 175.738 72.4876L185.689 82.4389C186.615 83.3651 188.111 83.3651 189.038 82.4389L214.213 57.2876C214.433 57.0702 214.607 56.8114 214.726 56.526C214.846 56.2406 214.907 55.9344 214.907 55.6251C214.907 55.3158 214.846 55.0096 214.726 54.7242C214.607 54.4389 214.433 54.18 214.213 53.9626C213.995 53.7426 213.736 53.5679 213.451 53.4487C213.166 53.3295 212.859 53.2681 212.55 53.2681C212.241 53.2681 211.935 53.3295 211.649 53.4487C211.364 53.5679 211.105 53.7426 210.888 53.9626L187.375 77.4751Z"
          fill="#409C59"
        />
      </G>
      <Path
        d="M168.947 149.695C168.823 149.263 168.648 148.882 168.423 148.55C168.198 148.213 167.923 147.929 167.597 147.698C167.278 147.461 166.911 147.281 166.497 147.156C166.088 147.032 165.635 146.97 165.138 146.97C164.209 146.97 163.392 147.201 162.688 147.662C161.99 148.124 161.445 148.796 161.055 149.678C160.664 150.554 160.469 151.625 160.469 152.891C160.469 154.158 160.661 155.235 161.046 156.123C161.43 157.011 161.975 157.688 162.679 158.156C163.383 158.618 164.215 158.848 165.174 158.848C166.044 158.848 166.787 158.694 167.402 158.387C168.024 158.073 168.497 157.632 168.823 157.064C169.154 156.496 169.32 155.824 169.32 155.049L170.101 155.164H165.414V152.27H173.022V154.56C173.022 156.158 172.684 157.531 172.01 158.68C171.335 159.822 170.406 160.704 169.222 161.325C168.038 161.941 166.683 162.249 165.156 162.249C163.452 162.249 161.954 161.873 160.664 161.121C159.374 160.364 158.367 159.289 157.645 157.898C156.929 156.502 156.571 154.844 156.571 152.927C156.571 151.453 156.784 150.139 157.21 148.985C157.642 147.825 158.246 146.843 159.021 146.038C159.797 145.233 160.699 144.62 161.729 144.2C162.759 143.78 163.875 143.57 165.076 143.57C166.106 143.57 167.065 143.721 167.953 144.022C168.84 144.318 169.628 144.739 170.314 145.283C171.007 145.828 171.572 146.476 172.01 147.227C172.448 147.973 172.729 148.796 172.853 149.695H168.947ZM176.338 162V148.364H180.005V150.743H180.147C180.396 149.897 180.813 149.257 181.399 148.825C181.985 148.387 182.659 148.168 183.423 148.168C183.612 148.168 183.816 148.18 184.035 148.204C184.254 148.228 184.447 148.26 184.612 148.301V151.657C184.435 151.604 184.189 151.557 183.876 151.515C183.562 151.474 183.275 151.453 183.014 151.453C182.458 151.453 181.961 151.574 181.523 151.817C181.091 152.054 180.748 152.385 180.493 152.811C180.245 153.238 180.12 153.729 180.12 154.285V162H176.338ZM192.648 162.266C191.245 162.266 190.037 161.982 189.025 161.414C188.019 160.84 187.244 160.029 186.699 158.982C186.155 157.928 185.883 156.682 185.883 155.244C185.883 153.841 186.155 152.61 186.699 151.551C187.244 150.491 188.01 149.666 188.999 149.074C189.993 148.482 191.159 148.186 192.497 148.186C193.396 148.186 194.234 148.331 195.009 148.621C195.79 148.905 196.471 149.334 197.051 149.908C197.637 150.482 198.093 151.205 198.418 152.075C198.744 152.939 198.906 153.951 198.906 155.111V156.15H187.392V153.806H195.346C195.346 153.261 195.228 152.779 194.991 152.359C194.755 151.938 194.426 151.61 194.006 151.373C193.592 151.131 193.109 151.009 192.559 151.009C191.985 151.009 191.476 151.142 191.032 151.409C190.594 151.669 190.251 152.021 190.002 152.465C189.753 152.903 189.626 153.391 189.62 153.93V156.158C189.62 156.833 189.744 157.416 189.993 157.907C190.248 158.399 190.606 158.777 191.067 159.044C191.529 159.31 192.076 159.443 192.71 159.443C193.13 159.443 193.515 159.384 193.864 159.266C194.213 159.147 194.512 158.97 194.76 158.733C195.009 158.496 195.198 158.206 195.329 157.863L198.827 158.094C198.649 158.934 198.285 159.668 197.735 160.295C197.19 160.917 196.486 161.402 195.622 161.751C194.763 162.095 193.772 162.266 192.648 162.266ZM205.763 162.257C204.893 162.257 204.118 162.107 203.437 161.805C202.756 161.497 202.218 161.044 201.821 160.446C201.431 159.843 201.235 159.091 201.235 158.191C201.235 157.434 201.374 156.798 201.653 156.283C201.931 155.768 202.309 155.353 202.789 155.04C203.268 154.726 203.813 154.489 204.422 154.33C205.038 154.17 205.683 154.057 206.358 153.992C207.151 153.909 207.79 153.832 208.275 153.761C208.761 153.684 209.113 153.572 209.332 153.424C209.551 153.276 209.66 153.057 209.66 152.767V152.714C209.66 152.152 209.483 151.717 209.128 151.409C208.778 151.101 208.281 150.947 207.636 150.947C206.956 150.947 206.414 151.098 206.012 151.4C205.609 151.696 205.343 152.069 205.213 152.518L201.715 152.234C201.892 151.406 202.241 150.69 202.762 150.086C203.283 149.476 203.955 149.009 204.778 148.683C205.606 148.352 206.565 148.186 207.654 148.186C208.412 148.186 209.137 148.275 209.829 148.452C210.527 148.63 211.146 148.905 211.684 149.278C212.229 149.651 212.658 150.13 212.972 150.716C213.285 151.296 213.442 151.992 213.442 152.803V162H209.856V160.109H209.749C209.53 160.535 209.237 160.911 208.87 161.237C208.503 161.556 208.062 161.808 207.547 161.991C207.032 162.169 206.438 162.257 205.763 162.257ZM206.846 159.647C207.402 159.647 207.894 159.538 208.32 159.319C208.746 159.094 209.08 158.792 209.323 158.413C209.566 158.035 209.687 157.605 209.687 157.126V155.679C209.569 155.756 209.406 155.827 209.199 155.892C208.997 155.951 208.77 156.007 208.515 156.061C208.261 156.108 208.006 156.152 207.752 156.194C207.497 156.229 207.266 156.262 207.059 156.292C206.615 156.357 206.228 156.46 205.896 156.602C205.565 156.744 205.307 156.937 205.124 157.179C204.94 157.416 204.849 157.712 204.849 158.067C204.849 158.582 205.035 158.976 205.408 159.248C205.787 159.514 206.266 159.647 206.846 159.647ZM224.13 148.364V151.205H215.918V148.364H224.13ZM217.782 145.097H221.564V157.81C221.564 158.159 221.617 158.431 221.724 158.626C221.83 158.816 221.978 158.949 222.168 159.026C222.363 159.103 222.588 159.141 222.842 159.141C223.02 159.141 223.197 159.127 223.375 159.097C223.553 159.061 223.689 159.035 223.783 159.017L224.378 161.831C224.189 161.891 223.922 161.959 223.579 162.036C223.236 162.118 222.819 162.169 222.327 162.186C221.416 162.222 220.617 162.101 219.93 161.822C219.25 161.544 218.72 161.112 218.341 160.526C217.962 159.94 217.776 159.201 217.782 158.307V145.097ZM231.612 143.818L231.266 156.549H228.017L227.661 143.818H231.612ZM229.641 162.231C229.055 162.231 228.552 162.024 228.132 161.609C227.712 161.189 227.505 160.686 227.51 160.1C227.505 159.52 227.712 159.023 228.132 158.609C228.552 158.194 229.055 157.987 229.641 157.987C230.203 157.987 230.698 158.194 231.124 158.609C231.55 159.023 231.766 159.52 231.772 160.1C231.766 160.491 231.662 160.849 231.461 161.174C231.266 161.494 231.008 161.751 230.689 161.947C230.369 162.136 230.02 162.231 229.641 162.231Z"
        fill="white"
      />
      <Path
        d="M122.183 185.609V183.909H132.315V185.609H128.23V197H126.262V185.609H122.183ZM136.671 191.17V197H134.76V183.909H136.646V188.78H136.767C136.997 188.251 137.349 187.832 137.822 187.521C138.295 187.21 138.913 187.054 139.676 187.054C140.349 187.054 140.937 187.192 141.44 187.469C141.947 187.746 142.339 188.16 142.616 188.71C142.897 189.255 143.038 189.937 143.038 190.755V197H141.127V190.985C141.127 190.265 140.941 189.707 140.571 189.31C140.2 188.91 139.684 188.71 139.024 188.71C138.572 188.71 138.167 188.805 137.809 188.997C137.456 189.189 137.176 189.47 136.972 189.841C136.772 190.207 136.671 190.651 136.671 191.17ZM150.18 197.198C149.213 197.198 148.379 196.991 147.681 196.578C146.986 196.161 146.449 195.575 146.07 194.82C145.695 194.062 145.507 193.173 145.507 192.155C145.507 191.149 145.695 190.263 146.07 189.496C146.449 188.729 146.977 188.13 147.655 187.7C148.337 187.269 149.134 187.054 150.046 187.054C150.6 187.054 151.137 187.146 151.656 187.329C152.176 187.512 152.643 187.8 153.056 188.192C153.47 188.584 153.796 189.093 154.034 189.719C154.273 190.342 154.392 191.098 154.392 191.989V192.666H146.588V191.234H152.519C152.519 190.732 152.417 190.286 152.213 189.898C152.008 189.506 151.72 189.197 151.35 188.972C150.983 188.746 150.553 188.633 150.058 188.633C149.522 188.633 149.053 188.765 148.652 189.029C148.256 189.289 147.949 189.63 147.732 190.052C147.519 190.469 147.412 190.923 147.412 191.413V192.532C147.412 193.188 147.527 193.746 147.757 194.207C147.992 194.667 148.318 195.018 148.735 195.261C149.153 195.5 149.641 195.619 150.199 195.619C150.561 195.619 150.892 195.568 151.19 195.466C151.488 195.359 151.746 195.202 151.963 194.993C152.181 194.784 152.347 194.526 152.462 194.219L154.271 194.545C154.126 195.078 153.866 195.545 153.491 195.945C153.12 196.342 152.654 196.651 152.091 196.872C151.533 197.089 150.896 197.198 150.18 197.198ZM173.521 190.455C173.521 191.852 173.266 193.054 172.754 194.06C172.243 195.061 171.542 195.832 170.651 196.374C169.765 196.911 168.757 197.179 167.628 197.179C166.494 197.179 165.482 196.911 164.592 196.374C163.705 195.832 163.006 195.059 162.495 194.053C161.984 193.048 161.728 191.848 161.728 190.455C161.728 189.057 161.984 187.857 162.495 186.856C163.006 185.85 163.705 185.079 164.592 184.542C165.482 184.001 166.494 183.73 167.628 183.73C168.757 183.73 169.765 184.001 170.651 184.542C171.542 185.079 172.243 185.85 172.754 186.856C173.266 187.857 173.521 189.057 173.521 190.455ZM171.565 190.455C171.565 189.389 171.393 188.492 171.048 187.763C170.707 187.031 170.238 186.477 169.641 186.102C169.049 185.722 168.378 185.533 167.628 185.533C166.874 185.533 166.2 185.722 165.608 186.102C165.016 186.477 164.547 187.031 164.202 187.763C163.861 188.492 163.69 189.389 163.69 190.455C163.69 191.52 163.861 192.419 164.202 193.152C164.547 193.881 165.016 194.435 165.608 194.814C166.2 195.189 166.874 195.376 167.628 195.376C168.378 195.376 169.049 195.189 169.641 194.814C170.238 194.435 170.707 193.881 171.048 193.152C171.393 192.419 171.565 191.52 171.565 190.455ZM175.136 185.609V183.909H185.267V185.609H181.183V197H179.214V185.609H175.136ZM187.866 197V183.909H192.532C193.551 183.909 194.394 184.094 195.063 184.465C195.732 184.836 196.233 185.343 196.566 185.987C196.898 186.626 197.064 187.346 197.064 188.147C197.064 188.952 196.896 189.677 196.559 190.32C196.227 190.96 195.724 191.467 195.051 191.842C194.382 192.212 193.54 192.398 192.526 192.398H189.317V190.723H192.347C192.99 190.723 193.512 190.612 193.913 190.391C194.313 190.165 194.607 189.858 194.795 189.47C194.982 189.082 195.076 188.641 195.076 188.147C195.076 187.653 194.982 187.214 194.795 186.83C194.607 186.447 194.311 186.146 193.906 185.929C193.506 185.712 192.977 185.603 192.321 185.603H189.841V197H187.866ZM204.71 197V187.182H206.621V197H204.71ZM205.675 185.667C205.343 185.667 205.057 185.556 204.819 185.335C204.584 185.109 204.467 184.84 204.467 184.529C204.467 184.214 204.584 183.945 204.819 183.724C205.057 183.498 205.343 183.385 205.675 183.385C206.007 183.385 206.291 183.498 206.525 183.724C206.764 183.945 206.883 184.214 206.883 184.529C206.883 184.84 206.764 185.109 206.525 185.335C206.291 185.556 206.007 185.667 205.675 185.667ZM216.91 189.579L215.177 189.886C215.105 189.664 214.99 189.453 214.832 189.253C214.679 189.053 214.47 188.888 214.206 188.761C213.942 188.633 213.611 188.569 213.215 188.569C212.674 188.569 212.222 188.69 211.86 188.933C211.498 189.172 211.317 189.481 211.317 189.86C211.317 190.188 211.438 190.452 211.681 190.653C211.924 190.853 212.316 191.017 212.857 191.145L214.417 191.503C215.32 191.712 215.993 192.033 216.437 192.468C216.88 192.903 217.101 193.467 217.101 194.162C217.101 194.75 216.931 195.274 216.59 195.734C216.253 196.19 215.782 196.548 215.177 196.808C214.576 197.068 213.88 197.198 213.087 197.198C211.988 197.198 211.091 196.964 210.396 196.495C209.701 196.022 209.275 195.351 209.118 194.482L210.965 194.2C211.08 194.682 211.317 195.046 211.675 195.293C212.032 195.536 212.499 195.658 213.074 195.658C213.701 195.658 214.201 195.528 214.576 195.268C214.951 195.004 215.139 194.682 215.139 194.303C215.139 193.996 215.024 193.738 214.794 193.529C214.568 193.32 214.221 193.163 213.752 193.056L212.09 192.692C211.174 192.483 210.496 192.151 210.057 191.695C209.623 191.239 209.405 190.661 209.405 189.962C209.405 189.383 209.567 188.876 209.891 188.441C210.215 188.006 210.662 187.668 211.233 187.425C211.804 187.178 212.459 187.054 213.196 187.054C214.257 187.054 215.092 187.284 215.701 187.744C216.311 188.2 216.714 188.812 216.91 189.579ZM232.044 189.579L230.311 189.886C230.239 189.664 230.124 189.453 229.966 189.253C229.813 189.053 229.604 188.888 229.34 188.761C229.076 188.633 228.745 188.569 228.349 188.569C227.808 188.569 227.356 188.69 226.994 188.933C226.632 189.172 226.451 189.481 226.451 189.86C226.451 190.188 226.572 190.452 226.815 190.653C227.058 190.853 227.45 191.017 227.991 191.145L229.551 191.503C230.454 191.712 231.127 192.033 231.571 192.468C232.014 192.903 232.235 193.467 232.235 194.162C232.235 194.75 232.065 195.274 231.724 195.734C231.387 196.19 230.917 196.548 230.311 196.808C229.711 197.068 229.014 197.198 228.221 197.198C227.122 197.198 226.225 196.964 225.53 196.495C224.836 196.022 224.409 195.351 224.252 194.482L226.099 194.2C226.214 194.682 226.451 195.046 226.809 195.293C227.167 195.536 227.633 195.658 228.208 195.658C228.835 195.658 229.336 195.528 229.711 195.268C230.086 195.004 230.273 194.682 230.273 194.303C230.273 193.996 230.158 193.738 229.928 193.529C229.702 193.32 229.355 193.163 228.886 193.056L227.224 192.692C226.308 192.483 225.63 192.151 225.191 191.695C224.757 191.239 224.539 190.661 224.539 189.962C224.539 189.383 224.701 188.876 225.025 188.441C225.349 188.006 225.796 187.668 226.368 187.425C226.939 187.178 227.593 187.054 228.33 187.054C229.391 187.054 230.226 187.284 230.836 187.744C231.445 188.2 231.848 188.812 232.044 189.579ZM238.928 197.198C237.961 197.198 237.128 196.991 236.429 196.578C235.734 196.161 235.197 195.575 234.818 194.82C234.443 194.062 234.256 193.173 234.256 192.155C234.256 191.149 234.443 190.263 234.818 189.496C235.197 188.729 235.726 188.13 236.403 187.7C237.085 187.269 237.882 187.054 238.794 187.054C239.348 187.054 239.885 187.146 240.405 187.329C240.925 187.512 241.391 187.8 241.805 188.192C242.218 188.584 242.544 189.093 242.783 189.719C243.021 190.342 243.141 191.098 243.141 191.989V192.666H235.336V191.234H241.268C241.268 190.732 241.166 190.286 240.961 189.898C240.756 189.506 240.469 189.197 240.098 188.972C239.732 188.746 239.301 188.633 238.807 188.633C238.27 188.633 237.801 188.765 237.401 189.029C237.004 189.289 236.697 189.63 236.48 190.052C236.267 190.469 236.161 190.923 236.161 191.413V192.532C236.161 193.188 236.276 193.746 236.506 194.207C236.74 194.667 237.066 195.018 237.484 195.261C237.901 195.5 238.389 195.619 238.947 195.619C239.31 195.619 239.64 195.568 239.938 195.466C240.237 195.359 240.494 195.202 240.712 194.993C240.929 194.784 241.095 194.526 241.21 194.219L243.019 194.545C242.874 195.078 242.614 195.545 242.239 195.945C241.869 196.342 241.402 196.651 240.84 196.872C240.281 197.089 239.644 197.198 238.928 197.198ZM247.532 191.17V197H245.621V187.182H247.456V188.78H247.577C247.803 188.26 248.157 187.842 248.638 187.527C249.124 187.212 249.736 187.054 250.473 187.054C251.142 187.054 251.728 187.195 252.231 187.476C252.733 187.753 253.123 188.166 253.4 188.716C253.677 189.266 253.816 189.945 253.816 190.755V197H251.905V190.985C251.905 190.273 251.719 189.717 251.349 189.317C250.978 188.912 250.469 188.71 249.821 188.71C249.378 188.71 248.983 188.805 248.638 188.997C248.297 189.189 248.027 189.47 247.827 189.841C247.63 190.207 247.532 190.651 247.532 191.17ZM261.322 187.182V188.716H255.959V187.182H261.322ZM257.397 184.83H259.309V194.117C259.309 194.488 259.364 194.767 259.475 194.955C259.586 195.138 259.728 195.263 259.903 195.332C260.082 195.396 260.276 195.428 260.485 195.428C260.638 195.428 260.772 195.417 260.887 195.396C261.003 195.374 261.092 195.357 261.156 195.344L261.501 196.923C261.39 196.966 261.233 197.009 261.028 197.051C260.824 197.098 260.568 197.124 260.261 197.128C259.758 197.136 259.289 197.047 258.855 196.859C258.42 196.672 258.069 196.382 257.8 195.99C257.532 195.598 257.397 195.106 257.397 194.513V184.83ZM265.056 197.121C264.706 197.121 264.406 196.998 264.154 196.751C263.903 196.499 263.777 196.197 263.777 195.843C263.777 195.494 263.903 195.195 264.154 194.948C264.406 194.697 264.706 194.571 265.056 194.571C265.405 194.571 265.705 194.697 265.957 194.948C266.208 195.195 266.334 195.494 266.334 195.843C266.334 196.077 266.274 196.293 266.155 196.489C266.04 196.68 265.887 196.834 265.695 196.949C265.503 197.064 265.29 197.121 265.056 197.121Z"
        fill="white"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default OtpSplashSVG;
