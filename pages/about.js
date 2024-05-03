import React from 'react';
import '../app/globals.css';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  return (
    <div className="container">
      <header>
        <div className="container">
          <div id="branding">
            <h1><span class="highlight">Synthetic</span> Systems</h1>
          </div>
          <nav>
            <u1>
              <li><Link href="/">Home</Link></li>
              <li className="current"><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
            </u1>
          </nav>
        </div>
      </header>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our Newsletter</h1>
          <form>
            <input type="email" placeholder="Enter your Email..." />
            <button type="submit" class="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <article id="main-col">
            <h1 class="page-title">About Us</h1>
            <p>
              This website is used to help students learn about HTML, CSS, and NextJS. The webdesign is based on the tutorial from Traversey Media :
            
              <a href="https://www.youtube.com/watch?v=Wm6CUkswsNw" target="_blank" rel="noopener noreferrer">
              Build an HTML5 Website with a Responsive Layout
    </a>
              </p>
        
            <p>
              Integer nibh libero, aliquet eu lorem tincidunt, finibus semper diam. In id tellus nulla. Fusce vitae erat eleifend, ullamcorper nunc non, dapibus neque. Duis consequat dignissim egestas. Maecenas sollicitudin feugiat tristique. Nulla nec mauris ornare nisl gravida egestas. Vestibulum condimentum sapien suscipit nisi vehicula dapibus. In hac habitasse platea dictumst.
            </p>
          </article>

          <aside id="sidebar">
            <div className="dark">
              <h3>What We Do</h3>
              <p>
                Sed euismod lacus bibendum fringilla mollis. Fusce pulvinar blandit sagittis. Donec orci nibh, posuere ac bibendum sed, tempor quis ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut augue mauris, laoreet at ex et, viverra hendrerit sapien. Fusce ultrices malesuada feugiat.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <footer>
        <p>Synthetic Systems, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default About;