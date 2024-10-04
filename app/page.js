"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import { styled } from '@mui/material/styles';
import Item  from './components/Item/Item';





const Container = styled(Box)(({ theme }) => ({ 
  padding: theme.spacing(2),
  flex: 1,
  flexGrow: 1,
  backgroundColor: '#f5f5f5',
 }));


export default function Home() {
  return (
    <Container sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Item name={'New Folder'} type={'folder'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
      <Item name={'New File'} type={'file'}/>
    </Grid>
  </Container>
  );
}
