import React from "react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-neutral text-neutral-content  px-2">
      <footer className="footer p-10 container mx-auto">
        <nav>
          <header className="footer-title">Help</header>
          <a className="link link-hover">Contact Support</a>
          <a className="link link-hover">Guidance</a>
          <a className="link link-hover">FAQs</a>
          <a className="link link-hover">Video Tutorials</a>
        </nav>
        <nav>
          <header className="footer-title">Link</header>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
          <header className="footer-title">Social</header>
          <div className="grid grid-flow-col gap-4">
            <a>
              <FaTwitter size={24} />
            </a>
            <a>
              <FaYoutube size={24} />
            </a>
            <a>
              <FaFacebook size={24} />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="container mx-auto footer bg-neutral text-neutral-content px-10 py-4 border-t  border-base-300 footer-center shadow">
        <aside>
          <p>Copyright © 2024 - All right reserved by DCZ Zen Ltd</p>
        </aside>
      </footer>
    </section>
  );
};

export default Footer;
