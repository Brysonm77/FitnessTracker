import React from 'react';
import { css } from '@emotion/react';

const styles={
  leftSide: css({
    background: 'red',
  }), rightSide: css({}),
}

const Login = ():JSX.Element => {
  return (
    <> 
      <div css={styles.leftSide}> </div>
      <div css={styles.leftSide}>test</div>
      <div> wat</div>
    </>
  );
};
export default Login;
