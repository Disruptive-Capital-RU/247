import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>247 Concierge</h3>
          <p>Exclusive services for discerning clients</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/wellness">Wellness</Link>
            </li>
            <li>
              <Link href="/medical">Medical</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@247concierge.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} 247 Concierge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
