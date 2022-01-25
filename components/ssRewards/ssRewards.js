import React, { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Typography,
  Tooltip,
  IconButton,
  TextField,
  InputAdornment,
  Popper,
  Fade,
  Grid,
  Switch,
  Select,
  MenuItem
} from '@material-ui/core';
import classes from './ssRewards.module.css';

import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import RewardsTable from './ssRewardsTable.js'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { formatCurrency } from '../../utils';
import stores from '../../stores'
import { ACTIONS } from '../../stores/constants';

export default function ssRewards() {

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [ rewards, setRewards ] = useState([])
  const [ vestNFTs, setVestNFTs ] = useState([])
  const [ search, setSearch ] = useState('')
  const [ anchorEl, setAnchorEl ] = useState(null)
  const [ token, setToken ] = useState(null)
  const [ veToken, setVeToken ] = useState(null)
  const [ loading, setLoading ] = useState(false)

  const stableSwapUpdated = (rew) => {
    if(rew) {
      setRewards(rew)
    } else {
      setRewards(stores.stableSwapStore.getStore('rewards'))
    }
    const nfts = stores.stableSwapStore.getStore('vestNFTs')

    setVestNFTs(nfts)
    setVeToken(stores.stableSwapStore.getStore('veToken'))

    if(nfts && nfts.length > 0 && !token) {
      setToken(nfts[0])
      window.setTimeout(() => {
        console.log('are we here again')
        stores.dispatcher.dispatch({ type: ACTIONS.GET_REWARD_BALANCES, content: { tokenID: nfts[0].id } })
      })
    }

    forceUpdate()
  }

  useEffect(() => {
    setRewards(stores.stableSwapStore.getStore('rewards'))
    setVestNFTs(stores.stableSwapStore.getStore('vestNFTs'))

    stores.emitter.on(ACTIONS.UPDATED, stableSwapUpdated);
    stores.emitter.on(ACTIONS.REWARD_BALANCES_RETURNED, stableSwapUpdated);
    return () => {
      stores.emitter.removeListener(ACTIONS.UPDATED, stableSwapUpdated);
      stores.emitter.removeListener(ACTIONS.REWARD_BALANCES_RETURNED, stableSwapUpdated);
    };
  }, [token]);

  useEffect(() => {

    const claimReturned = () => {
      setLoading(false)
    }

    const claimAllReturned = () => {
      setLoading(false)
    }

    stores.emitter.on(ACTIONS.CLAIM_REWARD_RETURNED, claimReturned);
    stores.emitter.on(ACTIONS.CLAIM_ALL_REWARDS_RETURNED, claimAllReturned);
    return () => {
      stores.emitter.removeListener(ACTIONS.CLAIM_REWARD_RETURNED, claimReturned);
      stores.emitter.removeListener(ACTIONS.CLAIM_ALL_REWARDS_RETURNED, claimAllReturned);
    };
  }, [])

  const onSearchChanged = (event) => {
    setSearch(event.target.value);
  };

  const onClaimAll = () => {
    setLoading(true)
    stores.dispatcher.dispatch({ type: ACTIONS.CLAIM_ALL_REWARDS, content: { pairs: rewards, tokenID: token.id } })
  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (event) => {
    setToken(event.target.value);
    stores.dispatcher.dispatch({ type: ACTIONS.GET_REWARD_BALANCES, content: { tokenID: event.target.value.id } })
  }

  const open = Boolean(anchorEl);
  const id = open ? 'transitions-popper' : undefined;

  const renderMediumInput = (value, options) => {
    return (
      <div className={ classes.textField}>
        <div className={ classes.mediumInputContainer}>
          <div className={ classes.mediumInputAmount }>
            <Select
              fullWidth
              value={ value }
              onChange={handleChange}
              InputProps={{
                className: classes.mediumInput,
              }}
            >
              { options && options.map((option) => {
                return (
                  <MenuItem key={option.id} value={option}>
                    <div className={ classes.menuOption }>
                      <Typography>Token #{option.id}</Typography>
                      <div>
                        <Typography align='right' className={ classes.smallerText }>{ formatCurrency(option.lockValue) }</Typography>
                        <Typography color='textSecondary' className={ classes.smallerText }>{veToken?.symbol}</Typography>
                      </div>
                    </div>
                  </MenuItem>
                )
              })}
            </Select>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={ classes.container}>
      <div className={ classes.toolbarContainer }>
        <TextField
          className={classes.searchContainer}
          variant="outlined"
          fullWidth
          placeholder="ETH, CRV, ..."
          value={search}
          onChange={onSearchChanged}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Tooltip placement="top" title="Filter list">
          <IconButton onClick={handleClick} className={ classes.filterButton } aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>

        <Popper id={id} open={open} anchorEl={anchorEl} transition placement="bottom-end">
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <div className={classes.filterContainer}>
                <Typography className={classes.filterListTitle} variant="h5">List Filters</Typography>


                <Grid container spacing={0}>
                  <Grid item lg={9} className={classes.labelColumn}>
                    <Typography className={classes.filterLabel} variant="body1">Show Active</Typography>
                  </Grid>
                  <Grid item lg={3} className={classes.alignContentRight}>
                    <Switch
                      default
                      color="primary"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={0}>
                  <Grid item lg={9} className={classes.labelColumn}>
                    <Typography className={classes.filterLabel} variant="body1">Show Active Gauges</Typography>
                  </Grid>
                  <Grid item lg={3} className={classes.alignContentRight}>
                    <Switch
                      defaultChecked
                      color="primary"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={0}>
                  <Grid item lg={9} className={classes.labelColumn}>
                    <Typography className={classes.filterLabel} variant="body1">Show Stable Pools</Typography>
                  </Grid>
                  <Grid item lg={3} className={classes.alignContentRight}>
                    <Switch
                      defaultChecked
                      color="primary"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={0}>
                  <Grid item lg={9} className={classes.labelColumn}>
                    <Typography className={classes.filterLabel} variant="body1">Show Variable Pools</Typography>
                  </Grid>
                  <Grid item lg={3} className={classes.alignContentRight}>
                    <Switch
                      defaultChecked
                      color="primary"
                      inputProps={{ 'aria-label': 'checkbox with default color' }}
                    />
                  </Grid>
                </Grid>
              </div>
            </Fade>
          )}
        </Popper>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<AddCircleOutlineIcon />}
          size='large'
          className={ classes.buttonOverride }
          color='primary'
          onClick={ onClaimAll }
          disabled={ loading }
        >
          <Typography className={ classes.actionButtonText }>Claim All</Typography>
        </Button>
        <div className={ classes.tokenIDContainer }>
          { renderMediumInput(token, vestNFTs) }
        </div>
      </div>
      <RewardsTable rewards={rewards} vestNFTs={ vestNFTs } tokenID={ token?.id } />
    </div>
  );
}