import React, { Component } from 'react';
//import HelloWorld from './HelloWorld';
//import the Split component into the App.js file.
//import Split from './composition/Split.js';
//import the CSS file
import './App.css';
//import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import Bomb from './state-drills/Bomb';
import HelloWorld from './state-drills/HelloWorld';
import RouletteGun from './state-drills/RouletteGun';
import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
]

const tabsProp = [
  { name: 'First tab',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
  { name: 'Second tab',
    content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
  { name: 'Third tab',
    content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello World</h2>
        <HelloWorld />
        <h2>Bomb</h2>
        <Bomb />
        <h2>Roulette Gun</h2>
        <RouletteGun bulletInChamber={6} />
        <Tabs tabs={tabsProp} />
        <h2>Accordion</h2>
        <Accordion sections={sections} />
        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} /> 
      </div>
    );
  }
}

export default App;



//make 2 tooltips here and another inside the App directly
/*const firstTooltip = (
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
    <Messages name="Messages" unread={0} />
    <Messsages name="Notifictations" unread={10} />  
    <HelloWorld />
      <Bomb />
      <Split className='left' flexBasis={2}>
        This is the content for the left `Split`. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        }
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}*/

