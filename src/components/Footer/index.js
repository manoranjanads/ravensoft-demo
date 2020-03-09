import React from "react";
import config from "../../../config";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content has-text-centered">
          <p>{config.copyright}</p>
          <p>
            Developed by <a href="mailto://manoranjana@ravensoft.tech">MR</a> in{" "}
            <a href="https://www.ravensoft.tech" target="_blank">
              Ravensoft
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/MRGitHub94/ravensoft-demo"
              target="_blank"
            >
              Github Repository
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
