import { Box, Link, Stack, Typography } from "@mui/material";
export default function AuthFooter() {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        left: 20,
        right: 20,
        padding: "8px",
        backgroundColor: "#EEF2F6",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="subtitle2"
          component={Link}
          href="tel:+972522600235"
          target="_blank"
          underline="hover"
        >
          Contact Us
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
