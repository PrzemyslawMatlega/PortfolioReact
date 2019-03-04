import React from 'react';
import Aux from '../../hoc/Auxilliary/Auxilliary';
import classes from './About.module.scss';

import CSSTransition from 'react-transition-group/CSSTransition';
const about = (props) =>(

    <CSSTransition
     in
     classNames="fade2"
     appear={true}
     timeout={2000}          
   >
    <Aux>
        <section className={classes.about}>
                <h3 className={classes.welcome} >Welcome to my portfolio </h3>
                <p className={classes.text}>
                            I am highly interested in front-end technologies and 
                            I hope to find a job within a company where I will be able to develop my skills and use my knowledge. 
                            I am currently focusing on React.js and PWA. 
                     </p>
        
        </section>
    </Aux>
    </CSSTransition>
);

export default about;