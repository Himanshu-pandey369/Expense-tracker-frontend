import { LoaderCircle } from "lucide-react";

export default function Button({
  children,
  loading,
  ...props
}) {
  return (
    <button
      {...props}
      disabled={loading}
      className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-70 flex justify-center items-center gap-2"
    >
      {loading && (
        <LoaderCircle
          className="animate-spin"
          size={18}
        />
      )}

      {children}
    </button>
  );
}