import { Link } from "react-router-dom";
 
 const SigninForm = () => {
  return (
    <div className="flex items-center justify-center">
      <form className="w-1/2">
        <div>
          <label htmlFor="email" className="block mb-2.5">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            id="email"
            className="input"
          />
        </div>
    
        <div className="mt-5">
          <label htmlFor="password" className="block mb-2.5">
            Password
          </label>
          <input
            type="password"
            placeholder="Your password"
            id="password"
            className="input"
          />
        </div>
        <div className="mt-2.5 mb-5">
          <input type="checkbox" id="remember" className="mr-2.5" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="btn-form">Sign In</button>
        <p className="mt-2.5 text-sm">
          Create a new account?{" "}
          <Link to="/sign-up" className="text-primary-blue">
            Sign up
          </Link>
        </p>
      </form>
    </div>
);
};

export default SigninForm;