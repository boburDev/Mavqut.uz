import sky from './images/sky.png';
import cloudLeft from './images/cloud_left.png';
import mosque from './images/kupol.png';
import light1 from './images/light1.png';
import light2 from './images/light2.png';
import light3 from './images/light3.png';
import tower from './images/tower.png';
import cloudCenter from './images/cloud_center.png';
import bottom from './images/bottom.png';
import cloudBottom from './images/cloud_bottom.png';
import moon from './images/moon.png';
import React from 'react';
import { Spring } from 'react-spring/renderprops.js';
import classes from './Page5.module.css';
import { NavLink } from 'react-router-dom';

function Page5() {

  return (
    <div className={classes.App}>
      <Spring
        config={{ duration: 900 }}
        from={{ transform: 'translateX(-150px)' }}
        to={{ transform: 'translateX(0px)' }}
      >
        {props => <img style={props} className={classes.sky} src={sky} alt="" />}
      </Spring>
      <Spring
        delay={700}
        config={{ duration: 1000 }}
        from={{ transform: 'translate(700px, -700px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {props => <img style={props} className={classes.light1} src={light1} alt="" />}
      </Spring>
      <Spring
        delay={700}
        config={{ duration: 1000 }}
        from={{ transform: 'translate(700px, -700px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {props => <img style={props} className={classes.light2} src={light2} alt="" />}
      </Spring>
      <Spring
        delay={700}
        config={{ duration: 1000 }}
        from={{ transform: 'translate(700px, -700px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {props => <img style={props} className={classes.light3} src={light3} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateY(-150px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {props => <img style={props} className={classes.moon} src={moon} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 700 }}
        from={{ transform: 'translateX(-150px)' }}
        to={{ transform: 'translateX(0px)' }}
      >
        {props => <img style={props} className={classes.cloud_left} src={cloudLeft} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateX(-500px)' }}
        to={{ transform: 'translateX(0px)' }}
      >
        {props => <img style={props} className={classes.cloud_center} src={cloudCenter} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateY(150px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {props => <img style={props} className={classes.bottom} src={bottom} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translate(-150px, 150px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {props => <img style={props} className={classes.cloud_bottom} src={cloudBottom} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1400 }}
        from={{ transform: 'translateY(300px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {props => <img style={props} className={classes.tower} src={tower} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateY(300px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {props => <img style={props} className={classes.mosque} src={mosque} alt="" />}
      </Spring>
      <Spring
        delay={1400}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_1}>
          Burayda roziyallohu anhudan rivoyat qilinadi
        </p>}
      </Spring>
      <Spring
        delay={2300}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_2}>
          Rosululloh sollalohu alayhi vasallam:
        </p>}
      </Spring>
      <Spring
        delay={3200}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_3}>
          "<span>Biz</span> bilan ularning (munofiqlarning)<br />
          orasidagi farq <span>namoz</span>dir.
        </p>}
      </Spring>
      <Spring
        delay={4100}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_4}>
          Bas, kimki uni <span>tark</span> qilsa, batahqiq<br />
          <span>kofir</span> holicha qolibti", dedilar.
        </p>}
      </Spring>
      <Spring
        delay={5000}
        config={{ duration: 900 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_5}>
          Imom Termiziy rivoyatlari
        </p>}
      </Spring>
      <Spring
        delay={5900}
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

export default Page5;