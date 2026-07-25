import Skeleton from "../common/Skeleton";

export default function TransactionSkeleton() {
  return (
    <div className="space-y-8 shadow-sm">

      {/* Header */}

      <div className="flex justify-between items-center">

        <div>

          <Skeleton className="h-10 w-56" />

          <Skeleton className="h-5 w-72 mt-3" />

        </div>

        <Skeleton className="h-12 w-44 rounded-xl" />

      </div>

      {/* Filters */}

      <div className="rounded-3xl bg-gray-50 p-5">

        <div className="grid md:grid-cols-3 gap-4">

          <Skeleton className="h-12 w-full" />

          <Skeleton className="h-12 w-full" />

          <Skeleton className="h-12 w-full" />

        </div>

      </div>

      {/* Table */}

      <div className="rounded-3xl bg-gray-50 p-6">

        {[1,2,3,4,5,6].map((item)=>(
          <Skeleton
            key={item}
            className="h-14 w-full mb-4"
          />
        ))}

      </div>

    </div>
  );
}