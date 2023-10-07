import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( email, password);

        signInUser(email, password)
        .then(res => {
            console.log(res.user);
            e.target.reset();
            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.log(error.message);
        })
        
    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold px-12 mb-4">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleLogin} className="card-body">
           
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
             
            </div>
          </form>
          <p className="text-center mb-5">New to this website? Please <Link className="text-blue-600" to='/register'>Register</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Login;