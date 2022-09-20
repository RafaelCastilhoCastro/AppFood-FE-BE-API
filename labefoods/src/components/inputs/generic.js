import { TextField } from '@mui/material'
import React from 'react'

export function GenericInput({ value, onChange, label, placeHolder, name }) {
  return (
    <TextField
      sx={{ m: 1, width: '100%' }}
      required
      id="outlined-required"
      label={label}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      name={name}
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
