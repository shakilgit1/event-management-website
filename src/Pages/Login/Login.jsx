import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Login = () => {

    const {signInUser, googleLogin} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
      AOS.init({duration:"1000", delay:"500"});
    
    }, []);

    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log( email, password);

        signInUser(email, password)
        .then(() => {
            // console.log(res.user);
            e.target.reset();
            navigate(location?.state ? location.state : '/');
            return toast('Logged in success');
            
        })
        .catch((error) =>{
            // console.log(error.message);
            return toast(error.message);
            
        })
        
    }

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(() =>{
            navigate(location?.state ? location.state : '/');
            return toast('Logged in success');
        })
        .catch(error =>{
            return toast(error.message);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200 ">
      <div data-aos="fade-down" className="hero-content flex-col">
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

            <div>
                <p className="text-xl text-center mt-3">Sign in with <Link onClick={handleGoogleLogin} className="text-blue-600">Google</Link></p>
            </div>
             
            </div>
          </form>
          <p className="text-center mb-5">New to this website? Please <Link className="text-blue-600" to='/register'>Register</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
    );
};

export default Login;