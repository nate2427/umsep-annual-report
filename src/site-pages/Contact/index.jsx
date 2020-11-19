import { Button, Grid, Paper, Typography } from "@material-ui/core";

import TextField from '@material-ui/core/TextField';

import React from "react";

import gsap from "gsap";

import emailjs from "emailjs-com";

import Title from "../../shared/TitleComponent";


import { useStyles } from "./styles";

export default function StrategicPlan() {
  const classes = useStyles();
  const descriptionRef = React.useRef(null);

  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
   gsap.from(descriptionRef.current, {
     x: -1000,
     scale: 0,
     y: -1000,
     duration: .8,
     delay: .5
   })
  }, [])

  return (
    <Grid className={classes.container}>
      <Grid container className={classes.innerContainer}>
        {/* hero container */}
          <Grid container className={classes.heroContainer}>
            <Grid container className={classes.heroContainer2}>
              <Title title={'Contact'} subtitle={'Want to know more? Leave us a Message'} fontColor={"fontColorBlue"}/>
            </Grid>
            <Grid container alignItems='flex-start' justify='center' className={classes.mainContainer}>
              <div
                style={{width: '100%'}}
                ref={descriptionRef}

              >
                <Grid container justify="center">
                  <Grid
                    item
                    container
                    alignItems="center"
                    xs={10}
                    sm={7}
                    lg={5}
                    xl={3}
                    justify="center"
                  >
                    <Paper
                  
                      className={classes.descriptionContainer}
                      elevation={10}
                    >
                      <Grid container>
                      <Typography
                        className={classes.description}
                        variant="h1"
                        align="justify"
                      >
                        Email
                      </Typography>
                        <TextField type='email' fullWidth variant='outlined'  inputProps={{ style: {padding: "9.5px 14px"} }} value={email} onChange={(e) => setEmail(e.target.value)} />
                      <Typography
                        className={classes.descriptionMessage}
                        variant="h1"
                        align="justify"
                      >
                        Message
                      </Typography>
                        <TextField type='text' multiline rows={5} fullWidth variant='outlined'  inputProps={{ style: {padding: "1px"} }} value={message} onChange={(e) => setMessage(e.target.value)} />

                        <Grid style={{paddingTop: '1.5rem'}} container item xs={6} sm={4}> 
                          <Button style={{backgroundColor: '#02274C', color: '#fff', fontWeight: 'bold'}} fullWidth variant='contained' onClick={() => {
                            const service_id = 'gmail';
                            const template_id = "template_nbzma5x";
                            const user_id = "user_4Sd3PL1XIEE0y4imZuIR3";
                            // setLoading(true);
              
                            emailjs.send(service_id, template_id, {
                              reply_to: email,
                              message: message
                            }, user_id).then(function() {
                              alert('SUCCESS!');
                           }, function(error) {
                              alert('FAILED...check network and retry later');
                           });
                          }}>
                            Send
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
      </Grid>
    </Grid>
  );
}
