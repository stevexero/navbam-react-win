import { useEffect, useState } from 'react';
import { useCheckboxState, Switch, Checkbox } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';

const LinksOnHover = ({ saveHoverSwitchState, saveHoverBackgroundColor, saveHoverBackgroundState }) => {
  const [hoverBackgroundColor, setHoverBackgroundColor] = useState({ r: 255, g: 255, b: 255, a: 0.4 });
  const switchState = useCheckboxState();
  const backgroundCheckbox = useCheckboxState();

  useEffect(() => {
    saveHoverSwitchState(switchState.state);
    saveHoverBackgroundState(backgroundCheckbox.state);
    saveHoverBackgroundColor(hoverBackgroundColor);
  }, [
    saveHoverSwitchState,
    switchState,
    saveHoverBackgroundState,
    backgroundCheckbox,
    hoverBackgroundColor,
    saveHoverBackgroundColor,
  ]);

  const handleHoverBackgroundColorChange = (e) => {
    setHoverBackgroundColor(e.rgb);
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
        <Checkbox shape='curve' bigger variant='fill' color='primary' {...backgroundCheckbox}>
          Background
        </Checkbox>
      )}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && <hr />}
      {switchState.state && backgroundCheckbox.state && <br />}
      {switchState.state && backgroundCheckbox.state && (
        <ChromePicker onChange={handleHoverBackgroundColorChange} color={hoverBackgroundColor} />
      )}
    </div>
  );
};

export default LinksOnHover;
