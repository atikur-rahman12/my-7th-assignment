import React from "react";
import FooterLogo from "../../../assets/logo-xl.png";
import InstagramIcon from "../../../assets/instagram.png";
import FacebookIcon from "../../../assets/facebook.png";
import TwitterIcon from "../../../assets/twitter.png";

const Footer = () => {
  return (
    <div className="bg-[#244D3F]">
      <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content pt-15 px-15">
        <aside>
          <img src={FooterLogo} alt="Error" />
          <p className="text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>
        </aside>
        <nav>
          <h1 className="text-xl font-medium mb-3">Social Links</h1>
          <div className="grid grid-flow-col gap-4">
            <a href="#">
              {" "}
              <img src={InstagramIcon} alt="Error" />{" "}
            </a>
            <a href="#">
              {" "}
              <img src={FacebookIcon} alt="Error" />{" "}
            </a>
            <a href="#">
              {" "}
              <img src={TwitterIcon} alt="Error" />{" "}
            </a>
          </div>
        </nav>
        <hr className="container mx-auto border-[-1] border-gray-500" />
      </footer>
      <footer className="footer sm:footer-horizontal bg-[#244D3F] text-gray-400 items-center py-6 px-15 container mx-auto">
        <p>Copyright © {new Date().getFullYear()} KeenKeeper - All right reserved</p>
        <nav className="grid-flow-col gap-8 md:place-self-center md:justify-self-end">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <p>Cookies</p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
