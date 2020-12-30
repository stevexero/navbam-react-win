import { useEffect, useState } from 'react';
import { useCheckboxState, Switch } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Select from 'react-select';

const options = [
  { value: 'solid', label: 'Solid' },
  { value: 'dotted', label: 'Dotted' },
  { value: 'dashed', label: 'Dashed' },
  { value: 'double', label: 'Double' },
  { value: 'groove', label: 'Groove' },
  { value: 'ridge', label: 'Ridge' },
  { value: 'inset', label: 'Inset' },
  { value: 'outset', label: 'Outset' },
];

const NavbarBorder = ({ saveBorderSwitchState, saveBorderSize, saveBorderStyle, saveNavbarBorderColor }) => {
  const [borderSize, setBorderSize] = useState(1);
  const [navbarBorderColor, setNavbarBorderColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const switchState = useCheckboxState();

  useEffect(() => {
    saveBorderSwitchState(switchState.state);
    saveBorderSize(borderSize);
    saveNavbarBorderColor(navbarBorderColor);
  }, [switchState, saveBorderSwitchState, borderSize, saveBorderSize, navbarBorderColor, saveNavbarBorderColor]);

  useEffect(() => {
    saveBorderStyle(selectedOption.value);
  }, [selectedOption, saveBorderStyle]);

  const handleBorderSize = (e) => {
    setBorderSize(e);
  };

  const handleNavbarBorderColorChange = (e) => {
    setNavbarBorderColor(e.rgb);
  };

  return (
    <div>
      <Switch shape='slim' color='primary' {...switchState}>
        Border: {switchState.state ? 'On' : 'Off'}
      </Switch>
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <label>Border Size: {borderSize}</label>}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && <Slider min={1} max={10} step={1} dots value={borderSize} onChange={handleBorderSize} />}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <label>Border Style:</label>}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && <Select defaultValue={selectedOption} onChange={setSelectedOption} options={options} />}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <label>Choose a color for your border.</label>}
      {switchState.state && <br />}
      {switchState.state && <br />}
      {switchState.state && <hr />}
      {switchState.state && <br />}
      {switchState.state && <ChromePicker onChange={handleNavbarBorderColorChange} color={navbarBorderColor} />}
      {switchState.state && <br />}
      {switchState.state && <br />}
    </div>
  );
};

export default NavbarBorder;
