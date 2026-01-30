export default function ChatOptions({ options = [], onSelect }) {
  return (
    <div className="p-3 bg-white">
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, index) => {
          const value =
            typeof option === "object" ? option.value : option;

          const label =
            typeof option === "object" ? option.label : option;

          return (
            <button
              key={`${value}-${index}`}
              onClick={() => onSelect(option)}
              className="
                py-2 text-sm rounded-xl border
                bg-white text-center
                hover:bg-blue-50 hover:border-blue-300
                transition
                shadow-sm hover:shadow
              "
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}




