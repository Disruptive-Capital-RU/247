import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          247
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/wellness" className="nav-link">
              Wellness
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/medical" className="nav-link">
              Medical
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/events" className="nav-link">
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
