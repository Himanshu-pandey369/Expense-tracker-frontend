import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function Input({
  label,
  type = "text",
  placeholder,
  register,
  error,
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className="space-y-2">

      <label className="font-medium">
        {label}
      </label>

      <div className="relative">

        <input
          type={
            isPassword
              ? showPassword
                ? "text"
                : "password"
              : type
          }
          placeholder={placeholder}
          {...register}
          className={`w-full rounded-lg border px-4 py-3 outline-none
          ${
            error
              ? "border-red-500"
              : "border-slate-300"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() =>
              setShowPassword(!showPassword)
            }
            className="absolute right-4 top-4"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        )}
      </div>

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}

    </div>
  );
}