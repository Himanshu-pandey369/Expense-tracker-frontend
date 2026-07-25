import Skeleton from "../common/Skeleton";

export default function ProfileSkeleton() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-col items-center">
        <Skeleton className="h-28 w-28 rounded-full" />

        <Skeleton className="mt-6 h-8 w-52" />

        <Skeleton className="mt-3 h-5 w-72" />
      </div>

      <div className="mt-10 space-y-6">
        <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700 dark:bg-slate-800">
          <Skeleton className="h-14 w-full" />
        </div>

        <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700 dark:bg-slate-800">
          <Skeleton className="h-14 w-full" />
        </div>

        <div className="rounded-xl border border-gray-200 p-4 dark:border-slate-700 dark:bg-slate-800">
          <Skeleton className="h-14 w-full" />
        </div>
      </div>
    </div>
  );
}