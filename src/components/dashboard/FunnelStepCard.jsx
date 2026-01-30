export default function FunnelStepCard({ label, value }) {
  return (
    <div className="
      bg-white 
      border border-gray-200 
      rounded-xl 
      p-5 
      shadow-sm 
      hover:shadow-lg 
      transition-all 
      duration-200
    ">
      <p className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-2">
        {label}
      </p>

      <p className="text-3xl font-semibold text-gray-900">
        {value.toLocaleString()}
      </p>
    </div>
  );
}
