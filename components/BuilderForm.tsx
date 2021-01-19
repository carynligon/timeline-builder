import React, { useEffect, useRef, useState } from 'react';
import styles from './BuilderForm.module.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import storage from '../utils/storage';

const BuilderForm = () => {
  const [alignment, setAlignment] = useState('left');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [src, setSrc] = useState('');
  const [allItems, updateItems] = useState([]);

  useEffect(() => {
    const storedItems = storage.local.getItem('timeline_items');
    if (storedItems) {
      updateItems(storedItems);
    }
  }, []);

  const addNewItem = (e) => {
    e.preventDefault();
    const newItem = JSON.stringify({
      title,
      content,
      src,
      alignment,
    });
    updateItems([...allItems, newItem]);
  };

  useEffect(() => {
    storage.local.setItem('timeline_items', allItems);
  }, [allItems]);

  return (
    <form className={styles.form} onSubmit={addNewItem}>
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        id="title-input"
        required
        value={title}
      />
      <TextField
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        id="content-input"
        required
        multiline
        value={content}
      />
      <TextField
        onChange={(e) => setSrc(e.target.value)}
        placeholder="Media Source Url"
        id="media-input"
        value={src}
      />
      <div className={styles.radio}>
        <FormControl component="fieldset">
          <FormLabel component="legend">On the left or right?</FormLabel>
          <RadioGroup
            aria-label="alignment"
            name="alignment1"
            value={alignment}
            onChange={(e) => {
              setAlignment(e.target.value);
            }}
          >
            <FormControlLabel value="right" control={<Radio />} label="Right" />
            <FormControlLabel value="left" control={<Radio />} label="Left" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button type="submit">add</Button>
    </form>
  );
};

export default BuilderForm;
