import React from "react";
import "../Styles/Footer.css"
const Footer = () => (
    <footer className="site-footer">
        <div>
            <p>
                <ul class="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Contribute</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
                <a href="https://www.facebook.com">
                    <img class="social" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_gray-512.png" alt="facebook"></img> </a>
                <a href="https://twitter.com/">
                    <img class="social" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_gray-512.png" alt="twitter"></img>
                </a>
                <a href="https://www.instagram.com">
                    <img class="social" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/instagram_circle_gray-512.png" alt="instagram"></img>
                </a>
                <br />
                <br />
                <br />
                <p class="copyright-text">Copyright &copy; 2021All Rights Reserved by CSRC</p>
            </p>
        </div>
    </footer>
);
export default Footer;