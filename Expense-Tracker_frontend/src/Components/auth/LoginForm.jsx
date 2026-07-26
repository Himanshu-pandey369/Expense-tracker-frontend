import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { loginSchema } from "../../utils/validation";
import { loginUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await loginUser(data);
      await login(response.token);

      toast.success("Welcome back!");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mb-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold text-white shadow-lg">
          S
        </div>
        <h1 className="text-4xl font-bold text-white">SpendWise</h1>
        <p className="mt-2 text-slate-300">Welcome back 👋</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email")}
          error={errors.email}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          register={register("password")}
          error={errors.password}
        />

        <div className="flex justify-end">
          <button
            type="button"
            className="text-sm text-blue-300 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <Button type="submit" loading={loading}>
          Login
        </Button>

        <p className="text-center text-slate-300">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-300 hover:underline"
          >
            Register
          </Link>
        </p>
      </form>
    </>
  );
}