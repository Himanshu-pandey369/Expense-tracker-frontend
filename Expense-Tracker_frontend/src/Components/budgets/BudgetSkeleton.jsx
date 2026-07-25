import Skeleton from "../common/Skeleton";

export default function BudgetSkeleton() {
    return (
        <div className="space-y-8">

            <div className="flex justify-between items-center">

                <div>

                    <Skeleton className="h-10 w-48" />

                    <Skeleton className="h-5 w-64 mt-3" />

                </div>

                <Skeleton className="h-12 w-40 rounded-xl" />

            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="rounded-3xl bg-gray-50 p-6"
                    >

                        <Skeleton className="h-6 w-40" />

                        <Skeleton className="h-4 w-full mt-6" />

                        <Skeleton className="h-3 w-full mt-4 rounded-full" />

                        <Skeleton className="h-10 w-full mt-6" />

                    </div>
                ))}

            </div>

        </div>
    );
}