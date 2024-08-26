import { useState } from "react"
import { Link } from "react-scroll"

import {
  ChecklistRtl,
  ExpandLess,
  Menu,
  PinDrop,
  Settings,
  SwitchAccount,
  Recommend
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
  Typography,
  Fade
} from "@mui/material"

const dividerStyle = { opacity: .6 }

const itemStyle = {
  height: "10vh",
  width: "100vw"
}

const pinBoxStyle = {
  paddingTop: "4vh",
  paddingBottom: "2vh",
  textAlign: "center"
}

const imgStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "6vh",
  marginBottom: "6vh",
  cursor: 'pointer'
}


export const DrawerMenu = () => {
  const [state, setState] = useState(false)

  const closeMenu = () => {
    setState(false)
  }

  const openMenu = () => {
    setState(true)
  }

  return (
    <>
      <Fade in={true} timeout={6000}>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="Botón para desplegar menú"
          onClick={openMenu}
        >
          <Menu fontSize="large" />
        </IconButton>
      </Fade>

      <SwipeableDrawer
        anchor="top"
        open={state}
        onClose={closeMenu}
        onOpen={openMenu}
      >
        <Link
          activeClass="active"
          to="top"
          spy
          smooth={true}
          duration={500}
          delay={400}
          offset={-160}
          onClick={closeMenu}
          style={imgStyle}
        >
          <img
            alt="logo servizone"
            src="/logos/logo-servizone.webp"
            width={140}
            height={140}
          />
        </Link>

        <Box
          onClick={closeMenu}
          onKeyDown={closeMenu}
        >
          <List>

            <Divider sx={dividerStyle} />

            <Link
              activeClass="active"
              to="servicios"
              spy
              smooth={true}
              duration={500}
              delay={400}
              offset={-140}
              onClick={closeMenu}
            >
              <ListItem sx={itemStyle}>
                <ListItemButton>
                  <ListItemIcon>
                    <Settings color="warning" />
                  </ListItemIcon>

                  <ListItemText primary="Servicios" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Divider sx={dividerStyle} />

            <Link
              activeClass="active"
              to="trabajos"
              spy
              smooth={true}
              duration={500}
              delay={400}
              offset={-40}
              onClick={closeMenu}
            >
              <ListItem sx={itemStyle}>
                <ListItemButton>
                  <ListItemIcon>
                    <ChecklistRtl color="warning" />
                  </ListItemIcon>

                  <ListItemText primary="Algunos Trabajos" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Divider sx={dividerStyle} />

            <Link
              activeClass="active"
              to="comentarios"
              spy
              smooth={true}
              duration={500}
              delay={400}
              offset={-220}
              onClick={closeMenu}
            >
              <ListItem sx={itemStyle}>
                <ListItemButton>
                  <ListItemIcon>
                    <Recommend color="warning" />
                  </ListItemIcon>

                  <ListItemText primary="Clientes Felices" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Divider sx={dividerStyle} />

            <Link
              activeClass="active"
              to="contacto"
              spy
              smooth={true}
              duration={500}
              delay={400}
              offset={-60}
              onClick={closeMenu}
            >
              <ListItem sx={itemStyle}>
                <ListItemButton>
                  <ListItemIcon>
                    <SwitchAccount color="warning" />
                  </ListItemIcon>

                  <ListItemText primary="Contacto" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Divider sx={dividerStyle} />
          </List>

          <Box sx={pinBoxStyle}>
            <PinDrop color="action" />

            <Typography fontSize="small" color="gray">
              Concejala Sra Hilda Porras, Maipú.
            </Typography>

            <ExpandLess
              sx={{
                marginTop: 6,
                cursor: "pointer"
              }}
              onClick={closeMenu}
              color="warning"
            />

          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  )
}
