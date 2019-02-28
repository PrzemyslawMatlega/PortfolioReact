import React, { Component } from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';

import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import bgVideo from './assets/Hello-World.mp4';
import './App.scss';


class App extends Component {
  state = {
    navStatus: 'about'
  };
  
  switchNav = (type) =>{
     let newState ={...this.state};
     newState.navStatus=type;

    this.setState({navStatus : type})
   
  }

  

  render() {
      let navigation = null;

      switch (this.state.navStatus){
          case 'about':
          
          navigation = <About/>;
          break;
          case 'projects':
          navigation = <Projects/>;
          break;
          case 'contact':
          navigation = <Contact/>;
          break;
          default:
          return null;
        
      }

      return (
      <div className="App">
                <CSSTransition
                in
                classNames="fade"
                appear={true}
                timeout={2500}
                >
                <header> 
                  <h1 className="heading-name logo">przemysław matlęga</h1>
                  <h3 className="heading-frontend logo">Front-end Developer</h3>
                </header>

                </CSSTransition>

                <main>
                    {navigation}
                </main>

                <nav>
                    <div className="SwitchButton" onClick={() => this.switchNav('projects')}>Projects</div>
                    <div className="SwitchButton" onClick={ () => this.switchNav('contact')}>Contact</div>
                </nav>
            
                <div className="videoContainer"> 
                    <video autoPlay muted loop >
                      <source src={bgVideo} type="video/mp4"/>
                    </video>
                </div>
      </div>
    );
  }
}

export default App;
