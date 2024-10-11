"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';
import Item  from './components/Item/Item';
import { useDispatch, useSelector } from 'react-redux';
import { ClickAwayListener } from '@mui/base';
import EmptyState from './components/EmptyState/EmptyState';
import { currentItemsSelector } from './reducers/ui';
import { unselect } from './reducers/items';


const Container = styled(Box)(({ theme }) => ({ 
  padding: theme.spacing(2),
  flex: 1,
  flexGrow: 1,
  backgroundColor: '#f5f5f5',
}));


export default function Home() {
  const items  = useSelector(currentItemsSelector);
  const dispatch = useDispatch();
  const handleClickAway = () => {
    dispatch(unselect())
  }

  return (
    <Container sx={{ flexGrow: 1 }}>
      <ClickAwayListener onClickAway={handleClickAway}>
      <Grid container spacing={2}>
      {Object.values(items).length ? items?.map(item => 
              <Item key={item.id} name={item.name} type={item.type} id={item.id} />
          ) :<EmptyState />
      }
      </Grid>
      </ClickAwayListener>
  </Container>
  );
}
