import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './Portfolio.module.scss';
const portfolio = (props) =>(
                      
    <CSSTransition
     in
     classNames="fade"
     appear={true}
     timeout={1500}          
   >
            <div className="project-container">
                    <header className={classes.portfolio}> 
                    <h1 className="heading-name logo">przemysław matlęga</h1>
                    <h3 className="heading-frontend logo">Front-end Developer</h3>
                  </header>
                    <p className='project-text'>
                        It's my first React.js App which I made from scratch. I am consistently enhancing my knowledge about this framework.  
                        
                    </p>
                       <div className="project-Buttons single">
               
                        <a target="_blank" className="btn-out" rel="noopener noreferrer" href="https://github.com/PrzemyslawMatlega/WorldWide">
                            <p>github</p>
                        </a>
                    </div>
         </div>



   </CSSTransition>

);

export default portfolio;