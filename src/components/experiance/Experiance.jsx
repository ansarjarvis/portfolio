import { BsFillPatchCheckFill } from "react-icons/bs";
import classes from "./Experiance.module.css";
const Experiance = () => {
  return (
    <section id="experiance">
      {/* <h5>What skills I have</h5> */}
      <h2>My Skills</h2>
      <div className="container experiance__container">
        <div className={classes.experiance__frontend}>
          <h3>Frontend</h3>
          <div className={classes.experiance__content}>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>HTML</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>CSS</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>JavaScript</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>React</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>Bootstrap</h4>
            </article>
          </div>
        </div>
        {/* backend */}
        <div className={classes.experiance__backend}>
          <h3>Backend</h3>
          <div className={classes.experiance__content}>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>Nodejs</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>placeholder</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>placeholder</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>placeholder</h4>
            </article>
            <article className={classes.experiance__details}>
              <BsFillPatchCheckFill></BsFillPatchCheckFill>
              <h4>placeholder</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
