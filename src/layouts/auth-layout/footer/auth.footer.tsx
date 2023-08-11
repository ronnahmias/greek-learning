import { Box, Link, Stack, Typography } from "@mui/material";

export default function AuthFooter() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 25,
        left: 20,
        right: 20,
        padding: "8px",
        backgroundColor: "#EEF2F6",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", md: "100%" },
        }}
      >
        <Typography
          variant="subtitle2"
          component={Link}
          href="tel:+972522600235"
          target="_blank"
          underline="hover"
        >
          Contact Me
        </Typography>
        <Typography
          variant="subtitle2"
          component={Link}
          href="/"
          target="_blank"
          underline="hover"
        >
          &copy; Juliana Nahmias
        </Typography>
      </Stack>
    </Box>
  );
}
