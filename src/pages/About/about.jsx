import React from 'react'
import aboutImg from "../../images/about-img.jpg"
import "./about.css"


const about = ()=> {
  return (
<section>
  <div className="container">
    <div className="section-title">
      <h2>About</h2>
    </div>
    <div className="about-content grid">
      <div className="about-img">
        <img src={aboutImg} alt="" />
      </div>
      <div className="about-text">
        <h2 className="about-title fs-16 ls-1">About BookHub</h2>
 <p>Welcome to BookHub, your ultimate destination for discovering, exploring, and indulging in the world of books. At BookHub, we are dedicated to connecting readers with an extensive collection of titles, ranging from timeless classics to the latest bestsellers. Our mission is to create a seamless and enjoyable book discovery experience for everyone.

With our powerful search tools, you can easily find books by title, author, genre, or keywords. Our platform offers personalized recommendations based on your reading history and preferences, helping you find your next great read effortlessly. Dive into detailed book information, including summaries, author biographies, publication details, and reader reviews, to make informed choices.

BookHub is more than just a book search platform; it’s a vibrant community of book lovers. Join discussions, write reviews, share your favorite books, and connect with like-minded individuals. Our mobile-friendly design ensures you can explore and enjoy our platform from any device, anywhere.

Whether you’re a lifelong bibliophile, a casual reader, or just starting your literary journey, BookHub is designed with you in mind. We believe that reading is not just a hobby, but a way to connect with the world, gain knowledge, and expand your horizons.

Thank you for choosing BookHub. We look forward to helping you discover and celebrate the joy of reading.</p>
       </div>
    </div>
  </div>
</section>

  )
}

export default about