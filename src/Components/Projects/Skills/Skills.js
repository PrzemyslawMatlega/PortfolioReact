import React from 'react';

import classes from './Skills.module.scss';


import CSSTransition from 'react-transition-group/CSSTransition';
const skills = (props) =>(
            
    <CSSTransition
     in
     classNames="fade"
     appear={true}
     timeout={1500}          
         >
            <div className="project-container skills">
                <div className={classes.skills}>

                <h4 className={classes.skills__head}>Technologies:</h4>
                   <ul className={classes.skills__list}>
                       <li>HTML5</li>
                       <li>CSS/SCSS</li>
                       <li>JavaScript ES6+</li>
                       <li>React.js </li>
                       <li>PWA (Workers, Caching strategies)</li>
                       <li>jQuery (basic)</li>
                       <li>MySQL (basic)</li>
                   </ul>
                </div>
                <div className={classes.skills}>

                   <h4 className={classes.skills__head}>Tools:</h4>
                   <ul className={classes.skills__list}>
                       <li>Webpack</li>
                       <li>Workbox</li>
                       <li>Git</li>
                   </ul>
                </div>

            </div>
    </CSSTransition>


);

export default skills;