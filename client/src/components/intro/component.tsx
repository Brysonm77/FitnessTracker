import { css, keyframes } from '@emotion/react';
import { $skyBlue, $purple, $violet, $white } from '../../assets/colors';
import Star from '../../assets/img/Star.jpg';
import { useEffect, useState } from 'react';

const starAni = keyframes`
  from { opacity: .1; color: ${$white}; }
  to { opacity: .6; color: ${$skyBlue}; }
`;

const words = ['Start Your Journey Today', 'Be Better Than Yesterday', 'Test'];

const styles = {
  background: css({
    position: 'relative',
    background: `linear-gradient(30deg, black 1%, ${$purple} 60%, ${$violet})`,
    height: '35vh',
  }),
  stars: css({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `url(${Star}) repeat`,
    animation: `${starAni} 4s linear infinite alternate`,
  }),
  text: css({
    fontSize: '7rem',
    fontFamily: 'playfair',
    fontStyle: 'italic',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    height: '100%',
  }),
};

const Intro = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prevIndex) => (prevIndex + 1) % words.length);
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div css={styles.background}>
        <div css={styles.stars}>
          <div css={styles.text} key={currentWord}>
            {words[currentWord]}
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
