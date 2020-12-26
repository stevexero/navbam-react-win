import { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const NavbarWidth = ({ saveWidthSize }) => {
  const [widthSize, setWidthSize] = useState(100);

  useEffect(() => {
    saveWidthSize(widthSize);
  }, [saveWidthSize, widthSize]);

  const handleWidthSize = (e) => {
    setWidthSize(e);
  };

  return (
    <div>
      <h2>Choose the width of your inner navbar.</h2>
      <br />
      <hr />
      <br />
      <label>Width: {widthSize}%</label>
      <br />
      <br />
      <Slider min={50} max={100} step={1} value={widthSize} onChange={handleWidthSize} />
      <br />
      <hr />
      <br />
    </div>
  );
};

export default NavbarWidth;
