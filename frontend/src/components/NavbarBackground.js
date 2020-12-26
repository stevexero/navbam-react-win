import { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';

const NavbarBackground = ({ saveNavbarBackgroundColor }) => {
  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState();

  useEffect(() => {
    saveNavbarBackgroundColor(navbarBackgroundColor);
  }, [navbarBackgroundColor, setNavbarBackgroundColor]);

  const handleChange = (e) => {
    setNavbarBackgroundColor(e.rgb);
  };

  return (
    <div>
      <h2>Choose a background color for your navbar.</h2>
      <br />
      <hr />
      <br />
      <ChromePicker onChange={handleChange} color={navbarBackgroundColor} />
      <br />
      <br />
      <br />
    </div>
  );
};

export default NavbarBackground;
