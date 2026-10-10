interface PaymentOptionProps {
  label: string;
  value: string;
  defaultChecked?: boolean;
}

const PaymentOption = ({ label, value, defaultChecked = false }: PaymentOptionProps) => {
  return (
    <label className="flex items-center gap-4 h-14 px-4 border border-gray-border rounded-card text-input font-bold cursor-pointer hover:border-orange has-checked:border-orange transition-colors">
      <input
        type="radio"
        name="paymentMethod"
        value={value}
        defaultChecked={defaultChecked}
        className="grid place-content-center size-5 border border-gray-border rounded-full appearance-none cursor-pointer before:size-2.5 before:rounded-full before:bg-orange before:scale-0 checked:before:scale-100 before:transition-transform"
      />
      {label}
    </label>
  );
};

export default PaymentOption;
