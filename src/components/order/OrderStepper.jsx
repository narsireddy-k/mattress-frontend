import { ORDER_STEPS } from "../../utils/constants";

export default function OrderStepper({ currentStep }) {
  return (
    <div className="flex flex-col gap-3">
      {ORDER_STEPS.map((step, index) => (
        <div key={step} className="flex items-center gap-3">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold
              ${
                index <= currentStep
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
          >
            {index + 1}
          </div>
          <span
            className={
              index <= currentStep
                ? "text-green-700 font-medium"
                : "text-gray-500"
            }
          >
            {step}
          </span>
        </div>
      ))}
    </div>
  );
}
