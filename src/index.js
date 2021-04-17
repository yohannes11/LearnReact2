import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom'

import Home from './components/home'
import Posts from './components/posts'
import Profile from './components/profile'
import PostItem from './components/post_item'

const App = () =>{
  return (
 <BrowserRouter>
 <div>
   <header>
     <Link to="/">Home</Link><br/>
     <Link to="posts">Posts</Link><br/>
     <Link to={{pathname:'/profile'}}>Profile</Link>
     </header>
 <Route path="/" exact component={Home}/>
 <Route path="/posts" exact component={Posts}/>
 <Route path="/posts/:id/:username" component={PostItem}/>
 <Route path="/profile" component={Profile}/>
 </div>
 </BrowserRouter>
  )
}
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
