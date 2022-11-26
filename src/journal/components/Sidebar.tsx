import {
  Box,
  Drawer,
  ListItem,
  List,
  Toolbar,
  Typography,
  ListItemText,
  Grid,
  ListItemButton,
  ListItemIcon,
  Divider
} from "@mui/material";
import { TurnedInNot } from "@mui/icons-material";

interface Props {
  drawerWidth: number;
}
export const Sidebar = ({ drawerWidth = 240 }: Props) => {
  return (
    //TODO revisar estilo sidebar
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth}, flexShrink: { sm: 0 }  }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Ivan Flores
          </Typography>
        </Toolbar>

          <Divider></Divider>
          <List>
            {["Enero", "Marzo", "Febrero", "Abrilisimo"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot></TurnedInNot>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}></ListItemText>
                    <ListItemText
                      secondary={"lorem lorem lorem"}
                    ></ListItemText>
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
      </Drawer>
    </Box>
  );
};
