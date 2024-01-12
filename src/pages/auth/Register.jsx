import { useState } from "react";
import {
  RiEyeOffLine,
  RiEyeLine,
  RiLockLine,
  RiMailLine,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl uppercase font-bold tracking-[5px] mb-8 text-center">
          Crear <span className="text-primary border-b py-2">Cuenta</span>
        </h1>
        <form className="mb-8">
          <button className="flex items-center justify-center gap-5 capitalize font-medium bg-secondary-900 w-full py-3 px-4 rounded-full mb-8 text-gray-100">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="logo google"
              className="w-4 h-4"
            />
            Registrate con Google
          </button>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              className="w-full bg-secondary-900 outline-none py-3 px-4 pl-8 pr-4 rounded-lg"
              placeholder="Nombre(s)"
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="text"
              className="w-full bg-secondary-900 outline-none py-3 px-4 pl-8 pr-4 rounded-lg"
              placeholder="Apellidos"
            />
          </div>
          <div className="relative mb-4">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="w-full bg-secondary-900 outline-none py-3 px-4 pl-8 pr-4 rounded-lg"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="relative mb-4">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-secondary-900 outline-none py-3 px-8 rounded-lg"
              placeholder="Contraseña"
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div className="relative mb-8">
            <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-secondary-900 outline-none py-3 px-8 rounded-lg"
              placeholder="Confirmar contraseña"
            />
            {showPassword ? (
              <RiEyeLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            ) : (
              <RiEyeOffLine
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary uppercase text-sm font-semibold w-full py-3 px-4 rounded-lg text-secondary-900 hover:bg-secondary-900 hover:text-primary transition-colors duration-500"
            >
              Registrarse
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-2">
          <span className="flex items-center gap-2">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-gray-100 transition-colors duration-300"
            >
              Inicia Sesión
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
