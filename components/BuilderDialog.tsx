import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import BuilderForm from './BuilderForm';
import storage from '../utils/storage';

const BuilderModal = ({ updateTimelineItems }) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false);
    const storedItems = storage.local.getItem('timeline_items');
    if (storedItems) {
      updateTimelineItems(storedItems);
    }
  };
  const handleOpen = () => {
    setDialogOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>open</Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="builder-dialog-title"
        fullWidth
        open={dialogOpen}
      >
        <DialogTitle id="builder-dialog-title">Add timeline item</DialogTitle>
        <DialogContent>
          <BuilderForm />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BuilderModal;
