import React from 'react';
//import HelloWorld from './HelloWorld';
//import the Split component into the App.js file.
import Split from './composition/Split.js';
//import the CSS file
import './App.css';
import Tooltip from './composition/Tooltip';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
//make 2 tooltips here and another inside the App directly
const firstTooltip = (
  <Tooltip color='hotpink'  message=' tooltip message '>
    ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip color='#126BCC' message=' another tooltip message '>
    officiis
  </Tooltip>
)

//use the Split component inside the App's render inside a main element.
function App() {
  return (
    <main className='App'>
      <HelloWorld />
      <Bomb />
      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        {/* make another tooltip directly inside the App*/}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;