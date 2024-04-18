import React from 'react';
import './Homepage.css';
function Homepage() {
  return (
    
    <div className="homepage">
      <header>
        <h1 class="heading_name">Welcome to XYZ Medical Clinic</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section id="about">
        <h2>About Us</h2>
        <p>Welcome to XYZ Medical Clinic, where we prioritize your health and well-being. Our clinic is dedicated to providing exceptional medical care in a compassionate and comfortable environment.</p>
      </section>
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>General Medicine</li>
          <li>Pediatrics</li>
          <li>Obstetrics & Gynecology</li>
          <li>Cardiology</li>
          <li>Orthopedics</li>
          <li>Dermatology</li>
          <li>And more...</li>
        </ul>
      </section>
      <section id="doctors">
        <h2>Meet Our Doctors</h2>
        <div className="doctor-profile">
          <img src="doctor1.jpg" alt="Doctor Name" />
          <h3>Dr. John Doe</h3>
          <p>Specializes in Cardiology</p>
        </div>
        <div className="doctor-profile">
          <img src="doctor2.jpg" alt="Doctor Name" />
          <h3>Dr. Jane Smith</h3>
          <p>Specializes in Pediatrics</p>
        </div>
        {/* Add more doctor profiles as needed */}
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or would like to schedule an appointment, please don't hesitate to contact us:</p>
        <address>
          XYZ Medical Clinic<br />
          123 Main Street<br />
          City, State, ZIP<br />
          Phone: 555-555-5555<br />
          Email: info@xyzclinic.com
        </address>
      </section>
      <footer>
        <p>&copy; 2024 XYZ Medical Clinic. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
