import React from 'react';
import classes from './ReadTo.module.scss';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const readto = (props) =>(
            
            <Aux>
                 <div className="project__title">
                    <div className="RT">
                        <p>toRead.com</p>
                    </div>
                </div>
                <div className={classes.WW__body}>
                     <p>toRead.com is a place where user can find the latest news on selected topics. The application was extened with the "liking" system, which allows to save and  read favourite news after collecting  the minimum of  five "likes".
                    </p>

                    <div className="project-Buttons">
                            <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://przemyslawmatlega.github.io/toRead/">
                                <p>nbsplive</p>
                            </a>
                            <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega/toRead">
                                <p>nbspgithub</p>
                            </a>
                    </div>
                </div>
         </Aux>



);

export default readto;