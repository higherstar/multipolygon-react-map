import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import UploadIcon from "../../assets/img/upload.svg";
import "./style.css";

export const CustomDropzone = ({
  onHandleLoad,
  accept,
  autoOpen,
  description,
  showSelectedFiles,
  hidden
}) => {
  const onDrop = useCallback(acceptedFiles => {
    const reader = new FileReader();

    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      const { name, path, type } = acceptedFiles[0];
      onHandleLoad({ name, path, type, result: reader.result });
    };

    acceptedFiles.forEach(file => {
      reader.readAsDataURL(file);
    })
  }, [onHandleLoad]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: accept,
    onDrop
  });

  const dropzoneInput = React.useRef(null);
  React.useEffect(() => {
    if (autoOpen) {
      dropzoneInput.current.click();
    }
  }, [autoOpen, dropzoneInput]);

  const acceptedFilesItems = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="upload-photo-inner-container" style={{display: hidden ? 'none' : 'block'}}>
      <div {...getRootProps({className: 'dropzone'})} ref={dropzoneInput}>
        <input {...getInputProps()} />
        <img src={UploadIcon} alt='' />
        <p>{description}</p>
      </div>
      {showSelectedFiles && (
        <aside>
          <ul>
            {acceptedFilesItems}
          </ul>
        </aside>
      )}
    </section>
  );
};
