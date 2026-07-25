import Skeleton from "../common/Skeleton";

export default function TransactionSkeleton() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-10 w-56" />
          <Skeleton className="mt-3 h-5 w-72" />
        </div>

        <Skeleton className="h-12 w-44 rounded-xl" />
      </div>

      {/* Filters */}
      <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="grid gap-4 md:grid-cols-3">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>

      {/* Table */}
      <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton
              key={item}
              className="h-14 w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
}