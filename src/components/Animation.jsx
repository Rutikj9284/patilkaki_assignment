import { TypeAnimation } from 'react-type-animation';
const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        'Efficient',
        1000,
        'Reliable',
        1000,
        'Scalable',
        1000       
      ]}
      className='g-txt'
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Animation;