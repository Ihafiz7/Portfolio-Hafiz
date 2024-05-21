import { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';


const PdfViewer = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();
    const [numPages, setNumPages] = useState(null);
    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
  return (
    <div className="grid place-items-center border border-gray-400">
      <Document
        file='/Resume/Resume.pdf'
        onLoadSuccess={onDocumentLoadSuccess}
        className="w-full h-full"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1}  className="w-full h-auto" />
        ))}
      </Document>
    </div>
  )
}

export default PdfViewer