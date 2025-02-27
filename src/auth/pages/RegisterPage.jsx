import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              label="Names"
              type="text"
              placeholder="John Doe"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="John@doe.com"
            />
          </Grid>
          <Grid item xs={12} sx={{ marginTop: 2 }}>
            <TextField fullWidth label="Password" type="password" />
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} >
              <Button fullWidth variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid container direction={"row"} justifyContent={"end"}>
            <Typography>Ya tienes una cuenta?</Typography>
            <Link to="/auth/login" component={RouterLink}>
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
