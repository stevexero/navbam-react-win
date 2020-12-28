import { useState, useEffect } from 'react';
import Slider from 'rc-slider';

const NavbarHeight = ({ saveNavbarHeight }) => {
  const [heightSize, setHeightSize] = useState(3);

  useEffect(() => {
    saveNavbarHeight(heightSize);
  }, [heightSize, setHeightSize, saveNavbarHeight]);

  const handleHeightSize = (e) => {
    setHeightSize(e);
  };

  return (
    <div>
      <h2>Choose the height of your navbar.</h2>
      <br />
      <hr />
      <br />
      <label>Height: {heightSize}rem</label>
      <br />
      <br />
      <Slider min={3} max={8} step={1} dots value={heightSize} onChange={handleHeightSize} />
      <br />
    </div>
  );
};

export default NavbarHeight;
