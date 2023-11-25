import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { auth } from '../../components/firebase'; // Make sure to import your Firebase instance
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router


const Signup = ({ handleSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
        // Access the signed-in user here if needed: userCredential.user
      console.log('User signed up successfully:');
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(getErrorMessage(error.code));
      // Handle error, you can show an error message to the user
    }
  };

  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'The email entered is not a valid one. Please try again.';
      case 'auth/weak-password':
        return 'The password should be at leat 6 characters. Please try again.';
      case 'auth/email-already-in-use':
        return 'The email  already belongs to an account. Please try to login or try again.';
      default:
        return 'An error occurred. Please try again later.';
    }
  };

  

  return (
    <Card style={{ maxWidth: 400, margin: 'auto', marginTop: 50 }}>
      <CardContent>
        <Typography variant="h5" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form>
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
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
      </CardContent>
    </Card>
  );
};

export default Signup;
