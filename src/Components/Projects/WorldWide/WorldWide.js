import React from 'react';
import {ReactComponent as Plane} from '../../../assets/svg/airplane.svg';
import classes from './WorldWide.module.scss';
import Aux from '../../../hoc/Auxilliary/Auxilliary';

const worldwide = (props) =>(
            
            <div>
                <div className={classes.WW}>
                    <div className={classes.WW__head}>
                        <p>WorldWide</p>
                        <Plane className={classes.WW__icon} alt="WorldWide"/>
                    </div>
                </div>
                <div className={classes.WW__body}>
                    <p>WorldWide is the application, which allows to user serach for  interesting information about  a particular city. Thanks to the connection with external APIs, user can view photos, explore maps and check the upcoming events.
                        Interesting features: VanillaJS autocomplete form, Photo gallery with slider, AJAX, MVC, RWD.
                      
                    </p>

                    <div className="project-Buttons">
                        <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://przemyslawmatlega.github.io/WorldWide/">
                            <p>&nbsplive</p>
                        </a>
                        <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega/WorldWide">
                            <p>&nbspgithub</p>
                        </a>
                    </div>
                </div>
         </div>



);

export default worldwide;