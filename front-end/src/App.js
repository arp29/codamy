import React from 'react'
import { Navbar, Topics, articleDetails, SearchFeed, Feed, Footer } from './Components'
import Box from '@mui/material/Box';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return(
    <Box sx={{background:'#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/article/:id' element={<articleDetails/>}/>
        <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
      </Routes>
    </Box>
  );
}

export default App