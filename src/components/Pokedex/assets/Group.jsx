export default function Group(props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 19 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 0.967 18.229 L 16.378 32.198 C 16.57 32.372 16.81 32.458 17.05 32.458 C 17.323 32.458 17.594 32.347 17.791 32.129 C 18.162 31.72 18.131 31.088 17.722 30.717 L 2.9 17.282 L 16.335 2.461 C 16.706 2.052 16.675 1.419 16.266 1.049 C 15.857 0.677 15.225 0.709 14.854 1.118 L 0.884 16.53 C 0.664 16.772 0.589 17.093 0.646 17.391 C 0.617 17.695 0.723 18.009 0.967 18.229 Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

Group.defaultProps = {
  className: "",
};
