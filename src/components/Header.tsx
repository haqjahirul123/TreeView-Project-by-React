import React from "react"
import {Navbar ,Container } from "react-bootstrap"

const Header =()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand >
                  <img
                    alt=""
                    src={process.env.PUBLIC_URL + "QRatify_logo.png"}
                    width="250"
                    height="60"
                    className="d-inline-block align-top"
                  />
                </Navbar.Brand>
              </Container>
            </Navbar>
        </div>   
    ) 
}

export default Header