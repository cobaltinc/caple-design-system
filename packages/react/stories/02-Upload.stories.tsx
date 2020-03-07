import React from 'react';
import {
  Upload,
  Button,
  Text,
} from '../src';

export default {
  title: 'Upload',
};

export const Default = () => {
  return (
    <div style={{padding: 30}}>
      <Upload>
        <Button>Click me</Button>
      </Upload>
    </div>
  )
};

export const AccessFile = () => {
  return (
    <div style={{padding: 30}}>
      <Upload>
        {(file) => (
          <Button>{file ? file.name : 'Click me'}</Button>
        )}
      </Upload>
    </div>
  )
};

export const Draggable = () => {
  return (
    <div style={{padding: 30}}>
      <Upload draggable>
        { (file, dragging) =>
          <div style={{height: 100, width: 300, border: '4px dashed #aaa', borderColor: dragging ? 'black' : '#aaa'}}>
            {file ? file.name : 'Click or drag file to this area to upload.'}
          </div>
        }
      </Upload>
    </div>
  )
};