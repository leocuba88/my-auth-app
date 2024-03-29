import React from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export function LoginUser() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { store, actions } = React.useContext(Context);
	const history = useHistory();

	React.useEffect(
		() => {
			if (store.authToken) {
				history.push("/dashboard");
			}
		},
		[store.authToken]
	);

	return (
		<div className="container">
			{store.authError && (
				<div className="alert alert-danger" role="alert">
					Authentification Error
				</div>
			)}
			<div className="form-floating mb-3">
				<label htmlFor="floatingInput">Email address</label>
				<input
					value={email}
					onChange={ev => setEmail(ev.target.value)}
					type="email"
					className="form-control"
					id="floatingInput"
					placeholder="name@example.com"
				/>
			</div>
			<div className="form-floating">
				<label htmlFor="floatingPassword">Password</label>
				<input
					value={password}
					onChange={ev => setPassword(ev.target.value)}
					type="password"
					className="form-control"
					id="floatingPassword"
					placeholder="Password"
				/>
			</div>

			<button className="btn btn-primary mt-3" onClick={() => actions.loginUser(email, password)}>
				Login
			</button>
		</div>
	);
}
