import React from 'react';
import { Spring } from 'react-spring/renderprops.js';
import angle from './images/left_angle.png';
import man from './images/man.png';
import classes from './Page1.module.css';
import { NavLink } from 'react-router-dom';

function Page1() {

  return (
    <div className={classes.App}>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateX(-100px)' }}
        to={{ transform: 'translateX(0px)' }}
      >
        {props => <img className={classes.left_angle} style={props} src={angle} alt="" />}
      </Spring>
      <Spring
        delay={1000}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_1}>
          <b>Абу Катода розияллоху <br />
            анхудан ривоят килинади:
          </b>
        </p>}
      </Spring>
      <Spring
        delay={2000}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_2}>
          "<span>Набий соллаллоху алайхи <br />
          васаллам</span>га <span>намоз</span>дан ухлаб <br />
          колишларини <span>зикр</span> килдилар. <br />
          Бас, у зот: "Албатта, <span>уйку</span>да <br />
          (касддан) нуксонага йул куйиш <br />
          йук. (Касддан) нуксонага йул <br />
          куйиш факат <span>уйгоклик</span>да булур",<br />
          дедилар".
        </p>}
      </Spring>
      <Spring
        delay={3000}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_3}>
          Термизий, Муслим ва Абу <br />
          Довудлар ривоят <br />
          килганлар.
        </p>}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translate(150px, 150px)' }}
        to={{ transform: 'translate(0, 0)' }}
      >
        {props => <img style={props} className={classes.man} src={man} alt="" />}
      </Spring>
      <Spring
        delay={4000}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <button style={props} className={classes.enter_btn}>
          <NavLink to="/main">
            Kirish <span>></span>
          </NavLink>
        </button>}
      </Spring>
    </div>
  );
}

export default Page1;