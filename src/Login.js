import React from "react";

import { Container } from "react-bootstrap";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=806a8a822aaf43c2901159dab326e0f8&response_type=code&redirect_uri=https://dulcet-heliotrope-7e8283.netlify.app/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

function Login() {
  return (
    <Container
      fluid={true}
      className="bg-dark text-center row h-100"
      style={{ minHeight: "100vh" }}
    >
      <div className="m-auto text-center display-3 text-light">
        Welcome to my React Spotify Player
      </div>
      <a
        className="m-auto w-25 btn btn-success btn-lg btn-block"
        href={AUTH_URL}
      >
        Login With Spotify
      </a>
    </Container>
  );
}

export default Login;
