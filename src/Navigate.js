import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Mainmenu from './Grid/Mainmenu';
import Intro from './Grid/Intro';
import Learn from './Learn'
class Navigate extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
          <Route path="/Mainmenu" exact element={<Mainmenu/>}></Route>
            <Route path="/Intro" exact element={<Intro />}></Route>
            <Route path="/Learn" exact element={<Learn/>}></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
export default Navigate;