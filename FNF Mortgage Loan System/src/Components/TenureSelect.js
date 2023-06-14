import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

 

const TenureSelect = ({ data, setData, disabled }) => {
  const handleChange = (event) => {
    if (!disabled) {
      setData({ ...data, loanTerm: event.target.value });
    }
  };

 

  return (
<FormControl fullWidth sx={{ position: "absolute", top: "1000px",width:"333px" }}>
<InputLabel id="a">Tenure</InputLabel>
<Select
        labelId="a"
        id="a"
        value={data.loanTerm}
        label="Tenure"
        defaultValue={5}
        onChange={handleChange}
        disabled={disabled} // Add the disabled prop
>
<MenuItem value={5}>5 years</MenuItem>
<MenuItem value={10}>10 years</MenuItem>
<MenuItem value={15}>15 years</MenuItem>
<MenuItem value={20}>20 years</MenuItem>
<MenuItem value={25}>25 years</MenuItem>
</Select>
</FormControl>
  );
};

 

export default TenureSelect;