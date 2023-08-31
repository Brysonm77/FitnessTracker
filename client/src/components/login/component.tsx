import React from 'react';
import { css } from '@emotion/react';
import { $purple, $violet } from '../../assets/colors';

const styles = {
  leftSideBot: css({
    background: `linear-gradient(to bottom, ${$purple} 40%, ${$violet})`,
  }),
  rightSide: css({
    height: '100vh',
    border: `1px solid ${$violet}`,
  }),
  loginTitle: {
    color: 'black',
    WebkitTextStroke: `2px ${$violet}`, // Purple outline effect for Chrome, Safari
    MozTextStroke: `2px ${$violet}`, // Firefox
    msTextStroke: `2px ${$violet}`, //  Internet Explorer/Edge
    fontSize: '5.5rem',
    fontFamily: 'playfair',
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10rem',
  },
  loginInfo: {
    fontFamily: 'playfair',
    height: '30rem',
    width: '50rem',
    marginTop: '2rem',
    margin: '0 auto',
    border: `3px solid ${$purple}`,
    borderRadius: '15px',
    boxShadow: `0px 7px 15px ${$violet}`,
    display: 'flex',
    justifyContent: 'center',
  },
};

const Login = (): JSX.Element => {
  return (
    <>
      <div className="row">
        <div className="col-6" css={styles.leftSideBot}>
          {/* There will be an image added here maybe a sign too */}
        </div>
        <div className="col-6" css={styles.rightSide}>
          <h1 style={styles.loginTitle}>Login</h1>
          <h3 style={styles.loginInfo}>{/* login info will go here */}</h3>
        </div>
      </div>
    </>
  );
};
export default Login;
