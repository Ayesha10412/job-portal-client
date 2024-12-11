import React from "react";
import logo from "/src/assets/job_application_logo.png";
const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-20">
      <aside>
        <img src={logo} alt="" />
        <p className="text-2xl font-bold">
          Job Portal Ltd.
          <br />
          <span className="mt-1 text-gray-500 text-sm">
            {" "}
            Providing reliable job tech since 1992
          </span>
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
