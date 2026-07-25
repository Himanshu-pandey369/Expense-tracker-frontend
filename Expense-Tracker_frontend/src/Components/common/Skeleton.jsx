export default function Skeleton({
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl bg-gray-200 animate-pulse ${className}`}
    />
  );
}