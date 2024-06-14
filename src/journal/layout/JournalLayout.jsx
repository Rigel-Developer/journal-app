import { Toolbar } from "@mui/material";
import { NavBar, SideBar } from "../components";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar drawerWidth*/}
      <NavBar drawerWidth={drawerWidth} />
      {/* Sidebar drawerWidth*/}

      <SideBar drawerWidth={drawerWidth} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {children}
      </Box>
    </Box>
  );
};

JournalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
