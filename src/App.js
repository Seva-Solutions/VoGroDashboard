import React, { Component } from 'react';
import MenuBar from './components/sidebar/MenuBar'
import { BrowserRouter,Route } from 'react-router-dom'
import SideBar from './components/navbar/navbar'
// import Tasks from './components/Tasks/tasks';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <MenuBar/> */}
        <SideBar />
        <Route path = '/tasks'>
          {/* <Tasks/> */}
        </Route>
      </BrowserRouter>
    )
  }
}
export default App;