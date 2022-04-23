import React from "react";

import { Textarea } from "./BasicTextarea.styles";

const BasicTextarea = ({ id, value, placeholder, onChange, onBlur, bigFont }) => {
  return (
    <Textarea
      value={value}
      onChange={onChange}
      id={id}
      onBlur={onBlur}
      placeholder={placeholder}
      bigFont={bigFont}
    />
  );
};

export default BasicTextarea;
