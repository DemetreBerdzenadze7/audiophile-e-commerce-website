import type { UseFormRegisterReturn } from "react-hook-form";
import { InputMask } from "@react-input/mask";

interface FormFieldProps {
  label: string;
  placeholder: string;
  registration: UseFormRegisterReturn;
  error?: string;
  type?: string;
  mask?: string;
  className?: string;
}

const FormField = ({
  label,
  placeholder,
  registration,
  error,
  type = "text",
  mask,
  className = "",
}: FormFieldProps) => {
  const id = registration.name;
  const inputClasses = `h-14 px-6 rounded-card text-input font-bold caret-orange placeholder:text-black/40 outline-none transition-colors ${
    error ? "border-2 border-red" : "border border-gray-border focus:border-orange"
  }`;

  return (
    <div className={`flex flex-col gap-2.25 ${className}`}>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={id} className={`text-label font-bold ${error ? "text-red" : ""}`}>
          {label}
        </label>
        {error && <p className="text-label font-medium text-red">{error}</p>}
      </div>

      {mask ? (
        <InputMask
          id={id}
          type={type}
          placeholder={placeholder}
          mask={mask}
          replacement={{ _: /\d/ }}
          aria-invalid={!!error}
          className={inputClasses}
          {...registration}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          className={inputClasses}
          {...registration}
        />
      )}
    </div>
  );
};

export default FormField;
