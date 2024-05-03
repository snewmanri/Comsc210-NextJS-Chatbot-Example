import React from 'react';
import '../app/globals.css';
import Link from 'next/link';

const Services = () => {
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
                    <li><Link href="/about">About</Link></li>
                    <li className="current"><Link href="/services">Services</Link></li>
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
            <h1 class="page-title">Services</h1>
            <ul id="services">
              <li>
                <h3>Employee Training Chatbots</h3>
                <p>
                  In pharetra dolor quis diam ornare sodales. Pellentesque id mauris eu leo mattis ultricies a tincidunt enim. Nunc bibendum ac tellus ut dignissim. Fusce vulputate eros sed turpis venenatis dictum. Ut ultricies, libero id mattis volutpat, purus dui efficitur urna, ac aliquet erat mauris vel quam. Duis ultrices eros non velit suscipit, quis porta ex hendrerit.
                </p>
                <p>Data Wrangling Services</p>
              </li>
              <li>
                <h3>Custoemr Service Chatbots</h3>
                <p>
                  In pharetra dolor quis diam ornare sodales. Pellentesque id mauris eu leo mattis ultricies a tincidunt enim. Nunc bibendum ac tellus ut dignissim. Fusce vulputate eros sed turpis venenatis dictum. Ut ultricies, libero id mattis volutpat, purus dui efficitur urna, ac aliquet erat mauris vel quam. Duis ultrices eros non velit suscipit, quis porta ex hendrerit.
                </p>
                <p>Generative AI Help Systems</p>
              </li>
              <li>
                <h3>System Troubleshooting Chatbots</h3>
                <p>
                  In pharetra dolor quis diam ornare sodales. Pellentesque id mauris eu leo mattis ultricies a tincidunt enim. Nunc bibendum ac tellus ut dignissim. Fusce vulputate eros sed turpis venenatis dictum. Ut ultricies, libero id mattis volutpat, purus dui efficitur urna, ac aliquet erat mauris vel quam. Duis ultrices eros non velit suscipit, quis porta ex hendrerit.
                </p>
                <p>Cloud, On-Prem, and Hybrid Configurations</p>
              </li>
            </ul>
          </article>

          <aside id="sidebar">
            <div className="dark">
              <h3>Get A Quote</h3>
              <form className="quote">
                <div>
                  <label>Name</label><br />
                  <input type="text" placeholder="Name" />
                </div>
                <div>
                  <label>Email</label><br />
                  <input type="text" placeholder="Email Address" />
                </div>
                <div>
                  <label>Message</label><br />
                  <textarea placeholder="Message"></textarea>
                </div>
                <button className="button_1" type="submit">Send</button>
              </form>
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

export default Services;