import Skeleton from "../common/Skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Skeleton className="h-10 w-72" />
        <Skeleton className="mt-3 h-5 w-56" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <Skeleton className="h-4 w-24" />
            <Skeleton className="mt-5 h-10 w-36" />
            <Skeleton className="mt-8 h-5 w-28" />
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <Skeleton className="h-6 w-52" />
            <Skeleton className="mt-6 h-80 w-full" />
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <Skeleton className="h-6 w-52" />

        <div className="mt-6 space-y-4">
          {[1, 2, 3, 4].map((item) => (
            <Skeleton
              key={item}
              className="h-16 w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}