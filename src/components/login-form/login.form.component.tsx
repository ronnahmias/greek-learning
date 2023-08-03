import { Box, Button, TextField } from "@mui/material";
import { useFormik } from "formik";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: {},
    onSubmit: async (values, { setFieldError }) => {
      return false;
    },
  });

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <TextField
          placeholder="האימייל שאיתו נרשמת"
          variant="outlined"
          fullWidth
          type="email"
          label="אימייל"
          name="email"
          sx={{
            mt: 4,
            "& fieldset": {
              borderRadius: "17px",
            },
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{ width: "60%", my: 5 }}
          size="large"
          type="submit"
        >
          שלחו לי קוד אימות
        </Button>
      </Box>
    </>
  );
}
