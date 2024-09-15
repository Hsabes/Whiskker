import { useState, useEffect } from "react";
import { Box, Stack, Link, Grid } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PostForNewsFeed from './PostForNewsFeed.js';
import Navbar from "./NavBar.js";

export default function NewsFeed({currentUser, setCurrentUser}) {
  const [allPosts, setAllPosts] = useState([])
  const [errors, setErrors] = useState([]);

  console.log(currentUser)

  // requesting all meow_posts
  useEffect(() => {
    fetch("/meow_posts")
    .then(res => {
      if(res.ok){
          res.json().then(posts => {
              setAllPosts(posts)
          })
      } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
      }
  })
  }, []);
  
  // for each friend's user_id, map through allPosts and filter out the ones that are matching the friend's user_id
  function friendsPosts() {
    let idsArray = []
    const pluck = (arr, key) => arr.map(i => i[key]);
    const friendIds = pluck(currentUser.friends, 'id')
    idsArray = [...friendIds, currentUser.id]

    const postsArray = []
    for ( let i = 0; i < idsArray.length; i++ ) {
      const eachPostsArray = allPosts.filter(post => post.user.id === idsArray[i])
      postsArray.push(eachPostsArray)
    }
    return postsArray.flat()
  }

  return (
    <>
      <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>   
        <Box bgcolor="white" flex={4} p={5}>
          <Stack alignItems="center">
            {currentUser.friends.length > 0 ? friendsPosts().sort((a, b) => b.id - a.id)
            ?.map(post => (
              <PostForNewsFeed key={post.id} post={post} currentUser={currentUser}/>
            )) 
            : 
            <Box container style={{ display: "inline-block" }}>
              <Link component={RouterLink} to="/mycatpanions">Add some catpanions to view meowposts!</Link>
            </Box>
            }
          </Stack>
        </Box>
    </>
  );
}
