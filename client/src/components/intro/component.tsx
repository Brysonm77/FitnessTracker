import { css, keyframes } from '@emotion/react';
import { $purple, $violet } from '../../assets/colors';
import Star from '../../assets/img/Star.jpg';

const starAni = keyframes`
from { opacity: .6;
}
to {
  opacity: 0;
}`;

const styles = {
  background: css({
    position: 'relative',
    background: `linear-gradient(30deg, black 1%, ${$purple} 60%, ${$violet})`,
    height: '100vh',
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
};

const Intro = () => {
  return (
    <>
      <div css={styles.background}>
        <div css={styles.stars}></div>
      </div>
    </>
  );
};

export default Intro;
