"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import './globals.css';
import styled from '@emotion/styled';

import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { useState } from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';

const actions = [
  { icon: <FolderIcon />, name: 'Create a new folder' },
  { icon: <InsertDriveFileIcon />, name: 'Create a new file' },
];


const roboto = Roboto({
 weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const Main = styled('main')(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  flexDirection: 'column',
}));

 export default function RootLayout(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

   const { children } = props;
   return (
     <html lang="en">
      <body className={roboto.variable}>
          <AppRouterCacheProvider>
           <ThemeProvider theme={theme}>
            <Main>
              <Navbar />
              {children}
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
                    onClick={handleClose}
                  />
                ))}
              </SpeedDial>
            </Main>
           </ThemeProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
