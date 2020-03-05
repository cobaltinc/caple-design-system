import React from 'react';
import classnames from 'classnames';
import ConfigContext from '../_config/ConfigContext';
import './Upload.style.scss';

export interface UploadProps {
  children(file?: File, dragging?: boolean): React.ReactNode;
  name?: string;
  value?: File;
  accept?: string;
  disabled?: boolean;
  draggable?: boolean;
  onChange?(file?: File): void;
  className?: string;
  style?: React.CSSProperties;
}

let dragCounter = 0;

export default ({ children, name, value, accept, disabled = false, draggable = false, onChange, className = '', style }: UploadProps) => {
  const { useContext, useState, useRef } = React;
  const { prefix } = useContext(ConfigContext);
  const classPrefix = `${prefix}-upload`;
  const classNames = classnames(classPrefix, className, {
    [`${classPrefix}--disabled`]: disabled,
  });

  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    const changedFile = files?.[0];
    setFile(changedFile);
    onChange?.(changedFile);
  };

  const onFileDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    const changedFile = files?.[0];
    setFile(changedFile);
    onChange?.(changedFile);
    setDragging(false);
  };

  const onDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter += 1;
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const onDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    dragCounter -= 1;
    if (dragCounter === 0) {
      setDragging(false);
    }
  };

  const onDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  return (
    <div
      className={classNames}
      style={style}
      onClick={onChooseFile}
      onDrop={onFileDrop}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDragOver={onDragOver}
    >
      <input ref={inputRef} type="file" name={name} accept={accept} onChange={onFileChange} />
      {children(file, dragging)}
    </div>
  );
};
