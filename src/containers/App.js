import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';
import Principal from "../component/Principal";
import Blogs from "../component/Blogs";

function App() {
  return (
    <div className="App">



      <BrowserRouter>

            <Route exact path='/Principal' component={Principal}/>
            <Route exact path='/Blogs' component={Blogs}/>

        </BrowserRouter>

    </div>
  );
}

export default App;
