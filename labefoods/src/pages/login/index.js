import React from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer,
    FormButton
} from '../../components';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export function LoginPage() {


    return (
        <FormsPageContainer>
            <img src={logo} alt='logo' />
            <h2>Entrar</h2>
            <FormContainer>
                <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="E-mail"
                    placeholder='email@email.com'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl required sx={{ m: 1, width: '100%' }} variant="outlined">
                    <InputLabel shrink htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        notched = {true}
                        id="outlined-adornment-password"
                        // type={values.showPassword ? 'text' : 'password'}
                        // value={values.password}
                        // onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    // onClick={handleClickShowPassword}
                                    // onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        placeholder='Mínimo 6 caracteres'
                    />
                </FormControl>
                <FormButton>Entrar</FormButton>
            </FormContainer>
            <a>Não possui cadastro? Clique aqui.</a>
        </FormsPageContainer>
    );

}
