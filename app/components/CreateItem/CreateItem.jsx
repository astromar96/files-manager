"use client";

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import { addItem  } from '../../reducers/items';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '@/app/reducers/ui';

const actions = [
  { icon: <FolderIcon />, name: 'Create a new folder' , id: 'folder'},
  { icon: <InsertDriveFileIcon />, name: 'Create a new file', id: 'file' },
];

 export default function CreateItem(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const isUserSelectingItems = useSelector(state=> state.items.selected.length);

    const handleItemClicked = (id) => {
        dispatch(openModal({itemType:id}))
        setOpen(false);
    }
   return !isUserSelectingItems && (

        <SpeedDial
            ariaLabel="SpeedDial controlled open example"
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
        >
        {actions.map((action) => (
            <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={()=> handleItemClicked(action.id)}
            />
        ))}
        </SpeedDial>
   );
 }
