"use client";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Navbar from './components/Navbar/Navbar';
import './globals.css';
import styled from '@emotion/styled';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import StoreProvider from './StoreProvider';
import CreateItem from './components/CreateItem/CreateItem';
import DeleteItem from './components/DeleteItem/DeleteItem';
import NewItemModal from './components/NewItemModal/NewItemModal';
import EditItem from './components/EditItem/EditItem';
import EmptyState from './components/EmptyState/EmptyState';


const actions = [
  { icon: <FolderIcon />, name: 'Create a new folder' , id: 'folder'},
  { icon: <InsertDriveFileIcon />, name: 'Create a new file', id: 'file' },
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
   const { children } = props;
   return (
     <html lang="en">
      <body className={roboto.variable}>
          <AppRouterCacheProvider>
          <StoreProvider>
           <ThemeProvider theme={theme}>
            <Main>
              <Navbar />
              {children}
             <CreateItem />
             <DeleteItem />
             <EditItem />
             <NewItemModal />
            </Main>
           </ThemeProvider>
          </StoreProvider>
          </AppRouterCacheProvider>
       </body>
     </html>
   );
 }
