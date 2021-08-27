import React from "react";
import { Context } from "../store/appContext";

export function LoginUser() {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const { store, actions } = React.useContext(Context);

	return (
		<div className="container">
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
