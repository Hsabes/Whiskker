import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Grid, TextField, Button, InputAdornment } from "@mui/material"
import { IoLogoOctocat } from 'react-icons/io';
import { GiCat } from 'react-icons/gi';
import Navbar from "./NavBar.js";

function MyAccount({currentUser, setCurrentUser}) {
    const [updateUser, setUpdateUser] = useState({
      bio: currentUser.bio,
      friends: [currentUser.friends],
      full_name: currentUser.full_name,
      meow_posts: [currentUser.meow_posts],
      purrfile_picture: currentUser.purrfile_picture,
      username: currentUser.username
    });

    const navigate = useNavigate()
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setUpdateUser({
        ...updateUser,
        [name]: value,
      });
    };
    // console.log(formValues)

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({...updateUser})
        };
        fetch(`/users/${currentUser.id}`, configObj)
          .then((res) => res.json())
          .then((data) => {
            setCurrentUser(data)
            navigate('/me')
          } 
        )
        setUpdateUser(updateUser);
      };
    
    return (
        <>
        <Grid style={{ display: "inline-block", backgroundImage: `url(https://i.imgur.com/OyMROnz.jpg)`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed-right",
        width: "100%",
        height: "100%",
        position: "absolute", 
        backgroundRepeat: "no-repeat",
        }}>
          <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
          <Grid style={{ display: "inline-block", width: "100%", height: "100%" }}>
            <Grid style={{ width: "300px", height: "300px", margin: "auto", marginTop: "13%"}}>
            <form onSubmit={handleSubmit}>
            <Grid container 
            alignItems="center"
            justify="center"
            direction="column"
            margin="auto">
              <h3 style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>Edit My Whiskkers Account</h3>
              <Grid item margin="auto" marginTop="5%" marginBottom="2%">
              <TextField
                    InputLabelProps={{ shrink: true }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <GiCat/>
                        </InputAdornment>
                      ),
                    }}
                    id="full_name"
                    name="full_name"
                    label="Full Name"
                    type="text"
                    value={updateUser.full_name}
                    onChange={handleChange}
                    
                  />
              </Grid>
              <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoLogoOctocat />
                      </InputAdornment>
                    ),
                  }}
                  id="username"
                  name="username"
                  label="Username"
                  type="text"
                  value={updateUser.username}
                  onChange={handleChange}
                  
                />
              </Grid>
              <Grid item margin="auto" marginBottom="2%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <InsertPhotoIcon /> */}
                      <GiCat/>
                    </InputAdornment>
                  ),
                }}
                id="purrfile_picture"
                name="purrfile_picture"
                label="Purrfile Picture"
                type="text"
                value={updateUser.purrfile_picture}
                onChange={handleChange}
                
              />
            </Grid>
             <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }} >
                <TextField
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IoLogoOctocat />
                      </InputAdornment>
                    ),
                  }}
                  id="bio"
                  name="bio"
                  label="Bio"
                  type="text"
                  value={updateUser.bio}
                  onChange={handleChange}
                  
                />
              </Grid>
            <Grid item margin="auto" style={{ marginTop: "2.5%", marginBottom: "2.5%" }}>
              <Button type="submit" variant="contained" sx={{backgroundColor:"#33691e"}}
                onSubmit={handleSubmit}>
                EDIT
              </Button>
            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
          
    </>
  )
}

export default MyAccount