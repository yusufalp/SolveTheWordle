import React from 'react';

const FooterLogo = ({ classes, logo, link }) => {
  return (
    <a href={link} className={classes} target="_blank" rel="noreferrer">
      <i className={`fa-brands fa-${logo}`}></i>
    </a>
  );
}

export default FooterLogo;