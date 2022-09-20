import { TextField } from '@mui/material'
import React from 'react'

export function EmailInput({ value, onChange }) {
  return (
    <TextField
      sx={{ m: 1, width: '100%' }}
      required
      id="outlined-required"
      label="E-mail"
      placeholder='email@email.com'
      value={value}
      onChange={onChange}
      name='email'
      InputLabelProps={{
        shrink: true,
      }}
    />
  )
}
