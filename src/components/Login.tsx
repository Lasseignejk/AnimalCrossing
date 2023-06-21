import {useState} from 'react'

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({});

    const setFormState = (e) => {
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value
        })
    }

    const loginUser = async (loginDetails) => {
        const data = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginDetails)
        })
        if (data) {
            const {token, user} = await data.json()
            console.log(token);
            console.log(user);
        }
        
    }
  return (

    <div>Login
        <form>
            <label htmlFor="email">Email:</label>
            <input type="email" name='email' id='email' onChange={(e) => setFormState(e)} value={loginDetails.email} />
            <label htmlFor="password">Password:</label>
            <input type="password" name='password' id='password' onChange={(e) => setFormState(e)} value={loginDetails.password} />
            <button type='button' onClick={() => loginUser(loginDetails)}>Login</button>
        </form>
    </div>
  )
}

export default Login