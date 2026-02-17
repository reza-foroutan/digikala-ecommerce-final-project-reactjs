const HamburgerMenu = (props) => {
  return (
    <>
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={0}
        stroke="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </>
  );
};

export default HamburgerMenu;
