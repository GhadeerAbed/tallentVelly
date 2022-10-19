const fixedInputClass =
  "rounded-md w-full  block px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none  sm:text-sm";
export default function Input({
  handleChange,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
}) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor}>
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass+customClass}
        placeholder={placeholder}
  
      />
    </div>
  );
}
