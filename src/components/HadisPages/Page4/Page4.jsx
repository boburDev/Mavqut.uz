import { Spring } from 'react-spring/renderprops.js';
import moon from './images/moon.png';
import mosque from './images/mosque.png';
import towers from './images/towers.png';
import classes from './Page4.module.css';
import { NavLink } from 'react-router-dom';

function Page4() {

  return (
    <div className={classes.App}>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translate(-150px, -150px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {
          props => <img className={classes.moon} style={props} src={moon} alt="" />
        }
      </Spring>
      <Spring
        config={{ duration: 1700 }}
        from={{ transform: 'translateY(200px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {
          props => <img style={props} className={classes.towers} src={towers} alt="" />
        }
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateY(200px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {
          props => <img style={props} className={classes.mosque} src={mosque} alt="" />
        }
      </Spring>
      <Spring
        delay={1000}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          props => <p style={props} className={classes.p_1}>Ibn Umar roziyallohu anhu rivoyat qilinadi.</p>
        }
      </Spring>
      <Spring
        delay={1900}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          props => <p style={props} className={classes.p_2}>
            Rosululloh sollallohu alayhi vasallam
          </p>
        }
      </Spring>
      <Spring
        delay={2800}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          props => <p style={props} className={classes.p_3}>
            "<span>Jamoat</span> bilan o'qilgan <span>namoz</span> yolg'iz<br />
            o'qilgan namozdan <span>yigirma yeti</span> darajada<br />
            <span>afzal</span>dir", deb aytdilar.
          </p>
        }
      </Spring>
      <Spring
        delay={3700}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          props => <p style={props} className={classes.p_4}>
            Imom Buxoriy va<br />
            Muslim rivoyatlari
          </p>
        }
      </Spring>
      <Spring
        delay={4600}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props =>
          <button style={props} className={classes.enter_btn}>
            <NavLink to="/main">
              Kirish <span>></span>
            </NavLink>
          </button>}
      </Spring>
    </div>
  );
}

export default Page4;