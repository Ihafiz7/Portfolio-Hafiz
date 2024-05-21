const CvDownload = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/Resume/Resume.pdf';
        link.download = 'Resume of HAFIZ.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  return (
        <button onClick={handleDownload} className='btn btnh flex items-center justify-center gap-1'>Resume<span><img src="images/download.svg" alt="" className="w-8 h-8" /></span></button>
  )
}

export default CvDownload