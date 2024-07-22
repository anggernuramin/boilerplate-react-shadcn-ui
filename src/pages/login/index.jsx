import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "@features/auth/loginSlice";
import ErrorInputForm from "../../components/atoms/ErrorInputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faChevronCircleRight,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

import { Input } from "@/components/ui/input";

const Login = () => {
  const dispatch = useDispatch();
  const [isShowPassword, setIsShowPassword] = useState(false);
  useState(false);
  const [isSubmited, setIsSubmited] = useState(false);
  const navigate = useNavigate();

  const formValues = {
    username: "",
    password: "",
  };

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    // setValue,
    // setError,
    // getValues,
    // clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: formValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmited(true);
    dispatch(addUser(data)); // dispatch action ke store loginSlice
    setTimeout(() => {
      setIsSubmited(false);
      navigate("/dashboard");
    }, 3000);
    setIsSubmited(false);
  };

  return (
    <section className="flex items-start justify-center min-h-screen bg-white ">
      <div className="w-full max-w-md mt-16 ">
        <div className="w-full overflow-hidden bg-white border rounded-md border-slate-600">
          <header className="flex items-center gap-1 py-[6px] px-3 text-white bg-primary">
            <FontAwesomeIcon icon={faChevronCircleRight} size="1x" />

            <h1 className="text-lg">Bank BRI Dashboard Pusat</h1>
          </header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-4 pt-5 pb-2 ">
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Username
                </label>
                <Input
                  name="username"
                  type="text"
                  id="username"
                  {...register("username")}
                />
                <ErrorInputForm statusError={errors.username} />
              </div>

              <div className="relative mb-4">
                <div
                  onClick={() => setIsShowPassword(!isShowPassword)}
                  className="absolute z-10 p-2 cursor-pointer right-2 top-7 "
                >
                  {isShowPassword ? (
                    <FontAwesomeIcon
                      icon={faEye}
                      className="transition-all hover:text-primary"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className="transition-all hover:text-primary "
                    />
                  )}
                </div>

                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-bold text-gray-700"
                >
                  Password
                </label>
                <Input
                  name="password"
                  type={isShowPassword ? "text" : "password"}
                  id="password"
                  {...register("password")}
                />
                <ErrorInputForm statusError={errors.password} />
              </div>
            </div>

            <div className="flex px-4 items-center justify-between w-full bg-[#F5F5F5] h-16">
              <button
                disabled={isSubmited}
                type="submit"
                className="flex items-center justify-center gap-2 px-4 py-2 text-lg text-white rounded-md focus:outline-none bg-primary"
              >
                <FontAwesomeIcon icon={faRightToBracket} />
                {isSubmited ? "Submitting" : "Login"}
              </button>
            </div>
          </form>
        </div>
        <div className="w-full mt-5 ">
          <p className="text-xs text-end">Versi 1.0.7</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
