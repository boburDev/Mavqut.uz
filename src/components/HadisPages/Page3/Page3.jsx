import bg from './images/Scroll_Group_10.png';
import angle from './images/angle.png';
import towers from './images/tower.png';
import mosque from './images/kupol.png';
import trees from './images/Scroll_Group_13.png';
import { Spring } from 'react-spring/renderprops.js';
import classes from './Page3.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Page3() {

  return (
    <div className={classes.App}>
      <img className={classes.bg} src={bg} alt="" />
      <Spring
        from={{ transform: 'translateY(200px)' }}
        to={{ transform: 'translateY(0px)' }}
        config={{ duration: 1400 }}
      >
        {props => <img style={props} className={classes.towers} src={towers} alt="" />}
      </Spring>
      <Spring
        from={{ transform: 'translateY(150px)' }}
        to={{ transform: 'translateY(0px)' }}
        config={{ duration: 700 }}
      >
        {props => <img style={props} className={classes.mosque} src={mosque} alt="" />}
      </Spring>
      <Spring
        delay={700}
        from={{ transform: 'translateY(150px) scaleX(0.7)' }}
        to={{ transform: 'translateY(0px) scaleX(1)' }}
        config={{ duration: 700 }}
      >
        {props => <img style={props} className={classes.trees} src={trees} alt="" />}
      </Spring>
      <Spring
        delay={1400}
        from={{ transform: 'translateX(50px)', opacity: 0 }}
        to={{ transform: 'translateX(0px)', opacity: 1 }}
        config={{ duration: 700 }}
      >
        {props => <p style={props} className={classes.p_1}>
          Имрон ибн Хусойн розияллоху <br />
          анхудан ривоят килинади:
        </p>}
      </Spring>
      <Spring
        delay={2100}
        from={{ transform: 'translateY(50px)', opacity: 0 }}
        to={{ transform: 'translateY(0px)', opacity: 1 }}
        config={{ duration: 700 }}
      >
        {props => <p style={props} className={classes.p_2}>
          "Расулуллох соллаллоху алайхи<br />
          васаллам сафарларидан бирида<br />
          (хамма) <span>Бомдод намози</span>да ухлаб<br />
          колиб, куешнинг иссигидан<br />
          уйгондилар. <br />
          У зот алайхиссалоту васаллом: "Бу <br />
          жойдан бошка жойга утинглар", <br />
          дедилар.
        </p>}
      </Spring>
      <Spring
        delay={2800}
        from={{ transform: 'translateY(50px)', opacity: 0 }}
        to={{ transform: 'translateY(0px)', opacity: 1 }}
        config={{ duration: 700 }}
      >
        {props => <p style={props} className={classes.p_3}>
          Сунгра Билолга амр килиб, <span>азон</span><br />
          айттирдилар. Сунгра тахорат килиб,<br />
          икки ракъат фажр(Бомдод)ни<br />
          (суннатини) укидилар. Сунгра<br />
          Билолга амр этиб, такбир<br />
          айттирдилар ва уларга <span>Бомдод<br />
        намоз</span>ини укиб бердилар".

        </p>}
      </Spring>
      <Spring
        delay={3500}
        from={{ transform: 'translateY(50px)', opacity: 0 }}
        to={{ transform: 'translateY(0px)', opacity: 1 }}
        config={{ duration: 700 }}
      >
        {props => <p style={props} className={classes.p_4}>
          Абу Довуд ва икки Шайх<br />
          ривоят килганлар
        </p>}
      </Spring>
      <Spring
        delay={4200}
        config={{ duration: 1000 }}
        from={{ opacity: 0, transform: 'translateY(-400px)' }}
        to={{ opacity: 1, transform: 'translateY(0px)' }}
      >
        {props =>
          <button style={props} className={classes.enter_btn}>
            <NavLink to="/main">
              Kirish <span>></span>
            </NavLink>
          </button>}
      </Spring>
      <Spring
        from={{ transform: 'translateY(-150px)' }}
        to={{ transform: 'translateY(0px)' }}
        config={{ duration: 700 }}
      >
        {props => <img style={props} className={classes.angle} src={angle} alt="" />}
      </Spring>
    </div>
  );
}

export default Page3;