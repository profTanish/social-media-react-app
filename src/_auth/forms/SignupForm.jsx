const SignupForm = () => {
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
                className="w-full px-5 py-2.5 rounded-md bg-dark-2 placeholder:text-light-1 placeholder:opacity-30 placeholder:text-sm outline-none"
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
                className="w-full px-5 py-2.5 rounded-md bg-dark-2 placeholder:text-light-1 placeholder:opacity-30 placeholder:text-sm outline-none"
              />
            </div>
            <div className="mt-2.5 mb-5">
              <input type="checkbox" id="remember" className="mr-2.5" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button className="bg-primary-blue border-2 border-primary-blue py-2.5 w-full rounded-md transition-all duration-300 hover:bg-transparent hover:border-light-1">
              Sign In
            </button>
          </form>
        </div>
      );
    };
    
    export default SignupForm;