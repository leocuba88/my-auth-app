import React from "react";

export function RegisterUser() {
	return (
		<div className="container">
			<div className="form-floating mb-3">
				<label htmlFor="floatingInput">Email address</label>
				<input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
			</div>
			<div className="form-floating">
				<label htmlFor="floatingPassword">Password</label>
				<input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
			</div>

			<button className="btn btn-primary mt-3">Register</button>
		</div>
	);
}
