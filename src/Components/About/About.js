import React from 'react';

import Aux from '../../hoc/Auxilliary/Auxilliary';
import classes from './About.module.scss';
const about = (props) =>(
    <Aux>
      

        <section className={classes.about}>
                <h3 className={classes.welcome} >Welcome to my portfolio </h3>
                <p className={classes.text}>
                            I am highly interested in front-end technologies and 
                            I hope to find a job within a company where I will be able to develop my skills and use my knowledge. 
                            Currently I am working on React.js and PWA. 
                     </p>
        
        </section>
    </Aux>
);

export default about;