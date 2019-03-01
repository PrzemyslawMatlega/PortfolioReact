import React, { Component } from 'react';

import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import bgVideo from './assets/Hello-World.mp4';
import Aux from './hoc/Auxilliary/Auxilliary';
import './App.scss';


class App extends Component {
  state = {
    navStatus: 'about',
    listItem: 0
  };
  
  switchNav = (type) =>{
     let newState ={...this.state};
     newState.navStatus=type;

    this.setState({navStatus : type})
   
  }

  switchProjects = (projectPos) =>{
    const oldCount = this.state.listItem;
      if(projectPos=== 'next'){
        if (this.state.listItem===3) return;
        const updatedCount = oldCount + 1;
        this.setState( { listItem:updatedCount} );
      }
      else{
        if (this.state.listItem===0) return;
        const updatedCount = oldCount - 1;
        this.setState( { listItem:updatedCount} );
      }

  }
  

  render() {
      let navigation = null;

      switch (this.state.navStatus){
          case 'about':
          
          navigation = <About/>;
          break;
          case 'projects':
          navigation = <Projects 
          listItem = {this.state.listItem}
          sw = {this.switchProjects}
          />;
          break;
          case 'contact':
          navigation = <Contact/>;
          break;
          default:
          return null;
        
      }

      return (
        <Aux>

        <div className="App">
                  <header onClick={() => this.switchNav('about')}> 
                    <h1 className="heading-name logo">przemysław matlęga</h1>
                    <h3 className="heading-frontend logo">Front-end Developer</h3>
                  </header>

                  <main>
                      {navigation}
                  </main>

                  <nav>
                      <div className="SwitchButton" onClick={() => this.switchNav('projects')}><p>Projects</p></div>
                      <div className="SwitchButton" onClick={ () => this.switchNav('contact')}><p>Contact</p></div>
                  </nav>
              
        </div>

                <div className="videoContainer"> 
                    <video autoPlay muted loop >
                      <source src={bgVideo} type="video/mp4"/>
                    </video>
                </div>

        </Aux>
    );
  }
}

export default App;
