const ThemeToggle = ({ toggleTheme, darkMode }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </button>
  );
};

export default ThemeToggle;
