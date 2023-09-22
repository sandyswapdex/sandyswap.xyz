import {
  Typography,
  Button,
  Paper,
  SvgIcon,
  Grid,
  Avatar,
} from "@material-ui/core";

import classes from "./home.module.css";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function Home({ changeTheme }) {
  function handleNavigate(route) {
    router.push(route);
  }

  const router = useRouter();

  return (
    <div className={classes.ffContainer}>
      <div id="info" className={classes.contentContainerFullTwo}>
        <div className={classes.floatingSphere}></div>

        <Grid container spacing={3} className={classes.homeContentMain}>
          {/* <Grid item lg={12} md={12} sm={12} xs={12}>
            <img className={classes.logo} src="/images/logo.png" />
          </Grid> */}
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.secTitle}>
              Welcome to SandySwap
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" className={classes.mainDescription}>
              Sandy Swap is the first ve(3,3) DEX on Polygon zkEVM with low
              fees, near 0 slippage on correlated assets and a strong focus on
              secondary markets for tokenized locks as NFTs (veToken = lpNFTs).
            </Typography>
            <Typography variant="body2" className={classes.secDescription}>
              Bribe, Vote and Lock SANDY tokens all in one place.
            </Typography>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Button
              className={classes.buttonEnterSingle}
              onClick={() => router.push("/swap")}
            >
              Enter App
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Button
              target="_blank"
              className={classes.buttonEnterSingle}
              onClick={() => router.push("/liquidity")}
            >
              Pre-Mine SANDY
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Button
              target="_blank"
              className={classes.buttonEnterTwo}
              href="https://docs.sandyswap.xyz/"
            >
              Read Docs
            </Button>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Button
              target="_blank"
              className={classes.buttonEnterTwo}
              href="https://discord.sandyswap.xyz/"
            >
              Join Discord
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
