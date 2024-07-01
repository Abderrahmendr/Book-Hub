 import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import './index.css';
import Home from './pages/home/home'
import About from './pages/About/about'
import BookList from './components/BookList/bookList'
import BookDetails from './components/BookDetails/bookDetails'
import { AppProvider } from './context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppProvider>
<BrowserRouter>
  <Routes>
  <Route path= '/' element = { <Home/>}>
    <Route path= 'about' element = { <About/>}/>
    <Route path= 'book' element = { <BookList/>}/>
    <Route path= '/book/:id' element = { <BookDetails/>}/>
   </Route>
  </Routes>
 </BrowserRouter>
</AppProvider>
 
);
 
 