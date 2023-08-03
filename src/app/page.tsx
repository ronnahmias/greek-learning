import AuthFooter from "@/layouts/auth-layout/footer/auth.footer";
import { Box, Divider, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "#EEF2F6",
        minHeight: "100vh",
        minWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 350,
          borderRadius: 6,
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: 4,
          py: 2,
        }}
      >
        <Box textAlign="center" sx={{ mt: 2 }}>
          <Typography variant="h1" component="h1">
            Coming Soon
          </Typography>
          <Typography variant="h5" component="h1">
            Greek Learning
          </Typography>

          <Typography variant="subtitle2" component="h2">
            By Juliana Nahmias
          </Typography>

          <Divider sx={{ my: 2 }} />
        </Box>
      </Box>
      <AuthFooter />
    </Box>
  );
}
