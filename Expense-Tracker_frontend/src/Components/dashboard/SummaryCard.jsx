export default function SummaryCard({
  title,
  amount,
  icon,
  bgColor,
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-gray-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            ₹{Number(amount).toLocaleString("en-IN")}
          </h2>

        </div>

        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center ${bgColor}`}
        >
          {icon}
        </div>

      </div>

    </div>
  );
}