import React from 'react'
import { Stack } from '@mui/material'
import { Categories } from '../../utils/Constants'
import '../SideBar/Styles.css'

const selectedCategory='Home';
const SideBar = () => (
    <Stack
    sx={{
      overflowY: 'auto',
      height:{sx:'auto', md:'92vh'},
      flexDirection:{sx:'row',md:'column'}
    }}
    >
    {Categories.map((category)=>(
      <button
      className='category-btn'
      style={{
        background: category.name===selectedCategory && 'red'
      }}
      key={category.name}
      >
        <span 
        style={{
          opacity: category.name==selectedCategory ? '1' : '0.8'
        }}
        >{category.name}</span>
      </button>
    ))}
    </Stack>
  )

export default SideBar