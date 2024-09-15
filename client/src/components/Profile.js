import React, { useState, useEffect } from "react";
import PostForProfile from "./PostForProfile";
import CreatePost from "./CreatePost"
import { Avatar, Typography, Grid, Container} from "@mui/material";
import Navbar from "./NavBar";

export default function Profile ({ currentUser, setCurrentUser }) {
     //keep track of our logged in user's posts during this session
    const [posts, setPosts] = useState([])

    useEffect(() => {
      if (currentUser) {
        setPosts(currentUser.meow_posts)
      }
    }, [currentUser]);
    
    const { username, purrfile_picture, bio, full_name } = currentUser

    // callback functions for posts CRUD
    const addPost = (newPost) => setPosts(posts => [...posts, newPost])

    const deletePost = (id) => setPosts(current => current.filter(p => p.id !== id)) 

    const updatePost = (updatedPost) => setPosts(current => {
      return current.map(post => {
       if(post.id === updatedPost.id){
         return updatedPost
       } else {
         return post
       }
      })
    })

    return (
      <>
        <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        <main>
            <div>
              <Container maxwidth="sm" style={{ marginTop: "100px" }} display="center" alignItems='center' justifyContent='center'>
                  <Avatar src={purrfile_picture} sx={{ width: 150, height: 150 }} align="center" >
                  </Avatar>
                  <Typography variant="h5" style={{ marginTop: "15px" }}color="text.secondary" gutterBottom>
                  Username: {username}
                  </Typography>
                  <Typography variant="h6" style={{ marginTop: "10px" }} color="text.secondary">
                  Full Name: {full_name}
                    </Typography>
                  <Typography variant="h6" style={{ marginTop: "10px" }}color="text.secondary" paragraph>
                  Bio: {bio}
                  </Typography> 
              </Container>
            </div>
            <Container style={{ marginTop: "5%" }}>
                <Grid container spacing={1}>
                {posts?.map((post) =>( 
                    <PostForProfile key={post.id} post={post} deletePost={deletePost} currentUser={currentUser} updatePost={updatePost}/>
                ))}
                </Grid>
            </Container>
        </main>
        <CreatePost currentUser={currentUser} addPost={addPost} />
      </>
    )
}