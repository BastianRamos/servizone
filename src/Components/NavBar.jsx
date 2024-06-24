import {
    Box,
    Toolbar,
    AppBar,
    Grid
} from '@mui/material';

import { DrawerMenu, ModalShare } from '../components'


export const NavBar = () => {
    return (
        <Box mb={8}>
            <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
                <Toolbar variant="regular">
                    <Grid container>
                        <Grid item xs={10}>
                            <DrawerMenu />
                        </Grid>

                        <Grid item textAlign="right" xs={2}>
                            <ModalShare />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
