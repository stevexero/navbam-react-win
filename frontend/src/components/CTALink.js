import { useState, useEffect } from 'react';
import { useCheckboxState, Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';

const CTALink = ({ saveCTABackgroundColor, setCTASameAsLinkColor, saveCTATextColor }) => {
  const [CTABackgroundColor, setCTABackgroundColor] = useState({ r: 255, g: 0, b: 0, a: 0 });
  const [CTATextColor, setCTATextColor] = useState('#ffffff');
  const checkbox = useCheckboxState();

  useEffect(() => {
    checkbox.setState(true);
  }, []);

  useEffect(() => {
    saveCTABackgroundColor(CTABackgroundColor);
    setCTASameAsLinkColor(checkbox.state);
    saveCTATextColor(CTATextColor);
  }, [CTABackgroundColor, saveCTABackgroundColor, setCTASameAsLinkColor, checkbox, CTATextColor, saveCTATextColor]);

  const handleCTAChange = (e) => {
    setCTABackgroundColor(e.rgb);
  };

  const handleCTATextColorChange = (e) => {
    setCTATextColor(e.hex);
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
    </div>
  );
};

export default CTALink;
