import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const navigate = useNavigate();
  const { signup, isAutheticated, errors: registerErrors } = useAuth();
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  useEffect(()=>{
    if(isAutheticated) {navigate("/");}
  },[isAutheticated]);



  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (
        <div key={i} className="bg-red-500 p-2 text-white">
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3 "
          placeholder="Usuario"
        />
        {errors.username && (
          <p className="text-red-500">El usuario es requerido</p>
        )}
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">El correo es requerido</p>}
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md border m-3"
          placeholder="Contraseña"
        />
        {errors.password && (
          <p className="text-red-500">La contraseña es requerido</p>
        )}
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegisterPage;
