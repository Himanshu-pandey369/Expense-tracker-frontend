export default function SummaryCard({
  title,
  amount,
  icon,
  bgColor,
  isCurrency = true,
}) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-200 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-start justify-between">

        <div className="flex-1">

          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 break-all">
            {isCurrency
              ? `₹${Number(amount).toLocaleString("en-IN")}`
              : Number(amount).toLocaleString("en-IN")}
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-md ${bgColor} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>

      </div>

      <div className="mt-6 border-t pt-4">

        <p className="text-xs text-gray-400">
          Updated just now
        </p>

      </div>

    </div>
  );
}