import React from "react";

import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=806a8a822aaf43c2901159dab326e0f8&response_type=code&redirect_uri=https://dulcet-heliotrope-7e8283.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login() {
  return (
    <Container
      fluid={true}
      className="bg-dark text-center d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row h-100">
        <div
          className="display-3 text-light text-center"
          style={{ padding: "5rem" }}
        >
          Welcome to my React Spotify Player
        </div>
        <div className="display-6 text-light text-center">
          By: Matthew Salamack
        </div>
        <h6
          className=" blockquote-footer text-light text-center "
          style={{ margin: "2rem 0rem" }}
        >
          Huge Thanks to Web Dev Simplified for the guide on how to use the
          Spotify API
        </h6>
        <h6 className="text-light text-center " style={{ margin: "2rem 0rem" }}>
          Note: I could not get a quota extension for the Spotify API without a
          significant user base. So this will not play music for users who are
          not added to the whitelist. But I ensure it works!
        </h6>
        <a
          className="col-sm-12 mx-auto w-25 btn btn-success btn-lg "
          style={{ margin: "2rem " }}
          href={AUTH_URL}
        >
          Login With Spotify
        </a>
      </div>
    </Container>
  );
}

export default Login;
