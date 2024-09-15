import { useState, React } from 'react';
import { Grid, Typography, Paper, List, ListItem, Avatar, Divider, ListItemText, ListItemIcon, TextField, Fab, Button } from "@mui/material";
import Navbar from './NavBar';
// import { LocalConvenienceStoreOutlined } from '@mui/icons-material';

export default function MeowMail ({currentUser, setCurrentUser}) {
    const [commentTxt, setCommentTxt] = useState("");
    console.log(currentUser)

    const { full_name, purrfile_picture, friends, sent_messages, received_messages } = currentUser

    // take current user and render catpanions list on left

    const handleMessageClick = (e) => {
        // find all messages between currentUser and friend.id
        console.log("clicked")
        //sort through all currentUser's sent and received messages 
        //display all filtered meow_mail sorted by meow_mail's id
    }

    // take each meow_mail and look for meow_mails with sender_id or recipient_id as currentUser.id || selected friend's id
    return (
        <div>
            <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
            <Grid container marginTop={10} marginBottom={5} align="center">
                <Grid item xs={12}>
                    <Typography variant="h5" className="header-message"> MeowMessages</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} sx={{ width: "100%", height: "80vh" }}>
                <Grid item xs={3} sx={{ borderRight: "1px solid #e0e0e0"}}>
                    <List>
                        <ListItem button key={full_name}>
                            <ListItemIcon>
                                <Avatar alt={full_name} src={purrfile_picture}/>
                            </ListItemIcon>
                            <ListItemText primary={full_name}></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    {/* <Grid item xs={12} style={{ padding: "10px" }}>
                        <TextField id="outlined-basic-email" label="Search" variant="outlined" fullWidth/>
                    </Grid> */}
                    <Divider />
                    <List>
                        {friends.map(friend => (
                            <Button onClick={handleMessageClick}>
                                <ListItem key={friend.id} >
                                    <ListItemIcon>
                                        <Avatar alt={friend.full_name} src={friend.purrfile_picture}  />
                                    </ListItemIcon>
                                    <ListItemText primary={friend.full_name}></ListItemText>
                                </ListItem>
                            </Button>
                        ))}
                    </List>
                </Grid>
            <Grid item xs={9}>
                <List xs={{ height: "70vh", overflowY: "auto" }}>
                    <ListItem key="1">
                            <Grid item xs={12}>
                        <Avatar alt="Connie" src="https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"/>
                        <Grid container>
                                <ListItemText align="right" primary="Hello! how are you?">
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="insert time">
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="2">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="left" primary="I'm doing awesome!">
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="left" secondary="insert time">
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <ListItem key="3">
                        <Grid container>
                            <Grid item xs={12}>
                                <ListItemText align="right" primary="That's cool.">
                                </ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                                <ListItemText align="right" secondary="insert time">
                                </ListItemText>
                            </Grid>
                        </Grid>
                    </ListItem>
                </List>
                <Divider />
                <Grid container style= {{ padding: "20px" }}>
                    <Grid item xs={11}>
                        <TextField id="oulined-basic-email"label="Type Something" fullWidth
                        value={commentTxt}
                        onChange={(e) => { setCommentTxt(e.target.value); }} />
                    </Grid>
                    <Grid xs={1} align="right">
                    <Fab 
                    color="success" 
                    aria-label="add">
                        Send
                    </Fab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>  
    )
}