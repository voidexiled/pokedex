export default function Line1(props) {
  return (
    <div className={`flex ${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 5 202"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 2.5 2.999 L 2.5 199.001"
          stroke="#616161"
          strokeOpacity="0.2"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

Line1.defaultProps = {
  className: "",
};
