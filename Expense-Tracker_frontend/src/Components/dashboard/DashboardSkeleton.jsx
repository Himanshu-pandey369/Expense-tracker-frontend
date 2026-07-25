import Skeleton from "../common/Skeleton";

export default function DashboardSkeleton() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <Skeleton className="h-10 w-72" />

        <Skeleton className="h-5 w-56 mt-3" />

      </div>

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-6 shadow-sm"
          >
            <Skeleton className="h-4 w-24" />

            <Skeleton className="h-10 w-36 mt-5" />

            <Skeleton className="h-5 w-28 mt-8" />
          </div>
        ))}

      </div>

      {/* Charts */}

      <div className="grid lg:grid-cols-2 gap-6">

        {[1, 2].map((item) => (
          <div
            key={item}
            className="bg-white rounded-3xl p-6 shadow-sm"
          >
            <Skeleton className="h-6 w-52" />

            <Skeleton className="h-80 w-full mt-6" />
          </div>
        ))}

      </div>

      {/* Recent */}

      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <Skeleton className="h-6 w-52" />

        <div className="space-y-4 mt-6">

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