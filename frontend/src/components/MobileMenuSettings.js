import { useState, useEffect } from 'react';
import { useCheckboxState, Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';

const MobileMenuSettings = ({
  saveSameAsNavbarBackgroundColor,
  saveMobileMenuBackgroundColor,
  saveSameAsNavbarLinksColor,
  saveMobileMenuLinksColor,
}) => {
  const [mobileMenuBackgroundColor, setMobileMenuBackgroundColor] = useState({ r: 41, g: 31, b: 90, a: 1 });
  const [mobileMenuLinksColor, setMobileMenuLinksColor] = useState('#ffffff');
  const checkbox = useCheckboxState();
  const linksCheckbox = useCheckboxState();

  useEffect(() => {
    checkbox.setState(true);
    linksCheckbox.setState(true);
  }, []);

  useEffect(() => {
    saveSameAsNavbarBackgroundColor(checkbox.state);
    saveMobileMenuBackgroundColor(mobileMenuBackgroundColor);
    saveSameAsNavbarLinksColor(linksCheckbox.state);
    saveMobileMenuLinksColor(mobileMenuLinksColor);
  }, [
    checkbox,
    saveSameAsNavbarBackgroundColor,
    mobileMenuBackgroundColor,
    saveMobileMenuBackgroundColor,
    linksCheckbox,
    saveSameAsNavbarLinksColor,
    mobileMenuLinksColor,
    saveMobileMenuLinksColor,
  ]);

  const handleMobileMenuBackgroundColorChange = (e) => {
    setMobileMenuBackgroundColor(e.rgb);
  };

  const handleMobileMenuLinksColorChange = (e) => {
    setMobileMenuLinksColor(e.hex);
  };

  return (
    <div>
      <h2>Choose a background color for your Mobile Menu.</h2>
      <br />
      <hr />
      <br />
      <Checkbox shape='curve' bigger variant='fill' color='primary' animation={'jelly'} {...checkbox}>
        Same as navbar: {checkbox.state + ''}
      </Checkbox>
      <br />
      <br />
      <hr />
      <br />
      {checkbox.state === false && (
        <ChromePicker onChange={handleMobileMenuBackgroundColorChange} color={mobileMenuBackgroundColor} />
      )}
      {checkbox.state === false && <br />}
      {checkbox.state === false && <br />}
      {checkbox.state === false && <br />}
      {checkbox.state === false && <hr />}
      {checkbox.state === false && <br />}
      <h2>Choose the links color for your Mobile Menu.</h2>
      <br />
      <hr />
      <br />
      <Checkbox shape='curve' bigger variant='fill' color='primary' animation={'jelly'} {...linksCheckbox}>
        Same as links: {linksCheckbox.state + ''}
      </Checkbox>
      <br />
      <br />
      {linksCheckbox.state === false && <hr />}
      {linksCheckbox.state === false && <br />}
      {linksCheckbox.state === false && (
        <ChromePicker disableAlpha onChange={handleMobileMenuLinksColorChange} color={mobileMenuLinksColor} />
      )}
      {linksCheckbox.state === false && <br />}
    </div>
  );
};

export default MobileMenuSettings;
