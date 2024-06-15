import {
    Box,
    Toolbar,
    AppBar,
    Typography
} from '@mui/material';

import { DrawerMenu, ModalShare } from '/src/Components'


export const NavBar = () => {
    return (
        <Box mb={8}>
            <AppBar position="fixed" sx={{ boxShadow: 'none' }}>
                <Toolbar variant="regular">
                    <DrawerMenu />
                    <Typography sx={{ flexGrow: 1 }} /> {/* <- empuja a la derecha el ModalShare */}
                    <ModalShare />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
