import { $lime, $mint, $pink } from '../../assets/colors';

import React from 'react';
import { css } from '@emotion/react';

const styles = {
  back: css({
    background: $pink,
    height: '100vh',
  }),
  title: css({
    fontSize: '4rem',
    color: $mint,
    fontWeight: 500,
  }),
  border: css({
    // background: $lime,
    background: `radial-gradient(ellipse at top, ${$mint}, ${$lime})`,
    height: '60vh',
    width: '38rem',
    display: 'flex',
    justifyContent: 'center',
    marginTop: '7rem',
    borderRadius: '20px',
  }),
};
const Login = () => {
  return (
    //border for the whole page
    <div css={styles.back}>
      <div css={styles.title}>Title</div>
      <div className="row d-flex justify-content-center">
        <div className="col-12" css={styles.border}>
          ADD LOGIN FORM HERE
        </div>
      </div>
    </div>
  );
};
export default Login;
