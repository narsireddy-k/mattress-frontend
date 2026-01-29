import { useState } from "react";
import OrderStepper from "./OrderStepper";
import CustomerDetailsForm from "./CustomerDetailsForm";

export default function OrderFlowModal({ onClose }) {
  const [step, setStep] = useState(0);

  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  function updateCustomerField(field, value) {
    setCustomerData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function nextStep() {
    // ✅ Validate ONLY customer details step
    if (step === 0) {
      if (
        !customerData.name ||
        !customerData.phone ||
        !customerData.address
      ) {
        alert("Please fill all required customer details");
        return;
      }
    }

    if (step < 5) {
      setStep(step + 1);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 flex gap-6">
        
        {/* LEFT – STEPPER */}
        <div className="w-1/3">
          <OrderStepper currentStep={step} />
        </div>

        {/* RIGHT – STEP CONTENT */}
        <div className="w-2/3 flex flex-col justify-between">
          <div>
            {step === 0 && (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Customer Details
                </h3>
                <CustomerDetailsForm
                  data={customerData}
                  onChange={updateCustomerField}
                />
              </>
            )}

            {step === 1 && (
              <>
                <h3 className="text-lg font-semibold mb-4">Payment</h3>
                <p className="text-gray-600">
                  💳 Secure payment gateway will be integrated here
                </p>
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Order Placed & Inventory Check
                </h3>
                <p>📦 Verifying stock and confirming your order…</p>
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Order Dispatched
                </h3>
                <p>🚚 Your order has been dispatched from warehouse</p>
              </>
            )}

            {step === 4 && (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Tracking & Updates
                </h3>
                <p>📍 Tracking link shared via SMS / WhatsApp</p>
              </>
            )}

            {step === 5 && (
              <>
                <h3 className="text-lg font-semibold mb-4">
                  Delivery Completed
                </h3>
                <p className="text-green-600 font-semibold">
                  🎉 Your mattress has been delivered successfully!
                </p>
              </>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-6 border-t flex justify-end gap-3">
            {step < 5 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg"
              >
                Continue
              </button>
            ) : (
              <button
                onClick={onClose}
                className="px-6 py-2 bg-green-600 text-white rounded-lg"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
