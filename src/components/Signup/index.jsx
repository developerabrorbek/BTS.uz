import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { useRegisterUserMutation } from "../../redux/API";
import { useNavigate } from "react-router";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp() {
const [message, setMessage] = useState({});
const [promise, dataUser] = useRegisterUserMutation(message)
const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		setMessage({
			phoneNumber: data.get("number"),
			password: data.get("password"),
      firstname: data.get("firstName"),
      lastname: data.get("lastName"),
      username: data.get("username"),
      birtDate : data.get("birthDate")
		});
	};

  useMemo(() => {
		promise(message).then(({ data }) => {
      console.log(data);
			if (data?.body?.token) {
				localStorage.setItem("token", JSON.stringify(data?.body?.token));
        localStorage.setItem("user", JSON.stringify(data.body.user))
        // if(data.body.user.roleEnum == "ADMIN" || data.body.user.roleEnum == "SUPER_ADMIN") navigate("/dashboard");
        // else navigate('/user')
			}
		});
	}, [message]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign up
					</Typography>
					<Box
						component="form"
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="given-name"
									name="firstName"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="family-name"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="username"
									label="Username"
									name="username"
									autoComplete="Username"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="birthDate"
									label="Birth Date"
									name="birthDate"
									autoComplete="Birth-date"
								/>
								{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
									<DemoContainer components={["DatePicker"]}>
										<DatePicker label="Basic date picker" />
									</DemoContainer>
								</LocalizationProvider> */}
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id="number"
									label="Phone number"
									name="number"
									autoComplete="Phone number"
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="new-password"
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Checkbox value="allowExtranumbers" color="primary" />
									}
									label="I want to receive inspiration, marketing promotions and updates via number."
								/>
							</Grid>
						</Grid>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
						<Grid container justifyContent="flex-end">
							<Grid item>
								<Link href="/login" variant="body2">
									Already have an account? Sign in
								</Link>
							</Grid>
						</Grid>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
}
