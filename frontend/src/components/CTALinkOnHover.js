import { useEffect, useState } from 'react';
import { useCheckboxState, Switch, Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import styled from 'styled-components';

const Note = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #ff0000;
`;

const CTALinkOnHover = ({
  saveCTAHoverSwitchState,
  saveCTAHoverBackgroundState,
  saveCTAHoverBackgroundColor,
  saveCTAHoverColorState,
  saveCTAHoverColor,
}) => {
  const [CTAHoverBackgroundColor, setCTAHoverBackgroundColor] = useState({ r: 255, g: 255, b: 255, a: 0.4 });
  const [CTAHoverColor, setCTAHoverColor] = useState('#aaff44');

  const switchState = useCheckboxState();
  const backgroundCheckbox = useCheckboxState();
  const colorCheckbox = useCheckboxState();

  useEffect(() => {
    saveCTAHoverSwitchState(switchState.state);
    saveCTAHoverBackgroundState(backgroundCheckbox.state);
    saveCTAHoverBackgroundColor(CTAHoverBackgroundColor);
    saveCTAHoverColorState(colorCheckbox.state);
    saveCTAHoverColor(CTAHoverColor);
  }, [
    switchState,
    saveCTAHoverSwitchState,
    backgroundCheckbox,
    saveCTAHoverBackgroundState,
    CTAHoverBackgroundColor,
    saveCTAHoverBackgroundColor,
    colorCheckbox,
    saveCTAHoverColorState,
    CTAHoverColor,
    saveCTAHoverColor,
  ]);

  const handleCTAHoverBackgroundColorChange = (e) => {
    setCTAHoverBackgroundColor(e.rgb);
  };

  const handleCTAHoverColorChange = (e) => {
    setCTAHoverColor(e.hex);
  };

  return (
    <div>
      <Switch shape='slim' color='primary' {...switchState}>
        CTA Link Hover Effects: {switchState.state ? 'On' : 'Off'}
      </Switch>
      <br />
      <br />
      <Note>
        * Off keeps ALL of the CTA hover effects the same as the link hover effects, if any.
        <br />
        <br />* Any effects unchecked will also default to the link hover effects, if any.
      </Note>
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && (
        <Checkbox shape='curve' bigger variant='fill' color='primary' animation='jelly' {...backgroundCheckbox}>
          Background
        </Checkbox>
      )}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && backgroundCheckbox.state && <hr />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && (
        <ChromePicker onChange={handleCTAHoverBackgroundColorChange} color={CTAHoverBackgroundColor} />
      )}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && (
        <Checkbox shape='curve' bigger variant='fill' color='primary' animation='jelly' {...colorCheckbox}>
          Color
        </Checkbox>
      )}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && colorCheckbox.state && <hr />}
      {switchState.state && colorCheckbox.state && <br />}
      {switchState.state && colorCheckbox.state && (
        <ChromePicker disableAlpha onChange={handleCTAHoverColorChange} color={CTAHoverColor} />
      )}
      {switchState.state && colorCheckbox.state && <br />}
    </div>
  );
};

export default CTALinkOnHover;
