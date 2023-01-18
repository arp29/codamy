import React from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { logo } from '../../utils/Constants';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  return(
    <Stack
      direction={"row"}
      alignItems={"center"}
      spacing={5}
      sx={{
        position:"sticky",
        background:"#000",
        justifyContent:"space-between",
        top:0,
        p:2
      }}
    >
      <Link to="/" style={{display:"flex", alignItems:'center'}}>
        <img src={logo} alt='logo' height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar