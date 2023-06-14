import React, { useState, useRef } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './NavBar';
import Result from './Components/Result';
import SliderSelect from './Components/SliderSelect';
import TenureSelect from './Components/TenureSelect';
import PieChartComponent from './PieChartComponent';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactToPrint from 'react-to-print';
import './Components/TenureSelect'
import './Components/Calculator.css'
import Header from './Header';
function Calculator() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

 

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const contentRef = useRef(null);

 

  const generatePDF = async () => {
    const content = contentRef.current;
    try {
      const canvas = await html2canvas(content, {
        scrollY: -window.scrollY,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      // eslint-disable-next-line
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(
        imgData,
        'PNG',
        10,
        10,
        pdf.internal.pageSize.getWidth() - 20,
        0
      );
      pdf.save('doc.pdf');
    } catch (error) {
      console.error('Error generating PDF ', error);
    }
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

 

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div>
       <Header/>
      <Navbar />
     
<h3>Mortgage Calculator!</h3>
      {!isPreviewOpen && (
<>
<button onClick={openPreview}>Download</button>
<div className='pdf-content' ref={contentRef}>
<Container maxWidth='xl' sx={{ marginTop: 4 }}>
<Grid container spacing={8} alignItems='center'>
<Grid item xs={12} md={6}>
<SliderSelect data={data} setData={setData} />
<TenureSelect data={data} setData={setData} />
</Grid>
<Grid item xs={12} md={6}>
<Result data={data} />
<PieChartComponent data={data} />
</Grid>
</Grid>
</Container>
</div>
</>
      )}
      {isPreviewOpen && (
<div>
          <h3>Preview</h3>
          <div>
<button class ="right" onClick={generatePDF}>Download</button>
<button class = "right" onClick={closePreview}>Cancel</button>
</div>
<div className='pdf-content' ref={contentRef}>
<Container maxWidth='xl' sx={{ marginTop: 4 }}>
<Grid container spacing={8} alignItems='center'>
<Grid item xs={12} md={6}>
<SliderSelect data={data} disabled />
<TenureSelect data={data} disabled />
</Grid>
<Grid item xs={12} md={6}>
<Result data={data} />
<PieChartComponent data={data} />
</Grid>
</Grid>
</Container>
          </div>
          <div>

        <ReactToPrint //enables the printing functionality. it takes the content prop which references the contentRef.current and the trigger prop triggering the printing option

          content={() => contentRef.current}

          trigger={() => <button>Print</button>}

          onBeforeGetContent={() => {

            const inputElements = contentRef.current.querySelectorAll('input');

            inputElements.forEach((input) =>

              input.setAttribute('readonly', 'readonly')

            );

          }}

          onAfterPrint={() => {

            const inputElements = contentRef.current.querySelectorAll('input');

            inputElements.forEach((input) => input.removeAttribute('readonly'));

          }}

        />

        

      </div>

</div>
      )}
</div>
  );
}

 

export default Calculator;








