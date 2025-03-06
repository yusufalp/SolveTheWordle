import React, { useMemo } from "react";

import FooterLogo from "../FooterLogo";
import { SOCIAL_MEDIA } from "../../../constants/constants";

function Footer() {
  const renderedFooter = useMemo(() => {
    return SOCIAL_MEDIA.map((social) => (
      <FooterLogo
        key={social.id}
        className={social.className}
        logo={social.id}
        link={social.link}
      />
    ));
  }, []);

  return <footer className="social-footer">{renderedFooter}</footer>;
}

export default Footer;
