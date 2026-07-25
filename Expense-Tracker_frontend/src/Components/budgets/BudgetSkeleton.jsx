import Skeleton from "../common/Skeleton";

export default function BudgetSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-10 w-48" />
          <Skeleton className="mt-3 h-5 w-64" />
        </div>

        <Skeleton className="h-12 w-40 rounded-xl" />
      </div>

      {/* Budget Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <Skeleton className="h-6 w-40" />

            <Skeleton className="mt-6 h-4 w-full" />

            <Skeleton className="mt-4 h-3 w-full rounded-full" />

            <Skeleton className="mt-6 h-10 w-full rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}