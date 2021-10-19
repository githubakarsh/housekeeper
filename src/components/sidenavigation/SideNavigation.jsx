import React from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import useStyles from './snStyles';
import { useHistory } from 'react-router';

const SideNavigation = () => {
  const classes = useStyles();
  const history = useHistory();
  
  const navigateTo = (path) => {
    history.push(path);
  }

  return (
    <Paper className={classes.root}>
      <MenuList>
        <MenuItem>
            <a onClick={() => navigateTo('/')}>Assets</a>
        </MenuItem>
        <MenuItem>
          <a  onClick={() => navigateTo("/comparer")}>Comparer</a>
        </MenuItem>
        <MenuItem>
          <a onClick={() => navigateTo("/emergency-contact")}>Emergency Contact</a>
        </MenuItem>
      </MenuList>
    </Paper>
  );
}

export default SideNavigation;
