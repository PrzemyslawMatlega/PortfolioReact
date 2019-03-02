import React from 'react';
import classes from './ReadTo.module.scss';
import CSSTransition from 'react-transition-group/CSSTransition';

const readto = (props) =>(
            
    <CSSTransition
    in
    classNames="fade"
     appear={true}
    
     timeout={1500}          
   >
            <div className="project-container">
                 <div className={classes.RT}>
                    <div className={classes.RT__head}>
                        <p>toRead.com</p>
                    </div>
                </div>
                
                     <p className='project-text'>toRead.com is a place where user can find the latest news on selected topics. The application was extened with the "liking" system, which allows to save and  read favourite news after collecting  the minimum of  five "likes".
                    </p>

                    <div className="project-Buttons">
                            <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://przemyslawmatlega.github.io/toRead/">
                                <p>live</p>
                            </a>
                            <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega/toRead">
                                <p>github</p>
                            </a>
                    </div>
                
         
         </div>
         </CSSTransition>


);

export default readto;