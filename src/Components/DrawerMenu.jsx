import { useState } from "react"

import {
  ChecklistRtl,
  Menu,
  PinDrop,
  Settings,
  SwitchAccount
} from "@mui/icons-material"

import {
  IconButton,
  SwipeableDrawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography
} from "@mui/material"

const dividerStyle = { opacity: .6 }
const itemStyle = { height: "10vh", width: "100vw" }
const pinBoxStyle = { paddingTop: "8vh", paddingBottom: "2vh", textAlign: "center" }
const imgStyle = { marginLeft: "auto", marginRight: "auto", marginTop: "6vh", marginBottom: "6vh" }


export const DrawerMenu = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={() => setState(true)}
      >
        <Menu fontSize='large' />
      </IconButton>

      <SwipeableDrawer
        anchor="top"
        open={state}
        onClose={() => setState(false)}
        onOpen={() => setState(true)}
      >
        <img
          alt="logo servizone"
          src="./public/logos/logo-servizone.webp"
          width={140}
          height={140}
          style={imgStyle}
        />

        <Box
          onClick={() => setState(false)}
          onKeyDown={() => setState(false)}
        >
          <List>
            <Divider sx={dividerStyle} />
            <ListItem sx={itemStyle}>
              <ListItemButton>
                <ListItemIcon>
                  <Settings color="warning" />
                </ListItemIcon>
                <ListItemText primary="Nuestros Servicios" />
              </ListItemButton>
            </ListItem>
            <Divider sx={dividerStyle} />
            <ListItem sx={itemStyle}>
              <ListItemButton>
                <ListItemIcon>
                  <ChecklistRtl color="warning" />
                </ListItemIcon>
                <ListItemText primary="Algunos Trabajos" />
              </ListItemButton>
            </ListItem>
            <Divider sx={dividerStyle} />
            <ListItem sx={itemStyle}>
              <ListItemButton>
                <ListItemIcon>
                  <SwitchAccount color="warning" />
                </ListItemIcon>
                <ListItemText primary="Redes de Contacto" />
              </ListItemButton>
            </ListItem>
            <Divider sx={dividerStyle} />
          </List>
          <Box sx={pinBoxStyle}>
            <PinDrop color="info" />
            <Typography fontSize="small">
              Región Metropolitana, Maipú.
            </Typography>
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  )
}
