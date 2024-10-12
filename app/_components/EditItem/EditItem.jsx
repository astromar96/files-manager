"use client";
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { deleteSelectedItems } from '@/app/reducers/items';
import { openModal } from '@/app/reducers/ui';
import { use } from 'react';


const FabContainer = styled(Fab)(({ theme }) => ({ 
    position:'fixed',
    bottom: 160,
    right: theme.spacing(2),
 }));


export default function EditItem() {
    const { selected } = useSelector(state=> state.items);
    const { items } = useSelector(state=> state.items);
    const dispatch = useDispatch();
    const handleClick = () => {
        let payload = {
          mode:'edit',
          selectedItem: items[selected[0]]
        }
        dispatch(openModal(payload))
    }

    return selected.length === 1 ? 
            <FabContainer color="success" aria-label="delete selected" onClick={handleClick}>
                <EditIcon />
            </FabContainer>:null
  ;
}
