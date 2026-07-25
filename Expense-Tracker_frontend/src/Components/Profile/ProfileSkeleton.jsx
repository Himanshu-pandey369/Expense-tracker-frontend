import Skeleton from "../common/Skeleton";

export default function ProfileSkeleton() {
  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      <div className="flex flex-col items-center">

        <Skeleton className="w-28 h-28 rounded-full" />

        <Skeleton className="h-8 w-52 mt-6" />

        <Skeleton className="h-5 w-72 mt-3" />

      </div>

      <div className="mt-10 space-y-6">

        <Skeleton className="h-14 w-full" />

        <Skeleton className="h-14 w-full" />

        <Skeleton className="h-14 w-full" />

      </div>

    </div>
  );
}