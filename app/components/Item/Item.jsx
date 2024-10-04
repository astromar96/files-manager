import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import { useState } from 'react';


const FileContainer = styled(Grid)(({ theme  , selected}) => ({
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    // border: '2px solid #1976d2',
    userSelect: 'none',
    alignItems: 'center',
    padding: '10px 20px',
    borderRadius: theme.spacing(2),
    // cursor: 'pointer',
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
        '[contentEditable="true"]': {
            cursor: 'text',
        },
        '&:focus': {
            outline: 'none',
            border:`${state === 'error' ? '0.5px solid #ff1744' : '0.5px solid #1565c0'}`,
            borderRadius: theme.spacing(0.5),
            color:`${state === 'error' ? '#ff1744' : 'black'}`,
        }
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

    const [selected, setSelected] = useState(false);
    const handleClick = () => { 
        setSelected(!selected);
    }
    const handleUnselect = () => {
        if(selected) {
            setSelected(false);
        }
    }
    return (
        <FileContainer selected={selected} size={{ xs: 6, md: 3, lg: 2 }} onClick={handleUnselect}>
            <IconContainer  onClick={handleClick}>
                {type === 'folder' ? <Folder color='info' /> : <File color='disabled' />}
            </IconContainer>
        <Name state={''} contentEditable={!selected} align='center' onInput={(e)=>{
          console.log(e.target.innerText);
        }}
        onBlur={(e)=>{
          console.log(e.target.innerText, 'blur');
        }}
        >
         {name}
        </Name>
      </FileContainer>
    )
  }