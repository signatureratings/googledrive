import React from 'react'
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'

export default function File({ file }) {
  return (
    <a
      href={file.url}
      target='_blank'
      className='btn btn-outline-dark text-truncate w-100'
    >
      <InsertDriveFileIcon />
      {file.name}
    </a>
  )
}
