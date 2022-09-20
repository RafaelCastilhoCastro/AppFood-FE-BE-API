import React, { useContext, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { GlobalStateContext } from '../../global/globalStateContext';

export function PasswordInput({value, onChange, showPassword, TogglePassword, name, label, placeHolder}) {

    const {handleMouseDownPassword} = useContext(GlobalStateContext)
    
    return (
        <FormControl required={true} sx={{ m: 1, width: '100%' }} variant="outlined" >
            <InputLabel shrink={true} htmlFor="outlined-adornment-password">{label}</InputLabel>
            <OutlinedInput
                notched={true}
                value={value}
                onChange={onChange}
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name={name}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => TogglePassword()}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={label}
                placeholder={placeHolder}

            />
        </FormControl>
    )
}
