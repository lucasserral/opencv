import React from "react";

type Props = {
  placeholder: string;
  setValue: Function;
  value: { [key: string]: string };
  keyValue: string;
  type: "shortText" | "paragraph";
  required?: boolean;
};

function updateValue(setValue: Function, keyValue: string, value: string) {
  setValue((prev: object) => ({ ...prev, [keyValue]: value }));
}

function OpenCvInput({
  placeholder,
  setValue,
  value,
  keyValue,
  type,
  required,
}: Props): JSX.Element {
  switch (type) {
    case "shortText":
      return (
        <input
          placeholder={placeholder}
          onChange={(evt) => updateValue(setValue, keyValue, evt.target.value)}
          value={value[keyValue] || ""}
          required={required}
        />
      );
      break;
    case "paragraph":
      return (
        <textarea
          placeholder={placeholder}
          onChange={(evt) => updateValue(setValue, keyValue, evt.target.value)}
          value={value[keyValue] || ""}
          required={required}
        />
      );

    default:
      break;
  }

  return <div>OpenCvInput</div>;
}

export default OpenCvInput;
