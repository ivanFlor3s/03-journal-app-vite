import { Box, Toolbar } from "@mui/material";
import { Navbar, Sidebar } from "../components";


interface Props {
  children: React.ReactNode;
}
const drawerWidth = 240
export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* NAVBAR */}
      <Navbar drawerWidth={drawerWidth}></Navbar>
      
      {/* SIDEBAR */}
      <Sidebar drawerWidth={drawerWidth}></Sidebar>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
