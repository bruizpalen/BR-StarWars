const ThemeButton = (themeSelected) => {
  // themeSelected is going to be dark or light
  return (
    <>
      <button className="btn btn-dark ms-auto me-1">
        <i className="fa-solid fa-moon"></i>
      </button>
    </>
  );
};

export default ThemeButton;
