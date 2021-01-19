import classes from './Page2.module.css';
import clouds from './images/clouds.png';
import woman from './images/woman.png';
import angle from './images/right_angle.png';
import { Spring } from 'react-spring/renderprops.js';
import flowers from './images/flowers.png';
import { NavLink } from 'react-router-dom';

function Page2() {

  return (
    <div className={classes.App}>
      <Spring
        reset={true}
        config={{ duration: 500 }}
        delay={1000}
        from={{ transform: 'translateX(-100px)' }}
        to={{ transform: 'translateX(0px)' }}
      >
        {props => <img style={props} className={classes.clouds} src={clouds} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateY(250px)' }}
        to={{ transform: 'translateY(0)' }}
      >
        {props => <img style={props} className={classes.woman} src={woman} alt="" />}
      </Spring>
      <Spring
        config={{ duration: 1000 }}
        from={{ transform: 'translateY(250px)' }}
        to={{ transform: 'translateY(0)' }}
      >
        {props => <img style={props} className={classes.flowers} src={flowers} alt="" />}
      </Spring>
      <Spring
        delay={1400}
        config={{ duration: 1000 }}
        from={{ opacity: 0, transform: 'translateX(-30px)' }}
        to={{ opacity: 1, transform: 'translateX(0px)' }}
      >
        {
          props => <p style={props} className={classes.p_1}>
            Abu Umoma Suday ibn Ajlon al-Boxiliy <br />
            Roziyalloh Anhu aytadilar:
          </p>
        }
      </Spring>
      <Spring
        delay={2300}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          props => <p style={props} className={classes.p_2}>
            "<span>Rasululoh</span> Sollallohu Alayhi Vasallam <span>Hajjatul<br />
          vadoda</span> quyidagicha xutba qilganlarini <br />
            eshitdim: "Allohdan <span>taqvo</span> qilinglar. Besh vaqt<br />
            <span>namoz</span>ni ado etinglar. Ro'za oyining <span>ro'za</span>sini<br />
            tutinglar. Mollaringizni zakotni beringlar.<br />
            Amirlaringizga itoat qilinglar. Shunda<br />
            Robbilaringiz <span>jannatiga kirasizlar</span>"
          </p>
        }
      </Spring>
      <Spring
        delay={3200}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {
          props => <p style={props} className={classes.p_3}>
            (Imom Termiziy "Namoz Kitobi"da<br />
            rivoyat qilib, Hadis sahih dedilar)<br />
            (Riyozus Solihyn, 73/5)
          </p>
        }
      </Spring>
      <Spring
        delay={4000}
        config={{ duration: 1000 }}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
      >
        {props =>
          <button style={props} className={classes.enter_btn}>
            <NavLink to="/main">
              Kirish <span>></span>
            </NavLink>
          </button>
        }
      </Spring>
      <Spring
        config={{ duration: 500 }}
        from={{ transform: 'translateY(-50px)' }}
        to={{ transform: 'translateY(0px)' }}
      >
        {props => <img style={props} className={classes.right_angle} src={angle} alt="" />}
      </Spring>
    </div>
  );
}

export default Page2;