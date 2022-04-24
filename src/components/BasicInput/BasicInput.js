import React from "react";

import { Input } from "./BasicInput.styles";

const BasicInput = ({ id, placeholder, type, value, onChange, disabled, fullWidth, maxLength, onBlur }) => {
  return (
    <Input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      spellCheck="false"
      disabled={disabled}
      fullWidth={fullWidth}
      maxLength={maxLength}
      onBlur={onBlur}
      autoComplete="off"
    />
  );
};

export default BasicInput;
