import React from 'react';
import classes from './Contact.module.scss';
import {ReactComponent as FbLogo} from '../../assets/svg/facebook.svg';
import {ReactComponent as LinkLogo} from '../../assets/svg/linkedin.svg';
import {ReactComponent as GitLogo} from '../../assets/svg/github.svg';
import {ReactComponent as EnvLogo} from '../../assets/svg/envelope.svg';

import CSSTransition from 'react-transition-group/CSSTransition';

const contact = (props) =>(

          <CSSTransition
                 in
                 classNames="fade"
                  appear={true}
                  timeout={1500}          
                >
                <section className={classes.contact}>

                        <div className={classes.contact__top}>
                                <div className={classes.element}>
                                        <EnvLogo className={classes.element__icon} alt="mail"/>
                                        <p className={classes.element__text}>przemekmat@yahoo.com</p>
                                 </div>

                        </div>

            <div className={classes.contact__bottom}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/przemyslaw-matlega">
                <LinkLogo className={classes.icon} alt="LinkedIn"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/przemyslaw.matlega">
                <FbLogo className={classes.icon} alt="Facebook"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega">
                <GitLogo className={classes.icon} alt="Github"/>      
                </a>
            </div>

                </section>
        </CSSTransition>


        
);

export default contact;