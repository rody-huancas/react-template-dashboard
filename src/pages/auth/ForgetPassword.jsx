import { useState } from "react";
import {
  RiMailLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const ForgetPassword = () => {
  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-3xl uppercase font-bold tracking-[5px] mb-8 text-center">
        Recuperar <span className="text-primary border-b py-2">Contraseña</span>
      </h1>
      <form className="mb-8">
        <div className="relative mb-4">
          <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="w-full bg-secondary-900 outline-none py-3 px-4 pl-8 pr-4 rounded-lg"
            placeholder="Correo electrónico"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary uppercase text-sm font-semibold w-full py-3 px-4 rounded-lg text-secondary-900 hover:bg-secondary-900 hover:text-primary transition-colors duration-500"
          >
            Envíar Instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-2">
        <span className="flex items-center gap-2">
          Ya tienes cuenta? <Link to="/auth" className="text-primary hover:text-gray-100 transition-colors duration-300">Inicia Sesión</Link>
        </span>
        <span className="flex items-center gap-2">
          ¿No tienes cuenta? <Link to="/auth/register" className="text-primary hover:text-gray-100 transition-colors duration-300">Registrate</Link>
        </span>
      </div>
    </div>
  );
};
