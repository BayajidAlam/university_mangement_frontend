"use client";

import { Input, Select } from "antd";
import { type } from "os";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
};
const FormSelectField = ({
  name,
  size,
  value,
  placeholder,
  label,
  options,
  defaultValue,
}: SelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            size={size}
            onChange={onChange}
            options={options}
            value={value}
            style={{
              width: "100%",
            }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
