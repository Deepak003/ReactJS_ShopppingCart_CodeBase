import React, { Component } from "react";

const Footer = props => {
  return (
    <footer>
      <p className="footer-links">
        <a
          href="https://github.com/Deepak003/ShopppingCart"
          target="_blank"
        >
          View Source on Github
        </a>
        <span> / </span>
        <a href="mailto:contact@contact.in" target="_blank">
          Need any help?
        </a>
        <span> / </span>
        <a href="https://twitter.com/" target="_blank">
          Say Hi on Twitter
        </a>
        <span> / </span>
        <a href="" target="_blank">
          Read My Blog
        </a>
      </p>
      <p>
        &copy; 2019 <strong>e-Shopping</strong> - Organic Green Store
      </p>
    </footer>
  );
};

export default Footer;
