import React, { useState, useEffect } from "react";
import { Router, Link } from "wouter";

// Import and apply CSS stylesheet
import "./styles/styles.css";

// Where all of our pages come from
import PageRouter from "./components/router.jsx";
import Navbar from './components/navbar.jsx';

// Home function that is reflected across the site
export default function Home() {
  return (
    <Router>
      <main role="main" className="wrapper">
        <div className="content">
          <PageRouter />
        </div>
      </main>
      <Navbar />
    </Router>
  );
}
