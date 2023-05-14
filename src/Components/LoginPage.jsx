import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import Button from "@material-ui/core/Button";
import Box from "@mui/material/Box";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle login logic here
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
          height: 400,
          justifyContent: "center",
        }}
      >
        <h1 className="text">Sign in</h1>
        <p className="text-mute">
          New to Automation ?{" "}
          <a href="#" className="link">
            Sign up for free
          </a>
        </p>

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
        <a href="#" className="link">
          Forget password?
        </a>
        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
        <Button type="submit" variant="outlined" color="primary">
          Login
        </Button>
      </Box>
    </form>
  );
};

export default LoginPage;
