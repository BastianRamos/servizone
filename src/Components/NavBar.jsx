import {
    Box,
    Toolbar,
    AppBar,
    Typography
} from '@mui/material';

import { DrawerMenu } from './DrawerMenu';
import { ModalShare } from './ModalShare';


export const NavBar = () => {
    return (
        <Box>
            <AppBar position="static" sx={{ boxShadow: 'none' }}>
                <Toolbar variant="regular">
                    <DrawerMenu />
                    <Typography sx={{ flexGrow: 1 }} /> {/* <- empuja a la derecha el ModalShare */}
                    <ModalShare />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
