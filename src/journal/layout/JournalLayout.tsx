import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const JournalLayout = ({ children }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* NAVBAR */}
      {/* SIDEBAR */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/*Toolbar */}
        {children}
      </Box>
    </Box>
  );
};
