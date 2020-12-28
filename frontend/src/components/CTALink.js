import { useState, useEffect } from 'react';
import { Switch, Radio, useCheckboxState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';

const CTALink = ({ saveCTAColor }) => {
  const [CTAColor, setCTAColor] = useState({ r: 255, g: 0, b: 0, a: 0 });

  useEffect(() => {
    saveCTAColor(CTAColor);
  }, [CTAColor, setCTAColor, saveCTAColor]);

  const handleCTAChange = (e) => {
    setCTAColor(e.rgb);
  };

  return (
    <div>
      <h2>Choose a background color for your CTA link.</h2>
      <br />
      <hr />
      <br />
      <ChromePicker onChange={handleCTAChange} color={CTAColor} />
    </div>
  );
};

export default CTALink;
