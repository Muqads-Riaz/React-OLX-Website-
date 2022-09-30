import * as React from 'react';
import Data from "./Data";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './card';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ResponsiveGrid() {
  return (

<Grid container lg={12} item  spacing = {2}>
{Data.map((item)=>{
return <Grid item lg = {3} sm = {6} xs = {12}>
   <Item><MediaCard img = {item.img} text = {item.text} address = {item.address} Price = {item.Price}/></Item> 
</Grid>
})}

</Grid>
  );
}
export default ResponsiveGrid;