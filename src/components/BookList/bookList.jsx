/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/book";
import coverImg from "../../images/cover_not_found.jpg"
import Loading from "../Loader/Loader";
import './bookList.css';


//https://covers.openlibrary.org/b/id/240727-S.jpg

const bookList = ()=> {

     const {books, loading, resultTitle} = useGlobalContext();
    const bookWithCovers = books.map((singleBook) => {
        return{
            ...singleBook,
            id: (singleBook.id).replace("/works/", ""),
            cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg

        }
            
    })
    if(loading) return <Loading />;
  return (
    <section className='booklist'>
         <div className="container">
            <div className="section-title">
                <h2>{resultTitle}</h2>
                <div className="booklist-content grid">
                    {
                        bookWithCovers.slice(0, 30).map((item, index)=>{
                            return(
                                <Book key = {index} {...item}/>
                            )
                        })
                    }
                </div>
            </div>
         </div>
    </section>
  )
}

export default bookList