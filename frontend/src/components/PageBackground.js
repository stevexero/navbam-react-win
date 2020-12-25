import { useState, useEffect } from 'react';

const PageBackground = ({ saveImg }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState();

  useEffect(() => {
    saveImg(image);
  }, [image]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=hCutgs4K-gEYb89OH6gKbi2eimD_HkqyMgXoXYXQ-V0`
    )
      .then((res) => res.json())
      .then((data) => setImage(data.results[Math.floor(Math.random() * 10)].urls.regular))
      .catch((err) => console.log(err));

    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Image' value={text} onChange={handleChange} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default PageBackground;
