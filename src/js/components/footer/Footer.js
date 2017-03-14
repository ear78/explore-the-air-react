import React from "react";

import "./footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <footer>
          <div class="footer-line"></div>
          <div class="social-icons">
              <a href=""><i class="fa fa-facebook-f" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-tree" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-google-plus" aria-hidden="true"></i></a>
              <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
          <p>Designed & Built By: Elliot Richardson</p>
      </footer>
    );
  }
}
