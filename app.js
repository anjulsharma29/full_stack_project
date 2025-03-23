// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            <h1>Thread Buyer</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Thread Buyer. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h2>Welcome to Thread Buyer</h2>
        <p>Explore the latest fashion trends for every occasion!</p>
        <Link to="/shop" className="shop-now-button">Shop Now</Link>
      </div>
      <div className="home-image">
        <img src="images/travis-scott.jpg" alt="Travis Scott Fashion" />
      </div>
    </section>
  );
}

function Shop() {
  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-gallery">
        <div className="product-card">
          <img src="images/product1.jpg" alt="Product 1" />
          <h3>Elegant Dress</h3>
          <p>$120.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="images/product2.jpg" alt="Product 2" />
          <h3>Casual T-Shirt</h3>
          <p>$35.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="images/product3.jpg" alt="Product 3" />
          <h3>Stylish Jeans</h3>
          <p>$80.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}

function Blog() {
  return (
    <section className="blog">
      <h2>Latest Fashion Blog</h2>
      <p>Stay tuned for fashion tips, news, and more!</p>
    </section>
  );
}

function About() {
  return (
    <section className="about">
      <h2>About Thread Buyer</h2>
      <p>Thread Buyer is your go-to destination for high-quality, stylish clothing!</p>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p>Have any questions? Get in touch with us!</p>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default App;