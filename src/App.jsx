import { useState } from 'react'

import './App.css'
import { Header } from './components/Header'
import  Blogs  from './components/Blogs'
import BookMarks from './components/BookMarks'

function App() {
  const [bookMarks,setBookmarks]= useState([]);
  const [readingTime,setReadingTime]=useState(0);

  const handleMarksAsRead=(id,time)=>{
    const newTime=readingTime+time
    setReadingTime(newTime);
    const remainingBookmarks=bookMarks.filter(bookMarks=> bookMarks.id!== id);
    setBookmarks(remainingBookmarks)

  }
  
  


  const handleAddBookmark = blog =>{
   const newBookMark=[...bookMarks,blog];
   setBookmarks(newBookMark);
  }
  return (
    <>
     
     <Header></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handleAddBookmark={handleAddBookmark} handleMarksAsRead={handleMarksAsRead}></Blogs>
     <BookMarks bookMarks={bookMarks} readingTime={readingTime}></BookMarks>
     </div>
     
    
    </>
  )
}

export default App
