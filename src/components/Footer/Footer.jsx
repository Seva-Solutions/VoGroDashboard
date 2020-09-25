import React from "react";
import { Container } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container>
          <p className="ml-auto">
            &copy; {1900 + new Date().getYear()}, Nandu 
          </p>
        </Container>
      </footer>
    );
  }
}

export default Footer;
