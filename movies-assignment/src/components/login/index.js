import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../components/firebase'; // Make sure to import your Firebase instance
import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Sign in the user with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);

      // Optionally, you can add further logic after successful login
      console.log('User logged in successfully!');
      navigate('/');
    } catch (error) {
      console.error('Error logging in:', error.message);
      setError(getErrorMessage(error.code));
      // Handle login error here
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/user-not-found':
        return 'User not found. Check your email or sign up for an account.';
      case 'auth/invalid-login-credentials':
        return 'Incorrect password or email. Please try again.';
      default:
        return 'An error occurred. Please try again later.';
    }
  };

  return (
    <Card style={{ maxWidth: 400, margin: 'auto', marginTop: 50 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: 20 }}
            type="submit"
          >
            Login
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
