import { useState, useEffect } from 'react';
import { Radio } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const NavbarWidth = ({ saveWidthSize, setNavWidthRadio }) => {
  const [widthSize, setWidthSize] = useState(1100);
  const [radio, setRadio] = useState('full');

  useEffect(() => {
    saveWidthSize(widthSize);
    setNavWidthRadio(radio);
  }, [saveWidthSize, widthSize, setNavWidthRadio, radio]);

  const handleRadio = (e) => {
    setRadio(e);
  };

  const handleWidthSize = (e) => {
    setWidthSize(e);
  };

  return (
    <div>
      <h2>Choose the width of your inner navbar.</h2>
      <br />
      <hr />
      <br />
      <Radio
        name='navbar-width'
        variant='fill'
        animation='jelly'
        color='primary'
        onChange={() => handleRadio('full')}
        defaultChecked
      >
        Full Width
      </Radio>
      <br />
      <br />
      <hr />
      <br />
      <Radio name='navbar-width' variant='fill' animation='jelly' color='primary' onChange={() => handleRadio('fixed')}>
        Fixed Width
      </Radio>
      <br />
      <br />
      {radio === 'fixed' && <hr />}
      {radio === 'fixed' && <br />}
      {radio === 'fixed' && <label>Width: {widthSize}px</label>}
      {radio === 'fixed' && <br />}
      {radio === 'fixed' && (
        <Slider min={800} max={1100} step={100} dots value={widthSize} onChange={handleWidthSize} />
      )}
      {radio === 'fixed' && <br />}
    </div>
  );
};

export default NavbarWidth;
