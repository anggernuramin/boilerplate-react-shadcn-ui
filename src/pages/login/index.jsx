import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import PasswordPopover from "../../components/molecules/PasswordPopover";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "@features/auth/loginSlice";
import ErrorInputForm from "../../components/atoms/ErrorInputForm";

const Login = () => {
  const dispatch = useDispatch();
  const [isVisiblePasswordPopover, setIsVisiblePasswordPopover] =
    useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [statePassword, setStatePassword] = useState("");
  const navigate = useNavigate();

  const formValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    remember: false,
  };

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    remember: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: formValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(addUser(data)); // dispatch action ke store loginSlice
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Username
            </label>
            <input
              name="username"
              type="text"
              id="username"
              className="w-full input input-bordered"
              {...register("username")}
            />

            <ErrorInputForm statusError={errors.username} />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="w-full input input-bordered"
              {...register("email")}
            />
            <ErrorInputForm statusError={errors.email} />
          </div>
          <div className="relative mb-4">
            <div
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="absolute right-0 z-10 p-2 cursor-pointer top-8 "
            >
              {isShowPassword ? (
                <EyeIcon className="w-10 h-6 transition-all hover:text-blue-600 " />
              ) : (
                <EyeSlashIcon className="w-10 h-6 transition-all hover:text-blue-600 " />
              )}
            </div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Password
            </label>
            <input
              name="password"
              type={isShowPassword ? "text" : "password"}
              id="password"
              className="w-full input input-bordered"
              onFocus={() => setIsVisiblePasswordPopover(true)}
              onBlur={() => setIsVisiblePasswordPopover(false)}
              onChange={(e) => setStatePassword(e.target.value)}
            />
            {/* Password Popover */}
            <PasswordPopover
              label="password" // sesuai dengan default value react - hook -form
              value={statePassword}
              isVisible={isVisiblePasswordPopover}
              setError={setError}
              setValue={setValue}
              clearErrors={clearErrors}
              getValues={getValues}
            />
            <ErrorInputForm statusError={errors.password} />
          </div>
          <div className="relative mb-4">
            <div
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              className="absolute right-0 z-10 p-2 cursor-pointer top-8 "
            >
              {isShowConfirmPassword ? (
                <EyeIcon className="w-10 h-6 transition-all hover:text-blue-600 " />
              ) : (
                <EyeSlashIcon className="w-10 h-6 transition-all hover:text-blue-600 " />
              )}
            </div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type={isShowConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              className="w-full input input-bordered"
              {...register("confirmPassword")}
            />
            <ErrorInputForm statusError={errors.confirmPassword} />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              name="remember"
              type="checkbox"
              id="remember"
              className="text-blue-500"
              {...register("remember")}
            />
            <label
              htmlFor="remember"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Remember me
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
