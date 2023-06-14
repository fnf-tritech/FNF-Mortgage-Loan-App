import React from "react";
import { Grid, Container } from "@mui/material";
import Navbar from "./Components/Navbars";
import Result from "./Components/Result";
import SliderSelect from "./Components/SliderSelect";
import TenureSelect from "./Components/TenureSelect";
import PieChart from "./Components/PieChartComponent";

const PreviewPage = ({ data }) => {
  return (
<div>
<Navbar />
<h3>Mortgage Calculator</h3>
<div className="pdf-content">
<Container maxWidth="xl" sx={{ marginTop: 4 }}>
<Grid container spacing={8} alignItems="center">
<Grid item xs={12} md={6}>
<SliderSelect data={data} />
<TenureSelect data={data} />
</Grid>
<Grid item xs={12} md={6}>
<Result data={data} />
<PieChart data={data} />
</Grid>
</Grid>
</Container>
</div>
</div>
  );
};

 

export default PreviewPage;