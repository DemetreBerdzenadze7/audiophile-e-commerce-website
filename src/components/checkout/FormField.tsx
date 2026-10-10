interface FormFieldProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
}

const FormField = ({ label, name, placeholder, type = "text", className = "" }: FormFieldProps) => {
  return (
    <div className={`flex flex-col gap-2.25 ${className}`}>
      <label htmlFor={name} className="text-label font-bold">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="h-14 px-6 border border-gray-border rounded-card text-input font-bold caret-orange placeholder:text-black/40 outline-none focus:border-orange transition-colors"
      />
    </div>
  );
};

export default FormField;
