import { useState, useEffect } from 'react';
import { useCheckboxState, Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const CTALink = ({ saveCTABackgroundColor, setCTASameAsLinkColor, saveCTATextColor, saveFontWeight }) => {
  const [CTABackgroundColor, setCTABackgroundColor] = useState({ r: 255, g: 0, b: 0, a: 0 });
  const [CTATextColor, setCTATextColor] = useState('#ffffff');
  const checkbox = useCheckboxState();
  const [fontWeight, setFontWeight] = useState(400);

  useEffect(() => {
    checkbox.setState(true);
  }, []);

  useEffect(() => {
    saveCTABackgroundColor(CTABackgroundColor);
    setCTASameAsLinkColor(checkbox.state);
    saveCTATextColor(CTATextColor);
    saveFontWeight(fontWeight);
  }, [
    CTABackgroundColor,
    saveCTABackgroundColor,
    setCTASameAsLinkColor,
    checkbox,
    CTATextColor,
    saveCTATextColor,
    fontWeight,
    saveFontWeight,
  ]);

  const handleCTAChange = (e) => {
    setCTABackgroundColor(e.rgb);
  };

  const handleCTATextColorChange = (e) => {
    setCTATextColor(e.hex);
  };

  const handleFontWeight = (e) => {
    setFontWeight(e);
  };

  return (
    <div>
      <h2>Choose a background color for your CTA link.</h2>
      <br />
      <hr />
      <br />
      <ChromePicker onChange={handleCTAChange} color={CTABackgroundColor} />
      <br />
      <br />
      <br />
      <hr />
      <br />
      <h2>Choose a color for your CTA link.</h2>
      <br />
      <hr />
      <br />
      <Checkbox shape='curve' bigger variant='fill' color='primary' {...checkbox}>
        Same as other links: {checkbox.state + ''}
      </Checkbox>
      <br />
      <br />
      <hr />
      <br />
      {checkbox.state === false && (
        <ChromePicker disableAlpha onChange={handleCTATextColorChange} color={CTATextColor} />
      )}
      {checkbox.state === false && <br />}
      {checkbox.state === false && <br />}
      {checkbox.state === false && <br />}
      {checkbox.state === false && <hr />}
      {checkbox.state === false && <br />}
      <h2>Choose a font weight for your CTA link.</h2>
      <br />
      <hr />
      <br />
      <label>Font Weight: {fontWeight}</label>
      <br />
      <br />
      <Slider min={400} max={700} step={100} dots value={fontWeight} onChange={handleFontWeight} />
    </div>
  );
};

export default CTALink;
