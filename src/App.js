// import React, { useState, useEffect } from "react";
// import SignIn from "./Components/SignIn";
// import SignUp from "./Components/SignUp";
// import WelcomPage from "./Components/WelcomPage";
// import classes from "./App.module.css";
// import Box from "@mui/material/Box";
// import { GoogleLogin } from "@react-oauth/google";

// function App() {
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [user, setUser] = useState("");
//   const responseMessage = (response) => {
//     console.log(response);
//   };
//   const errorMessage = (error) => {
//     console.log(error);
//   };

//   return (
//     <div className={classes.body}>
//       {/* {!showSignUp ? (
//         <SignIn setShowSignUp={setShowSignUp} />
//       ) : (
//         <SignUp setShowSignUp={setShowSignUp} />
//       )} */}
//       <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
//     </div>
//   );
// }

// export default App;

// **you can access the token like this**
// const accessToken = gapi.auth.getToken().access_token;
// console.log(accessToken);

import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { GoogleLogout, useGoogleLogout } from "react-google-login";

const clientId =
  "439984794014-hbtnkhdm5hjmgs0ekffbroo8cs5af8in.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log("Login success: ", response);
  };

  const onFailure = (error) => {
    console.log("Login failed: ", error);
  };

  const onLogoutSuccess = () => {
    try {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(() => {
        console.log("User signed out.");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign in with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        prompt="select_account"
      />
      <GoogleLogout
        clientId={clientId}
        onLogoutSuccess={onLogoutSuccess}
        uxMode="redirect"
        redirectUri="http://localhost:3000"
      />
    </div>
  );
}

export default App;
