import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Error404 from './components/Error404/Error404';
import PostDetails from './components/PostDetails/PostDetails';
import PageTitle from './components/Comments/PageTitle/PageTitle';

export const PostsContext = createContext();

function App() {

  const [posts, setPosts] = useState([]);
// Fetching the posts
  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setPosts(data);
    })
  }, [])


  return (
    <PostsContext.Provider value={posts}>
    <Router>
    
     <div className="App">

        <Header />
        
        <Switch>
        
            <Route path ="/post/:postId">
              <PostDetails />
            </Route>
            
            <Route exact path ="/posts">
              <PageTitle title={"Posts"}/>
              <Posts />
            </Route>

            <Route exact path="/">
              <PageTitle title={"Posts"}/>
              <Posts />
            </Route>

            <Route path ="*">
              <Error404 />
            </Route>

        </Switch>

      </div>
    </Router>
    </PostsContext.Provider>
  );
}

export default App;
