import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
      AOS.init({duration:"1000", delay:"500"});
    
    }, []);

    const handleRegister = (e) =>{
        e.preventDefault();
        // const name = e.target.name.value;
        const email = e.target.email.value;
        // const photo = e.target.photoURL.value;
        const password = e.target.password.value;
        // console.log(name, email, photo, password);


        if(password.length <6){
         return toast('password must be at least 6 character')
        }
        if(!/[A-Z]/.test(password)){
          return toast('Give at least one uppercase character');
        }
        if(!/[*@#$%^&+=]/.test(password)){
          return toast('provide at least one special character')
        }
        else{
          createUser(email, password)
          .then(() => {
              // console.log(res.user);
              e.target.reset();
              navigate('/');
              return toast('Registration successful')
              
          })
          .catch((error) =>{
              // console.log(error.message);
              return toast(error.message)
              
          })
        }
   
        
    }


  return (
    <div  className="hero min-h-screen bg-base-200 ">
      <div data-aos="fade-down" className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold px-12 mb-4">Register now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photoURL"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          <p className="text-center mb-5">Already have an account? Please <Link className="text-blue-600" to='/login'>Login</Link></p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
