export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.25),_transparent_30%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_30%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(15,23,42,0.92),rgba(2,6,23,0.96))]" />

      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-32 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        <div className="hidden lg:flex flex-col justify-between p-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              SpendWise
            </h1>
            <p className="mt-3 max-w-md text-slate-300">
              Track expenses, plan budgets, and keep your money organized in one simple dashboard.
            </p>
          </div>

          <div className="max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
            <div className="text-sm uppercase tracking-[0.3em] text-slate-400">
              Smart finance
            </div>
            <h2 className="mt-4 text-2xl font-semibold">
              Beautiful money tracking for everyday use.
            </h2>
            <p className="mt-3 text-slate-300">
              Clean charts, budgets, quick actions, and exports built to make personal finance easy.
            </p>
          </div>

          <p className="text-sm text-slate-400">
            Built for clarity, control, and consistency.
          </p>
        </div>

        <div className="flex items-center justify-center p-4 sm:p-6 lg:p-10">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900/75 p-6 shadow-2xl backdrop-blur-xl sm:p-8 text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}