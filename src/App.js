import { AppBar, Box, IconButton, Toolbar, Typography, Button } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import './App.css';

function App() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <LiveTvIcon/>
        </IconButton>
        <Typography variant='h6'>Movix.</Typography>
        <Box>
          <Button>Home</Button>
          <Button>TV Shows</Button>
          <Button>Movies</Button>
          <Button>Popular</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default App;
