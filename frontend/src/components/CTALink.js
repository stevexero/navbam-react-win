import { useState, useEffect } from 'react';
import { useCheckboxState, Checkbox, Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const CTALink = ({
  saveCTABackgroundColor,
  setCTASameAsLinkColor,
  saveCTATextColor,
  saveFontWeight,
  saveBorderOnOrOff,
  saveCTABorderColor,
  saveCTABorderSize,
  saveCTAWidth,
}) => {
  const [CTABackgroundColor, setCTABackgroundColor] = useState({ r: 255, g: 0, b: 0, a: 0 });
  const [CTATextColor, setCTATextColor] = useState('#ffffff');
  const [fontWeight, setFontWeight] = useState(400);
  const [CTABorderColor, setCTABorderColor] = useState('#000000');
  const [CTABorderSize, setCTABorderSize] = useState(1);
  const [CTAWidth, setCTAWidth] = useState(1);
  const checkbox = useCheckboxState();
  const switchState = useCheckboxState();

  useEffect(() => {
    checkbox.setState(true);
  }, []);

  useEffect(() => {
    saveCTABackgroundColor(CTABackgroundColor);
    setCTASameAsLinkColor(checkbox.state);
    saveCTATextColor(CTATextColor);
    saveFontWeight(fontWeight);
    saveBorderOnOrOff(switchState.state);
    saveCTABorderColor(CTABorderColor);
    saveCTABorderSize(CTABorderSize);
    saveCTAWidth(CTAWidth);
  }, [
    CTABackgroundColor,
    saveCTABackgroundColor,
    setCTASameAsLinkColor,
    checkbox,
    CTATextColor,
    saveCTATextColor,
    fontWeight,
    saveFontWeight,
    switchState,
    saveBorderOnOrOff,
    CTABorderColor,
    saveCTABorderColor,
    CTABorderSize,
    saveCTABorderSize,
    CTAWidth,
    saveCTAWidth,
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

  const handleCTABorderColorChange = (e) => {
    setCTABorderColor(e.hex);
  };

  const handleCTABorderSize = (e) => {
    setCTABorderSize(e);
  };

  const handleCTAWidth = (e) => {
    setCTAWidth(e);
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
      <br />
      <hr />
      <br />
      <Switch shape='slim' color='primary' {...switchState}>
        CTA Link Border: {switchState.state ? 'On' : 'Off'}
      </Switch>
      <br />
      <br />
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <h2>Choose a border color for your CTA link.</h2>}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <ChromePicker disableAlpha onChange={handleCTABorderColorChange} color={CTABorderColor} />}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <h2>Choose the size of your CTA link border.</h2>}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <label>Border Size: {CTABorderSize}</label>}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && (
        <Slider min={1} max={6} step={1} dots value={CTABorderSize} onChange={handleCTABorderSize} />
      )}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <h2>Choose the width of your CTA link.</h2>}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <label>CTA Width: {CTAWidth}</label>}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && <Slider min={1} max={4} step={1} dots value={CTAWidth} onChange={handleCTAWidth} />}
    </div>
  );
};

export default CTALink;
