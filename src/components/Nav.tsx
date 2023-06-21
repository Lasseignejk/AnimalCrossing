import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/account">My Account</Link>
				</li>
				<li>
					<Link to="/search">Search</Link>
				</li>

				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<Link to="http://localhost:3000/get_user">Get User</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
