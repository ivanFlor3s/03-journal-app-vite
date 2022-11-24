import { Box } from "@mui/material";
import { Navbar } from '../components/Navbar';

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
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
