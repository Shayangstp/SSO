import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Button, Box, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";

const SignUp = ({ setShowSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
  };

  const signInHandler = () => {
    setShowSignUp(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        position="relative"
        sx={{
          width: 400,
          height: 500,
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Sign up
        </Typography>
        <Typography variant="caption" className={classes.signUpText}>
          Already have account ?
          <Link to="/" className={classes.signUplink} onClick={signInHandler}>
            Sign in
          </Link>
        </Typography>

        <TextField
          label="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          size="small"
          InputLabelProps={{
            style: { fontSize: "14px", marginBottom: "14px" },
          }}
          variant="standard"
          margin="normal"
        />
        <TextField
          variant="standard"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          sx={{
            marginBottom: "30px",
          }}
          InputLabelProps={{
            style: { fontSize: "14px", marginBottom: "14px" },
          }}
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
        <Button
          type="submit"
          variant="outlined"
          color="primary"
          style={{ margin: "16px 0" }}
        >
          <GoogleIcon
            className={classes.googleIcon}
            style={{ marginRight: "10px" }}
          />
          Sign up with your Google account
        </Button>
      </Box>
    </form>
  );
};

export default SignUp;
