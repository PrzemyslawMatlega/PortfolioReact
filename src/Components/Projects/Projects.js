import React from 'react';

import Aux from '../../hoc/Auxilliary/Auxilliary';
const projects = (props) =>(
   <section className="contact mb-two">
            <h3 className="heading-section mb-two">Contact</h3>

            <div className="social__top mb-two">
                <div className="socialElement">
                  
                    <p className="socialElement__text">przemekmat@yahoo.com</p>
                </div>

            </div>

            <div className="social__bottom">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/przemyslaw-matlega">
                <p className="socialElement__text">przemekmat@yahoo.com</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/przemyslaw.matlega">
                <p className="socialElement__text">przemekmat@yahoo.com</p>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega">
                <p className="socialElement__text">przemekmat@yahoo.com</p>
                </a>
            </div>



        </section>
);

export default projects;