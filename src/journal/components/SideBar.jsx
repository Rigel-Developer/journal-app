import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import PropTypes from "prop-types";

export const SideBar = ({ drawerWidth }) => {
  return (
    <Box
      component={"nav"}
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        // ModalProps={{
        //   keepMounted: true,
        // }}
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component={"div"}>
            Jhonathan Mauricio
          </Typography>
        </Toolbar>
        <Divider />

        {/* List */}
        <List>
            {
                ["Home", "About", "Contact"].map((text) => (
                    <ListItem  key={text} disablePadding>
                        <ListItemButton>
                        <ListItemIcon>
                            <TurnedInNot />
                        </ListItemIcon>
                        <Grid container>
                            <ListItemText primary={text} />
                            <ListItemText secondary={"Lorem lorem lorem"} />

                        </Grid>
                        </ListItemButton>
                    </ListItem>
                ))
            }
        </List>
      </Drawer>
    </Box>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
};
