export default function Rectangle8(props) {
  return (
    <div className={`drop-shadow-lg ${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 404 292"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_9_25)">
          <path
            d="M 6 25.922 C 6 12.071 26.18 2.518 38.417 9.005 C 67.558 24.454 118.397 42 199 42 C 283.841 42 337.788 22.561 367.794 6.589 C 379.648 0.279 398 9.251 398 22.68 V 269 C 398 277.284 391.284 284 383 284 H 21 C 12.716 284 6 277.284 6 269 V 25.922 Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_9_25"
            x="0"
            y="0.527309"
            width="404"
            height="291.473"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="3" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_9_25"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_9_25"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

Rectangle8.defaultProps = {
  className: "",
};

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
