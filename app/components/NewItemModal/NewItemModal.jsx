import {useEffect,useState , Fragment, useMemo} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, currentItemsSelector } from '@/app/reducers/ui';
import { addItem, editItem } from '@/app/reducers/items';

export default function NewItemModal() {

    const isModalOpen = useSelector(state => state.ui.isModalOpen)
    const [hasError, setHasError] = useState(false);
    const type = useSelector(state => state.ui.itemType[0]?.toLocaleUpperCase() + state.ui.itemType.slice(1))
    const itemType = useSelector(state => state.ui.itemType);
    const selectedItem = useSelector(state => state.ui.selectedItem);
    const items  = useSelector(currentItemsSelector);
    const currentDirId = useSelector(state => state.ui.navigationStack[state.ui.navigationStack.length - 1]);
    const currentDirNames = useMemo(
      ()=> items.map(item=>item.name).filter((name)=>name !== items[currentDirId]?.name),
      [items,currentDirId]
    );
    const dispatch = useDispatch()
    const handleClose = (e, reason) => {
        if(reason === 'backdropClick' || reason === 'escapeKeyDown' ) { 
            e.preventDefault();
            return;
        }
        
        dispatch(closeModal())
    };
    
    const handleInput = (e)=>{
        validateName(e.target.value)
    }
    const validateName = (name) => {
        if(currentDirNames.includes(name)) {
            setHasError(true)
        } else {
            setHasError(false)
        }
    }

  return (
    <Fragment>
      <Dialog
        fullWidth
        open={isModalOpen}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const name = formJson.name;
            if(selectedItem?.id){
              dispatch(editItem({id: selectedItem.id, name}));
            } else {
              dispatch(addItem({name , type: itemType , currentDirId}));
            }
            handleClose();
          },
        }}
      >
        <DialogTitle>{selectedItem?.id ? 'Edit':`Create New ${type}`}</DialogTitle>
        <DialogContent>
          <TextField
            onInput={handleInput}
            onFocus={handleInput}
            error={hasError}
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            helperText={hasError ? 'File name already exists' : ''}
            defaultValue={`New ${type}`}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={hasError} type='submit' variant='contained' >{selectedItem?.id ? 'Edit':'Create'}</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}