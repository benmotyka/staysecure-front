import React from "react";
import { Container, SlidesWrapper, Slide } from "./DownloadCourses.styles";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { render } from "react-dom";

// doesnt work very well, use for testing purposes only
const DownloadCourses = (props) => {
  const print = () => {
    const slides = props.data.map((item) => <div className="slide">{item.slide}</div>);

    const wrapper = document.getElementById("slidesWrapper")
    wrapper.setAttribute("style", "display: block;");

    const slidesToRender = React.createElement('div', {}, [slides]);
    render(slidesToRender, wrapper);

    const input = document.getElementsByClassName("slide");
    const input2 = Array.from(input);
    const pdf = new jsPDF();
    input2.forEach(item => {
        item.setAttribute("style", "width: 210mm; height: 297mm; background-color: #2B2E4A;");
        html2canvas(item).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.addPage();
          });
    })
    wrapper.removeAttribute("style");
    setTimeout(() => {
        pdf.save("download.pdf");
    },5000)
  };

  return (
    <Container onClick={print}>
        download
      <SlidesWrapper id="slidesWrapper"></SlidesWrapper>
    </Container>
  );
};

export default DownloadCourses;
