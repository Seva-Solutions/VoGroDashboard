import React, { Component } from 'react';
import MenuBar from './components/sidebar/MenuBar'
import { BrowserRouter } from 'react-router-dom'
import SideBar from './components/navbar/navbar'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <MenuBar/> */}
        <SideBar />
      </BrowserRouter>
    )
  }
}
export default App;