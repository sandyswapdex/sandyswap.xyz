import { Link, Paper, Typography } from "@material-ui/core";
import Setup from "./setup";
import classes from "./ssSwap.module.css";
import { useRouter } from "next/router";

function Swap() {
  const router = useRouter();

  return (
    <div className={classes.newSwapContainer}>
      <Paper className={classes.miningContainer}>
        <Typography variant="h2" className={classes.miningContainerh2}>
          Protocol is in Bootstrap mode 🎉
        </Typography>
        <Typography variant="body1" className={classes.miningContainerBody}>
          <Link onClick={() => router.push("/liquidity")}>
            Supply liquidity
          </Link>{" "}
          and pre-mine SANDY as we bootstrap the protocol.
        </Typography>
        <Typography variant="body1" className={classes.miningContainerBody}>
          Read our{" "}
          <Link href="https://docs.sandyswap.xyz/pre-mine-sandy">
            documentation
          </Link>{" "}
          to learn more about how pre-mining works.
        </Typography>
      </Paper>
      <Paper elevation={0} className={classes.swapContainer}>
        <Setup />
      </Paper>
    </div>
  );
}

export default Swap;
