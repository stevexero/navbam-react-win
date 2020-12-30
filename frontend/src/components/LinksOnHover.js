import { useEffect, useState } from 'react';
import { useCheckboxState, Switch, Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const LinksOnHover = ({
  saveHoverSwitchState,
  saveHoverBackgroundColor,
  saveHoverBackgroundState,
  saveHoverScaleState,
  saveHoverScaleSize,
  saveHoverColorState,
  saveHoverColor,
  saveHoverTransitionTime,
}) => {
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState({ r: 255, g: 255, b: 255, a: 0.4 });
  const [hoverScaleSize, setHoverScaleSize] = useState(1.1);
  const [hoverColor, setHoverColor] = useState('#aaaaff');
  const [hoverTransitionTime, setHoverTransitionTime] = useState(0.2);
  const switchState = useCheckboxState();
  const backgroundCheckbox = useCheckboxState();
  const scaleCheckbox = useCheckboxState();
  const colorCheckbox = useCheckboxState();

  useEffect(() => {
    saveHoverSwitchState(switchState.state);
    saveHoverBackgroundState(backgroundCheckbox.state);
    saveHoverBackgroundColor(hoverBackgroundColor);
    saveHoverScaleState(scaleCheckbox.state);
    saveHoverScaleSize(hoverScaleSize);
    saveHoverColorState(colorCheckbox.state);
    saveHoverColor(hoverColor);
    saveHoverTransitionTime(hoverTransitionTime);
  }, [
    saveHoverSwitchState,
    switchState,
    saveHoverBackgroundState,
    backgroundCheckbox,
    hoverBackgroundColor,
    saveHoverBackgroundColor,
    scaleCheckbox,
    saveHoverScaleState,
    hoverScaleSize,
    saveHoverScaleSize,
    colorCheckbox,
    saveHoverColorState,
    hoverColor,
    saveHoverColor,
    hoverTransitionTime,
    saveHoverTransitionTime,
  ]);

  const handleHoverBackgroundColorChange = (e) => {
    setHoverBackgroundColor(e.rgb);
  };

  const handleHoverScaleSize = (e) => {
    setHoverScaleSize(e);
  };

  const handleHoverColorChange = (e) => {
    setHoverColor(e.hex);
  };

  const handleHoverTransitionTime = (e) => {
    setHoverTransitionTime(e);
  };

  return (
    <div>
      <Switch shape='slim' color='primary' {...switchState}>
        Link Hover Effects: {switchState.state ? 'On' : 'Off'}
      </Switch>
      {switchState.state && <br />}
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
        <ChromePicker onChange={handleHoverBackgroundColorChange} color={hoverBackgroundColor} />
      )}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && (
        <Checkbox shape='curve' bigger variant='fill' color='primary' animation='jelly' {...scaleCheckbox}>
          Scale
        </Checkbox>
      )}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && scaleCheckbox.state && <hr />}
      {switchState.state && scaleCheckbox.state && <br />}
      {switchState.state && scaleCheckbox.state && <label>Scale Size: {hoverScaleSize}rem</label>}
      {switchState.state && scaleCheckbox.state && <br />}
      {switchState.state && scaleCheckbox.state && <br />}
      {switchState.state && scaleCheckbox.state && (
        <Slider min={1.1} max={1.6} step={0.1} dots value={hoverScaleSize} onChange={handleHoverScaleSize} />
      )}
      {switchState.state && scaleCheckbox.state && <br />}
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
        <ChromePicker disableAlpha onChange={handleHoverColorChange} color={hoverColor} />
      )}
      {switchState.state && colorCheckbox.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <label>Transition Time: {hoverTransitionTime} seconds</label>}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && (
        <Slider min={0.0} max={0.4} step={0.1} dots value={hoverTransitionTime} onChange={handleHoverTransitionTime} />
      )}
    </div>
  );
};

export default LinksOnHover;
