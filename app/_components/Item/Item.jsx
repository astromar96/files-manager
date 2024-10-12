"use client";
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelect } from '@/app/reducers/items';
import { useRouter } from 'next/navigation';


const FileContainer = styled(Grid)(({ theme  , selected}) => ({
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    userSelect: 'none',
    alignItems: 'center',
    padding: '10px 20px',
    borderRadius: theme.spacing(2),
    backgroundColor: selected ? '#1876d2' : 'transparent',
    color: selected ? 'white' : 'black',
    '& svg': {
        fill: selected ? 'white' : '#bdbdbd',
    },
  }));
  
  const ItemIconStyles = {
    width: '160px',
    height: '160px',
    cursor: 'pointer',
  }
  const Folder = styled(FolderIcon)(({ theme }) => ({...ItemIconStyles}));
  
  const File = styled(InsertDriveFileIcon)(({ theme }) => ({...ItemIconStyles}));
  
  const Name = styled(Typography)`
    ${({ theme , state }) => ({
        width:'100%',
        outile:'none',
        border:'0.5px solid transparent',
        padding: theme.spacing(1),
        textAlign: 'center',
    })}
  `

  const IconContainer = styled(Box)(({ theme  }) => ({
    padding: theme.spacing(1),
    width: '100%',
    height: 160,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }));

  export default function Item({type, name , id}) { 
    const router = useRouter();
    const dispatch = useDispatch();
    const selected = useSelector(state => state.items.selected.includes(id));
    const handleClick = () => { 
        dispatch(toggleSelect(id));
    }
    const handleDoubleClick = () => {
        if(type === 'folder') {
           router.push(`?id=${id}`);
        }
    }

    return (
        <FileContainer selected={selected} size={{ xs: 6, md: 3, lg: 2 }} onDoubleClick={handleDoubleClick}>
            <IconContainer  onClick={handleClick}>
                {type === 'folder' ? <Folder color='info' /> : <File color='disabled' />}
            </IconContainer>
            <Name>
            {name}
            </Name>
      </FileContainer>
    )
  }