import React from 'react';
import ReadTo from './ReadTo/ReadTo';
import WorldWide from './WorldWide/WorldWide';
import {ReactComponent as Left} from '../../assets/svg/left.svg';
import {ReactComponent as Right} from '../../assets/svg/right.svg';
import classes from './Projects.module.scss';

import CSSTransition from 'react-transition-group/CSSTransition';

const projects = (props) =>{
        const projectList = [<WorldWide/>,<ReadTo/>,<WorldWide/>,<WorldWide/>]
        

        return (

            
            <section className={classes.projects}>
           
                    {projectList[props.listItem]}
                
                     <div className={classes.projects__nav}>
                        <div className={classes.projects__arrow} onClick={() => props.sw('prev')}>
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
                        <div className={classes.projects__arrow} onClick={() => props.sw('next')}>
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
                    </div>
            </section>
            
        )
   
};

export default projects;