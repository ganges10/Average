import React from 'react';
import {Route,Switch} from 'react-router-dom';

import Home from './core/Home';
import Menubar from './Menubar/menubar';
import About from './core/About';
import Profile from './core/Profile';
import CreateBlog from './blogs/CreateBlog';
import EditBlog from './blogs/EditBlog';
import NewBlog from './blogs/NewBlog';
import SignIn from './core/SignIn';
import searchResults from './blogs/searchResults';
import Comments from './blogs/Comments';



const MainRouter = () => (
    <div>
        <Menubar/>
        <Switch>
            <Route exact path="/" component = {Home}></Route>
            <Route exact path="/about" component = {About}></Route>
            <Route exact path='/profile' component= {Profile}></Route>
            <Route exact path='/create' component= {CreateBlog}></Route>
            <Route exact path='/edit' component= {EditBlog}></Route>
            <Route exact path='/blog/content' component={NewBlog}></Route>
            <Route exact path='/signup' component={SignIn}></Route>
            <Route exact path='/search' component={searchResults}></Route>
            <Route exact path='/comments' component={Comments}></Route>

        </Switch>
    </div>
)

export default MainRouter;