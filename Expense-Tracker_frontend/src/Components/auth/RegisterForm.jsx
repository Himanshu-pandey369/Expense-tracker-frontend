import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";

import Input from "../ui/Input";
import Button from "../ui/Button";

import { registerSchema } from "../../utils/validation";
import { registerUser } from "../../services/authService";
import { useAuth } from "../../context/AuthContext";

export default function RegisterForm() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const response = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
      });

      await login(response.token);

      toast.success("Account created successfully!");

      navigate("/dashboard");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-center mb-8">

        <h1 className="text-4xl font-bold text-blue-600">
          SpendWise
        </h1>

        <p className="mt-2 text-gray-500">
          Create your account 🚀
        </p>

      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <Input
          label="Full Name"
          type="text"
          placeholder="Enter your name"
          register={register("name")}
          error={errors.name}
        />

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
          placeholder="Create a password"
          register={register("password")}
          error={errors.password}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
          register={register("confirmPassword")}
          error={errors.confirmPassword}
        />

        <Button
          type="submit"
          loading={loading}
        >
          Create Account
        </Button>

        <p className="text-center text-gray-500">
          Already have an account?{" "}
          <Link
            to="/"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>

      </form>
    </>
  );
}