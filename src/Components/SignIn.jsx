import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment, ThemeProvider } from "@mui/material";
import { Button, Box, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import classes from "./SignIn.module.css";
import { createMuiTheme } from "@material-ui/core/styles";

const SignIn = ({ showSignUp, setShowSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const theme = createMuiTheme({
    palette: {
      success: {
        main: "#00C853",
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
  };

  const signUpHandler = () => {
    setShowSignUp(true);
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
          Sign in
        </Typography>
        <Typography variant="caption" className={classes.signUpText}>
          New to Automation ?{" "}
          <Link to="/" className={classes.signUplink} onClick={signUpHandler}>
            Sign up for free
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
        <Link to="/" className={classes.forgetpass}>
          Forget password?
        </Link>
        <Button type="submit" variant="contained" color="success">
          Login
        </Button>
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            variant="outlined"
            color="error"
            style={{ margin: "16px 0" }}
          >
            <GoogleIcon
              className={classes.googleIcon}
              style={{ marginRight: "10px" }}
            />
            Continue with your Google account
          </Button>
        </ThemeProvider>
      </Box>
    </form>
  );
};

export default SignIn;
