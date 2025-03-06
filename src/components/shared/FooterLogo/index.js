import React from "react";

import "./style.css";

const FooterLogo = ({ className, logo, link }) => {
  return (
    <a
      href={link}
      className={`${className} logo`}
      target="_blank"
      rel="noreferrer"
    >
      <i className={`fa-brands fa-${logo}`} data-testid="icon-element"></i>
    </a>
  );
};

export default FooterLogo;
