import { css } from '@emotion/react';
import { $red, $purple, $skyBlue, $violet, $grey } from '../../assets/colors';

const styles = {
  bubbleOne: css({
    height: '50vh',
    width: '95vw',
    marginTop: '2%',
    marginLeft: '2.5%',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
  }),
  title: css({
    fontSize: '7rem',
    fontFamily: 'playfair',
    fontWeight: 600,
    marginLeft: '3%',
    marginTop: '2%',
    background: `-webkit-linear-gradient(left,  black, ${$red}, ${$purple} )`,
    backgroundClip: 'text',
    color: 'transparent',
    display: 'inline-block',
  }),
  border: css({
    border: '1px solid transparent',
    borderRadius: '60px',
    boxShadow: `
      0 0 20px ${$purple},
      0 0 40px ${$skyBlue},
      0 0 40px ${$violet}
    `,
  }),
  head: css({
    padding: '1rem',
    fontSize: '3rem',
    fontStyle: 'italic',
    fontFamily: 'helvetica',
  }),
  para: css({
    fontSize: '1.5rem',
    fontFamily: 'helvetica',
    padding: '.5rem',
  }),
  sty: {
    backgroundColor: $grey,
    height: '120vh',
  },
};

const Info = () => {
  return (
    <div style={styles.sty}>
      <h1 css={styles.title}>Why Join?</h1>
      <div className="row" css={styles.bubbleOne}>
        <div css={styles.border}>
          <h2 css={styles.head}>Explore the galaxy and grow </h2>
          <p className="d-flex justify-content-center" css={styles.para}>
            Sint culpa anim officia id incididunt voluptate nostrud adipisicing Lorem eiusmod. Tempor incididunt fugiat
            voluptate tempor eiusmod eiusmod et mollit id quis sunt sunt esse. Dolore do nulla pariatur aliqua amet ea
            laboris commodo ex culpa sint cupidatat pariatur veniam. Eiusmod nostrud amet cillum sunt duis incididunt.
            Amet anim quis proident minim cillum. Nisi voluptate dolor ullamco dolore mollit veniam deserunt ullamco est
            eiusmod voluptate consectetur reprehenderit. Reprehenderit in deserunt velit consequat proident enim. Anim
            Lorem consequat aliqua ipsum pariatur culpa pariatur occaecat sit. Laborum nisi amet ipsum qui minim nisi
            voluptate irure proident reprehenderit. Esse ex anim quis culpa adipisicing ea. Culpa ut voluptate duis
            dolor pariatur nostrud commodo incididunt id incididunt sunt veniam veniam. Laborum incididunt anim nisi
            irure laborum. Ut anim anim magna sint dolore aliquip magna cupidatat do. Enim eu laboris minim in aliquip
            aliqua sunt irure. In elit magna consequat eiusmod. Laboris nulla fugiat ad veniam aliqua irure cillum
            dolore irure deserunt proident ut adipisicing. Ut et ipsum anim incididunt esse fugiat irure reprehenderit.
            Eiusmod aute fugiat duis cillum fugiat commodo nulla cillum mollit officia elit. Ex mollit laborum veniam
            voluptate proident elit laboris consequat sunt Lorem id aliquip enim.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info;
