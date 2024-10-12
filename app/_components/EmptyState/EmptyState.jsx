"use client";
import { styled } from '@mui/material/styles';
import FolderOffIcon from '@mui/icons-material/FolderOff';
import { Box, Typography } from '@mui/material';

const BoxContainer = styled(Box)(({ theme }) => ({ 
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    height:'80vh',
    width:'100%',
 }));


export default function EmptyState() {
    return   <BoxContainer>
                <FolderOffIcon fontSize='large'/>
                <Typography sx={{
                    fontWeight: 500,
                }} variant='h6'>No items to display</Typography>
            </BoxContainer>
  ;
}
