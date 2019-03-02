import React from 'react';
import ReadTo from './ReadTo/ReadTo';
import WorldWide from './WorldWide/WorldWide';
import Portfolio from './Portfolio/Portfolio';
import Skills from './Skills/Skills';
import {ReactComponent as Left} from '../../assets/svg/left.svg';
import {ReactComponent as Right} from '../../assets/svg/right.svg';

import classes from './Projects.module.scss';


import CSSTransition from 'react-transition-group/CSSTransition';

const projects = (props) =>{
        const projectList = [<Portfolio/>,<WorldWide/>,<ReadTo/>,<Skills/>]
        

        return (

            
            <section className={classes.projects}>
           
                    {projectList[props.listItem]}
                
                     
                        <div className={[classes.projects__arrow, classes.one].join(" ")} onClick={() => props.sw('prev')}>
                           {
                               props.listItem===0? null:
                               <CSSTransition
                               in
                               classNames="fade"
                                appear={true}
                                timeout={1500}          
                              >
                               <Left className={classes.projects__icon}/> 
                               </CSSTransition>
                            } 
                      </div>
                      <div className={[classes.projects__arrow, classes.two].join(' ')} onClick={() => props.sw('next')}>
                             {
                               props.listItem===3? null:
                               <CSSTransition
                                in
                                classNames="fade"
                                appear={true}
                                onExit={true}
                                timeout={1500}          
                                >
                               <Right className={classes.projects__icon} />
                               </CSSTransition>
                             } 
                      </div>
                    
            </section>
            
        )
   
};

export default projects;