import { useState } from "react";
import useForm from "../utils/hooks/useForm";
import Input from "../components/Input";
import { AiOutlineUser } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import StyledButton from "../components/StyledButton";
import ImageWithLoader from "../components/ImageWithLoader";
import { SignUpForm, defaultSignUpValues } from "../utils/forms/signUp";
import { appRoutes } from "../utils/appRoutes";
import Link from "next/link";

const Login = () => {
  const { getValue, handleChangeValue } = useForm({
    defaultValues: defaultSignUpValues,
  });

  const handleSubmitForm = (e) => {
    e?.preventDefault();
  };

  return (
    <div className="w-screen h-screen overflow-auto bg-[#E6E2FF]">
      <div className="w-[80%] h-[80%] mt-20 rounded-[25px] overflow-hidden flex flex-row items-center justify-start shadow-md m-auto">
        <div className="w-full h-full flex-grow bg-white  flex flex-col items-center justify-center">
          <h1 className="text-black text-[30px] font-bold uppercase">
            Crear Cuenta
          </h1>
          <span className="text-[#525252] text-base font-normal mt-3">
            Crea una nueva cuenta gratis
          </span>

          <form
            onSubmit={handleSubmitForm}
            className="flex md:w-[360px] formAppears flex-col items-center justify-center mt-6 gap-6"
          >
            <Input
              icon={<AiOutlineUser size={20} className="text-black" />}
              value={getValue(SignUpForm.name)}
              setValue={(val) => handleChangeValue(SignUpForm.name, val)}
              type="email"
              placeholder="Email"
            />

            <Input
              icon={<AiOutlineUser size={20} className="text-black" />}
              value={getValue(SignUpForm.email)}
              setValue={(val) => handleChangeValue(SignUpForm.email, val)}
              type="email"
              placeholder="Email"
            />

            <Input
              icon={<BiLock size={20} className="text-black" />}
              value={getValue(SignUpForm.password)}
              setValue={(val) => handleChangeValue(SignUpForm.password, val)}
              type="password"
              placeholder="Password"
            />

            <StyledButton
              text={"Iniciar Sesion"}
              type="submit"
              className="bgPrimaryButton"
            />

            <span>
              Ya tienes una cuenta?{" "}
              <Link href={appRoutes.loginPath()}>
                <span className="font-medium text-[#5038ED]">
                  Iniciar Sesion
                </span>
              </Link>
            </span>
          </form>
        </div>

        <div className="w-full h-full flex-grow relative overflow-hidden">
          <ImageWithLoader
            src={"/images/LoginIlustrator.jpg"}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
