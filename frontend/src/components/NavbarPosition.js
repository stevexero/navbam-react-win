import { useState, useEffect } from 'react';
import { Radio } from 'pretty-checkbox-react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons';

const Note = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: #ff0000;
`;

const NavbarPosition = ({ savePosition }) => {
  const [position, setPosition] = useState('relative');

  useEffect(() => {
    savePosition(position);
  }, [position, setPosition, savePosition]);

  const handleRadio = (e) => {
    setPosition(e);
  };

  const iconStyle = {
    padding: '0',
    color: '#000',
  };

  return (
    <div>
      <h2>Choose the position of your navbar.</h2>
      <br />
      <Note>
        * enable scrolling ( <FontAwesomeIcon icon={faArrowsAltV} style={iconStyle} /> ) to see how your navbar reacts
        to the set position.
      </Note>
      <br />
      <hr />
      <br />
      <Radio
        name='nav-position'
        variant='fill'
        animation='jelly'
        color='primary'
        onChange={() => handleRadio('relative')}
        defaultChecked
      >
        Relative
      </Radio>
      <br />
      <br />
      <Radio name='nav-position' variant='fill' animation='jelly' color='primary' onChange={() => handleRadio('fixed')}>
        Fixed
      </Radio>
      <br />
      <br />
    </div>
  );
};

export default NavbarPosition;
