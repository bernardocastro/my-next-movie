import {
    CssBaseline,
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    MenuItem,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ScrollToColor from './ScrollToColor';

const theme = createTheme({
    palette: {
        primary: {
            main: '#E50914',
        }
    }
})

export default function Header() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ScrollToColor>
                <AppBar position="fixed" color='transparent' sx={{ padding: 0 }}>
                    <Toolbar style={{ justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40 }}>
                        <Box sx={{ display: 'flex', width: 315, justifyContent: 'space-between' }}>
                            <Typography variant="h6" color='primary'>
                                My Next Movie
                            </Typography>
                            <ul style={{ display: 'flex' }}>
                                <MenuItem sx={{ padding: 0, marginLeft: 3 }}>
                                    <Typography textAlign='center'>
                                        Home
                                    </Typography>
                                </MenuItem>
                                <MenuItem sx={{ padding: 0, marginLeft: 3 }}>
                                    <Typography textAlign='center'>
                                        Movies
                                    </Typography>
                                </MenuItem>
                                <MenuItem sx={{ padding: 0, marginLeft: 3 }}>
                                    <Typography textAlign='center'>
                                        TV Shows
                                    </Typography>
                                </MenuItem>
                            </ul>
                        </Box>
                        <Box>
                            <Button color="inherit">Login</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ScrollToColor>
        </ThemeProvider>
    );
}
