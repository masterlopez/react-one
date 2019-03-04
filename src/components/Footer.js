import React from "react";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>Javier Lopez {year}</footer>;
}
export default Footer;
