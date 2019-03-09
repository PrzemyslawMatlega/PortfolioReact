import React from 'react';
import {ReactComponent as Plane} from '../../../assets/svg/airplane.svg';
import classes from '../WorldWide/WorldWide.module.scss';


import CSSTransition from 'react-transition-group/CSSTransition';
const worldwidePWA = (props) =>(
            
    <CSSTransition
     in
     classNames="fade"
     appear={true}
     timeout={1500}          
   >
            <div className="project-container">
                <div className={classes.WW}>
                    <div className={classes.WW__head}>
                        <p>WorldWidePWA</p>
                        <Plane className={classes.WW__icon} alt="WorldWide"/>
                    </div>
                </div>
                    <p className='project-text'>
                    WorldWidePWA is an updated version of one of my previous projects. I added Progressive web app features like precaching of main files, dynamic caching of images, fonts, and event requests. Moreover, WorldWidePWA offers an offline fallback module which presents the last searched events. Open page, reload and enjoy PWA!
                        
                    </p>
                       <div className="project-Buttons">
                        <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://przemyslawmatlega.github.io/WorldWidePWA/">
                            <p>live</p>
                        </a>
                        <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega/WorldWidePWA">
                            <p>github</p>
                        </a>
                    </div>
         </div>
    </CSSTransition>


);

export default worldwidePWA;