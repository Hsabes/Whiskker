import React, { useState } from 'react'
import { useNavigate,  Link as RouterLink } from 'react-router-dom'
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SignupNavBar from "./SignupNavBar.js"

const defaultValues = {
  username: "",
  password: "",
};

export default function Login({ setCurrentUser}) {

  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false)
  
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formValues }),
    };

    fetch("/login", configObj)
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Incorrect Username or Pawssword. Try Again!');
    })
    .then((user) => {
      // set the state of the user
      setCurrentUser(user)
      // route user to their newsfeed
      navigate("/newsfeed")
    })
    .catch((error) => {
      alert(error)
    })
    setFormValues(defaultValues);
    };

  const handleClickShowPassword = () => {
    setShowPassword((currentState) => !currentState);
  };
  
  return (
    <>
    <Grid style={{ display: "inline-block", backgroundImage: "url(https://i.imgur.com/m8NVI9B.png)",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
    position: "absolute", 
    backgroundRepeat: "no-repeat", 
    }}>
      <SignupNavBar />
      <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
        <Grid style={{ width: "350px", height: "350px", margin: "auto", marginTop: "13%" }}>
          <form onSubmit={handleSubmit}>
            <Grid container 
              alignItems="center"
              direction="column"
              >
              <h2 style={{ marginTop: "5%" }}>Log in to Whiskker!</h2>
              <Grid item margin="auto" marginTop="5%" marginBottom="2.5%">
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                id="username"
                name="username"
                label="Username"
                type="text"
                value={formValues.username}
                onChange={handleChange}
                required
                />
              </Grid>
              <Grid item margin="auto" marginBottom="2.5%" >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="start">
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  id="password-input"
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  value={formValues.password || ""}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item margin="auto" marginBottom="2%">
                <Button type="submit" variant="contained" sx={{backgroundColor:"#33691e"}}>
                  Sign In
                </Button>
              </Grid>
              <h5>New to Whiskker?</h5>
              <Grid item margin="auto" marginTop="1%">
                <Button variant="contained" type="submit" sx={{backgroundColor:"#33691e"}} component={RouterLink} to="/signup">
                  Sign Up Instead
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
