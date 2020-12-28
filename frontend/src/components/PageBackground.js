import { useState, useEffect } from 'react';
import { Switch, Radio, useCheckboxState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { ChromePicker } from 'react-color';

const PageBackground = ({ saveImg, setOverlay, saveBackgroundColor, saveOverlayColor, setBackgroundRadio }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState();
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [overlayColor, setOverlayColor] = useState({ r: 41, g: 31, b: 90, a: 0 });
  const [radio, setRadio] = useState('color');

  const switchState = useCheckboxState('');

  useEffect(() => {
    saveImg(image);
    setOverlay(switchState.state);
    saveBackgroundColor(backgroundColor);
    saveOverlayColor(overlayColor);
    setBackgroundRadio(radio);
  }, [
    saveImg,
    image,
    setOverlay,
    switchState,
    saveBackgroundColor,
    backgroundColor,
    setBackgroundRadio,
    radio,
    saveOverlayColor,
    overlayColor,
  ]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=${process.env.REACT_APP_UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => setImage(data.results[Math.floor(Math.random() * 10)].urls.regular))
      .catch((err) => console.log(err));

    setText('');
  };

  const handleColorChange = (e) => {
    setBackgroundColor(e.hex);
  };

  const handleOverlayChange = (e) => {
    setOverlayColor(e.rgb);
  };

  const handleRadio = (input) => {
    setRadio(input);
  };

  return (
    <div>
      <h2>Choose a color or an image to set your navbar against.</h2>
      <br />
      <hr />
      <br />
      <Radio
        name='bg-color-or-image'
        variant='fill'
        animation='jelly'
        color='primary'
        onChange={() => handleRadio('color')}
        defaultChecked
      >
        Color
      </Radio>
      <br />
      <br />
      <hr />
      <br />
      {radio === 'color' && <ChromePicker disableAlpha onChange={handleColorChange} color={backgroundColor} />}
      {radio === 'color' && <br />}
      {radio === 'color' && <br />}
      {radio === 'color' && <hr />}
      {radio === 'color' && <br />}
      <Radio
        name='bg-color-or-image'
        variant='fill'
        animation='jelly'
        color='primary'
        onChange={() => handleRadio('image')}
      >
        Image
      </Radio>
      <br />
      <br />
      <hr />
      <br />
      {radio === 'image' && (
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Search Image' value={text} onChange={handleChange} />
          <button type='submit'>Submit</button>
          <br />
          <br />
          <hr />
          <br />
        </form>
      )}
      {radio === 'image' && (
        <Switch shape='slim' color='primary' {...switchState}>
          Color Overlay
        </Switch>
      )}
      {radio === 'image' && <br />}
      {radio === 'image' && <br />}
      {radio === 'image' && <hr />}
      {radio === 'image' && <br />}
      {switchState.state === true && radio === 'image' ? (
        <ChromePicker onChange={handleOverlayChange} color={overlayColor} />
      ) : (
        (switchState.state = false)
      )}
      {switchState.state === true && radio === 'image' && <br />}
      {switchState.state === true && radio === 'image' && <br />}
      {switchState.state === true && radio === 'image' && <br />}
    </div>
  );
};

export default PageBackground;
