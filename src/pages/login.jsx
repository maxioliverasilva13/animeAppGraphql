import { useState } from "react";
import useForm from "../utils/hooks/useForm";
import { defaultLoginValues, SignInForm } from "../utils/forms/signIn";
import Input from "../components/Input";
import { AiOutlineUser } from "react-icons/ai"
import { BiLock } from "react-icons/bi"
import StyledButton from "../components/StyledButton";
import ImageWithLoader from "../components/ImageWithLoader"
import Link from "next/link";
import { appRoutes } from "../utils/appRoutes";


const Login = () => {
    const { getValue , handleChangeValue } = useForm({ defaultValues: defaultLoginValues })

    const handleSubmitForm = (e) => {
        e?.preventDefault();
        
    }

    return <div className="w-screen h-screen overflow-auto bg-[#E6E2FF]">
        <div className="w-[80%] h-[80%] mt-20 rounded-[25px] overflow-hidden flex flex-row items-center justify-start shadow-md m-auto">
            <div className="w-full h-full flex-grow bg-white  flex flex-col items-center justify-center">
                <h1 className="text-black text-[30px] font-bold uppercase">Iniciar Sesion</h1>
                <span className="text-[#525252] text-base font-normal mt-3">Inicia sesion con una cuenta existente</span>

                <form onSubmit={handleSubmitForm} className="flex formAppears md:w-[360px] flex-col items-center justify-center mt-6 gap-6">
                    <Input
                        icon={<AiOutlineUser size={20} className="text-black" />}
                        value={getValue(SignInForm.email)}
                        setValue={(val) => handleChangeValue(SignInForm.email, val)}
                        type="email"
                        placeholder="Email"
                     />

                    <Input
                        icon={<BiLock size={20} className="text-black" />}
                        value={getValue(SignInForm.password)}
                        setValue={(val) => handleChangeValue(SignInForm.password, val)}
                        type="password"
                        placeholder="Password"
                    />

                    <StyledButton
                        text={"Iniciar Sesion"}
                        type="submit"
                        className="bgPrimaryButton"
                    />

                    <span>
                        No tienes una cuenta? <Link href={appRoutes.signupPath()}><span className="font-medium text-[#5038ED]">Registrarme</span></Link>
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
}

export default Login;