export default function SummaryCard({
  title,
  amount,
  icon,
  bgColor,
  isCurrency = true,
}) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            {title}
          </p>

          <h2 className="mt-3 break-all text-3xl font-bold text-gray-900 dark:text-white">
            {isCurrency
              ? `₹${Number(amount).toLocaleString("en-IN")}`
              : Number(amount).toLocaleString("en-IN")}
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md ${bgColor} transition-transform duration-300 group-hover:scale-110`}
        >
          {icon}
        </div>
      </div>

      <div className="mt-6 border-t border-gray-100 pt-4 dark:border-slate-800">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          Updated just now
        </p>
      </div>
    </div>
  );
}