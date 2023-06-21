import { useState } from "react";

const SignUp = () => {
      const [signUpDetails, setSignUpDetails] = useState({});

		const setFormState = (e) => {
			setSignUpDetails({
				...signUpDetails,
				[e.target.name]: e.target.value,
			});
		};
  const signUpUser = async (signUpDetails) => {
    const response = await fetch("http://localhost:3000/user/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpDetails),
    });
    if (response) {
      console.log(response);
    }
  };

  return (
		<div>
			Login
			<form>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					name="email"
					id="email"
					onChange={(e) => setFormState(e)}
					value={signUpDetails.email}
				/>
				<label htmlFor="password">Password:</label>
				<input
					type="password"
					name="password"
					id="password"
					onChange={(e) => setFormState(e)}
					value={signUpDetails.password}
				/>
				<button type="button" onClick={() => signUpUser(signUpDetails)}>
					Create User
				</button>
			</form>
		</div>
  );
}

export default SignUp