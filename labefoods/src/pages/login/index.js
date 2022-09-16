import React from 'react';
import logo from '../../img/logo.svg'
import {
    FormsPageContainer,
    FormContainer
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
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';

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
                <TextField
                    sx={{ m: 1, width: '100%' }}
                    required
                    id="outlined-required"
                    label="Senha"
                    placeholder='Mínimo 6 caracteres'
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <button>Entrar</button>
            </FormContainer>
            <a>Não possui cadastro? Clique aqui.</a>
        </FormsPageContainer>
    );

}
