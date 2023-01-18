import React from 'react'
import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <Paper
        elevation={1}
        component="form"
        onSubmit={()=>{}}
        sx={{
            borderRadius:20,
            pl:2,
            border: '1px solid blue',
            mr:{sm:5},
            boxShadow:'none'
        }}
    >
      <input
      className='search-bar'
      placeholder='Search here...'
      value=""
      onChange={()=>{}}
      >
      </input>
      <IconButton type='submit'
      sx={{p:'10px', color:'black'}}>
        <SearchIcon/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar