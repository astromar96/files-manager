"use client";
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteSelectedItems } from '@/app/reducers/items';


const FabContainer = styled(Fab)(({ theme }) => ({ 
    position:'fixed',
    bottom:90,
    right: theme.spacing(2),
 }));


export default function DeleteItem() {
    const { selected } = useSelector(state=> state.items);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(deleteSelectedItems())
    }

    return selected.length ? 
            <FabContainer color="error" aria-label="delete selected" onClick={handleClick}>
                <DeleteIcon />
            </FabContainer>:null
  ;
}
