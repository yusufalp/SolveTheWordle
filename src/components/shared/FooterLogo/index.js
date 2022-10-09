import React from 'react';

import './style.css';

const FooterLogo = ({ classes, logo, link }) => {
  return (
    <a href={link} className={classes} target="_blank" rel="noreferrer">
      <i className={`fa-brands fa-${logo}`} data-testid="icon-element"></i>
    </a>
  );
}

export default FooterLogo;