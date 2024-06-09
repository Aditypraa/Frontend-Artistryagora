/* eslint-disable react/prop-types */
const Input = ({ type, name, value, placeholder, onChange, className }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`${className} w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg`}
    />
  );
};

export default Input;
