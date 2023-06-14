import React, { useState, useRef } from 'react';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from './Components/Navbars';
import Result from './Components/Result';
import SliderSelect from './Components/SliderSelect';
import TenureSelect from './Components/TenureSelect';
import PieChartComponent from './PieChartComponent';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import ReactToPrint from 'react-to-print';
import './Components/Calculator.css'

function Calculator() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  const contentRef = useRef(null);
  // eslint-disable-next-line
  const generatePDF = async () => {
    const content = contentRef.current;

    try {
      const canvas = await html2canvas(content, {
        scrollY: -window.scrollY,
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'pt', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('preview.pdf');
    } catch (error) {
      console.error('Error generating PDF preview', error);
    }
  };

  return (
    <div>
      <Navbar />

      <div className='pdf-content' ref={contentRef}>
         <h3>Mortgage Calculator!</h3>
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
      <div>
        <ReactToPrint //enables the printing functionality. it takes the content prop which references the contentRef.current and the trigger prop triggering the printing option
          content={() => contentRef.current}
          trigger={() => <button>Download</button>}
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
        {/* <button onClick={generatePDF}>download</button> */}
      </div>
    </div>
  );
}

export default Calculator;
