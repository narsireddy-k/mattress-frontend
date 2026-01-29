export default function CustomerDetailsForm({ data, onChange }) {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        value={data.name}
        onChange={(e) => onChange("name", e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={data.phone}
        onChange={(e) => onChange("phone", e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <input
        type="email"
        placeholder="Email"
        value={data.email}
        onChange={(e) => onChange("email", e.target.value)}
        className="w-full p-3 border rounded-lg"
      />

      <textarea
        placeholder="Delivery Address"
        value={data.address}
        onChange={(e) => onChange("address", e.target.value)}
        className="w-full p-3 border rounded-lg"
        rows={3}
      />
    </div>
  );
}
