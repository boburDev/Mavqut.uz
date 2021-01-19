import React from 'react';
import { Spring } from 'react-spring/renderprops.js';
import classes from './Page6.module.css';
import bg from './images/bg.png';
import mosque from './images/Group 541.png';
import hedge from './images/Group 539.png';
import { NavLink } from 'react-router-dom';

function Page6() {

  return (
    <div className={classes.App}>
      <img className={classes.bg} src={bg} alt="" />
      <Spring
        config={{ duration: 1400 }}
        from={{ width: '75%' }}
        to={{ width: '0%' }}
      >
        {props => <div style={props} className={classes.hide} />}
      </Spring>
      <Spring
        config={{ duration: 700 }}
        from={{ transform: 'translate(50px, -50px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {props => <img style={props} className={classes.mosque} src={mosque} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 700 }}
        from={{ transform: 'translate(50px, -50px)' }}
        to={{ transform: 'translate(0px, 0px)' }}
      >
        {props => <img style={props} className={classes.hedge} src={hedge} alt="" />}
      </Spring>
      <Spring
        delay={1300}
        config={{ duration: 700 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_1}>
          Abu Qatoda roziyallohu anhudan rivoyat qilinadi:
        </p>}
      </Spring>
      <Spring
        delay={1900}
        config={{ duration: 700 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_2}>
          "Nabiy sollallohu alayhi vasallamga <span>namoz</span>dan<br />
          uxlab qolishlarini <span>zikr</span> qildilar<br />
        </p>}
      </Spring>
      <Spring
        delay={2500}
        config={{ duration: 700 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_3}>
          Bas, u zot:
        </p>}
      </Spring>
      <Spring
        delay={3100}
        config={{ duration: 700 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_4}>
          "Albatta uyquda (qasddan) nuqsonga yo'l<br />
          qo'yish yo'q. (Qasddan) nuqsonga yo'l<br />
          qo'yish faqat <span>uyg'oqlik</span>da bo'lur", dedilar".
        </p>}
      </Spring>
      <Spring
        delay={3700}
        config={{ duration: 700 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props => <p style={props} className={classes.p_5}>
          Termiziy, Muslim va Abu Dovudlar<br />
          rivoyat qilganlar
        </p>}
      </Spring>
      <Spring
        delay={4300}
        config={{ duration: 700 }}
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

export default Page6;