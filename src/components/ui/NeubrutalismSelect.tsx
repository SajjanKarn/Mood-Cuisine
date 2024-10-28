// components/NeubrutalismSelect.tsx
"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface NeubrutalismSelectProps {
  options: { label: string; value: string }[];
  placeholder: string;
  onChange?: (value: string) => void;
  selectedValue?: string;
  name?: string;
  // eslint-disable-next-line
  required?: boolean;
}

const NeubrutalismSelect: React.FC<NeubrutalismSelectProps> = ({
  name,
  options,
  placeholder,
  onChange = () => {},
  selectedValue = "",
  required = false,
}) => {
  return (
    <Select
      name={name}
      onValueChange={onChange}
      value={selectedValue || undefined}
      required={required}
    >
      <SelectTrigger className="w-full neubrutalism-border neubrutalism-shadow rounded-lg bg-customPrimary text-black font-semibold font-space">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-customPrimary border-black font-space font-semibold">
        {options.map((option) => (
          <SelectItem
            key={option.value}
            value={option.value}
            className="hover:bg-black hover:text-white"
          >
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default NeubrutalismSelect;
