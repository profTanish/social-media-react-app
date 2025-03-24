import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useUser } from "../../context/AuthContext";
import { useLoginAccount } from "../../lib/react-query/queriesAndMutations";

import Loader from "../../components/shared/Loader";
import FormError from "../../components/ui/FormError";

const SigninForm = () => {
  const navigate = useNavigate();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { checkAuthUser } = useUser();

  const { mutateAsync: loginAccount, isPending: isLoggingIn } =
    useLoginAccount();

  async function onSubmit(data) {
    const session = await loginAccount({
      email: data.email,
      password: data.password,
    });

    if (!session) return toast.error("Login failed! Please try again.");

    const isLoggedIn = await checkAuthUser();
    if (isLoggedIn) {
      reset();
      navigate("/");
    } else {
      toast.error("Login failed! Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center">
      <form className="w-1/2" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block mb-2.5">
            Email
          </label>
          <input
            type="email"
            placeholder="Your email"
            id="email"
            {...register("email", {
              required: "This field is required.",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address.",
              },
            })}
            disabled={isLoggingIn}
            className="input"
          />
           {<FormError errors={errors} fieldName="email" />}
        </div>

        <div className="mt-5">
          <label htmlFor="password" className="block mb-2.5">
            Password
          </label>
          <input
            type="password"
            placeholder="Your password"
            id="password"
            {...register("password", {
              required: "This field is required.",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters.",
              },
            })}
            disabled={isLoggingIn}
            className="input"
          />
          {<FormError errors={errors} fieldName="password" />}
        </div>
        <div className="mt-2.5 mb-5">
          <input type="checkbox" id="remember" className="mr-2.5" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <button className="btn-form" disabled={isLoggingIn}>
          {isLoggingIn ? (
            <div className="flex justify-center items-center gap-2">
              <Loader /> Loading...
            </div>
          ) : (
            "Login"
          )}
        </button>
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