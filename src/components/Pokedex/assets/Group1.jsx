export default function Group1(props) {
  return (
    <div className={`${props.className}`}>
      <svg
        width="100%"
        height="100%"
        preserveAspectRatio="none"
        viewBox="0 0 22 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 15.096 14.625 H 13.625 V 16.12 H 15.096 V 14.625 Z"
          fill="#434343"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M 18.528 7.189 C 18.528 5.999 17.558 4.903 16.358 4.903 H 15.109 C 15.166 4.629 15.201 4.345 15.201 4.053 C 15.201 1.819 13.389 0 11.165 0 C 8.939 0 7.128 1.819 7.128 4.053 C 7.128 4.345 7.162 4.629 7.221 4.903 H 6.012 C 4.818 4.903 3.847 5.999 3.847 7.189 L 0.638 22.22 C 0.638 23.411 1.61 24.375 2.809 24.375 H 19.568 C 20.764 24.375 21.734 23.411 21.734 22.22 L 18.528 7.189 Z M 8.75 4.076 C 8.75 2.724 9.843 1.625 11.188 1.625 C 12.53 1.625 13.625 2.724 13.625 4.076 C 13.625 4.358 13.569 4.622 13.482 4.875 H 8.895 C 8.806 4.623 8.75 4.358 8.75 4.076 Z M 10.451 14.633 H 8.823 V 16.174 H 10.451 V 17.908 H 8.721 V 16.274 H 7.195 V 17.908 H 5.438 V 9.605 H 7.195 V 14.531 H 8.721 V 12.898 H 10.451 V 14.633 Z M 16.951 21.162 H 15.326 V 22.825 H 13.601 V 21.187 L 13.705 21.084 L 15.154 21.057 L 15.174 17.909 H 11.977 L 11.964 12.922 L 16.953 12.943 V 21.162 H 16.951 Z"
          fill="#434343"
        />
      </svg>
    </div>
  );
}

Group1.defaultProps = {
  className: "",
};