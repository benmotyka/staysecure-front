import React from "react";

import { Textarea } from "./BasicTextarea.styles";

const BasicTextarea = ({ id, value, onChange, onBlur }) => {
  return <Textarea value={value} onChange={onChange} id={id} onBlur={onBlur} />;
};

export default BasicTextarea;
