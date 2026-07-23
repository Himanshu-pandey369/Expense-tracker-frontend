import { Link } from "react-router-dom";

import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

export default function Login() {
  return (
    <AuthLayout>
      <div className="space-y-6">

        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">
            SpendWise
          </h1>

          <p className="mt-2 text-slate-500">
            Welcome back! Sign in to continue.
          </p>
        </div>

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
        />

        <Button type="submit">
          Login
        </Button>

        <p className="text-center text-slate-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </AuthLayout>
  );
}