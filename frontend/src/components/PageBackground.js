import { useState, useEffect } from 'react';
import { Switch, Radio, useCheckboxState } from 'pretty-checkbox-react';
import '@djthoms/pretty-checkbox';
import { SliderPicker } from 'react-color';

const PageBackground = ({ saveImg, setOverlay, saveBackgroundColor, setBackgroundRadio }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState();
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [radio, setRadio] = useState('color');

  const switchState = useCheckboxState('');

  useEffect(() => {
    saveImg(image);
    setOverlay(switchState.state);
    saveBackgroundColor(backgroundColor);
    setBackgroundRadio(radio);
  }, [saveImg, image, setOverlay, switchState, saveBackgroundColor, backgroundColor, setBackgroundRadio, radio]);

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

  const handleRadio = (input) => {
    setRadio(input);
  };

  return (
    <div>
      <h2>Choose a color or an image to set your navbar against.</h2>
      <br />
      <hr />
      <br />
      <Radio name='bg-color-or-image' onChange={() => handleRadio('color')} defaultChecked>
        Color
      </Radio>
      <br />
      <br />
      <hr />
      <br />
      <SliderPicker onChange={handleColorChange} color={backgroundColor} />
      <br />
      <br />
      <hr />
      <br />
      <Radio name='bg-color-or-image' onChange={() => handleRadio('image')}>
        Image
      </Radio>
      <br />
      <br />
      <hr />
      <br />
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Image' value={text} onChange={handleChange} />
        <br />
        <br />
        <hr />
        <br />
        <button type='submit'>Submit</button>
        <br />
        <br />
        <hr />
        <br />
      </form>
      <Switch shape='fill' color='primary' {...switchState}>
        Color Overlay: {switchState.state + ''}
      </Switch>
      <br />
      <br />
      <hr />
      <br />
      <SliderPicker />
    </div>
  );
};

export default PageBackground;
