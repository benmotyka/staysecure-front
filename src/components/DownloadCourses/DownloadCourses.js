import React from 'react';
import { Container} from './DownloadCourses.styles'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const DownloadCourses = () => {
    const print = () => {
        console.log('VVVVVVVVVVVVV')
        const input = document.getElementById('divToPrint')
        input.setAttribute("style", "width: 210mm; height: 297mm;")
        console.log(input)
        html2canvas(input)
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save("download.pdf");
        })
        input.removeAttribute("style")

    }

  return <Container><button onClick={print}>download</button></Container>;
};

export default DownloadCourses;
