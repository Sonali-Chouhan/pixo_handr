import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { validationSchema } from '../Fromcommonele/ValidationSchema';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const defaultTheme = createTheme();
export default function BasicModal({
  open,
  handleClose,
  userData,
  setUserData
}) {
  const [array, setArray] = React.useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    setArray(oldArray => [...oldArray,data] );
    const updatedData = [...userData, data];
    //           console.log(456123, updatedData);
              localStorage.setItem("Data", JSON.stringify(updatedData));
              setUserData(updatedData);

  };
  
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={style}
            >
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      {...register('firstName')}
                      error={errors.firstName ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.firstName?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      {...register('lastName')}
                      error={errors.lastName ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.lastName?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      {...register('email')}
                      error={errors.email ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.email?.message}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      {...register('password')}
                      error={errors.password ? true : false}
                    />
                    <Typography variant="inherit" color="textSecondary">
                      {errors.password?.message}
                    </Typography>
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}

                >
                  Sign Up
                </Button>
                <Button onClick={handleClose}>cloose</Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </Modal>
    </div>
  );
}
