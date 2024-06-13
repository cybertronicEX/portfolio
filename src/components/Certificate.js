import React, { useState } from 'react';
import '../styles/Certificate.css';
import Certificate1Image from '../assets/DevOpsCert/DevtownDevops.jpg';
import Certificate2Image from '../assets/DevOpsCert/GoogleDevOps.jpg';
import Certificate3Image from '../assets/DevOpsCert/MSDevOps.jpg';
import Certificate4Image from '../assets/FrontendCert/DevtownFE.jpg';
import Certificate5Image from '../assets/FrontendCert/GoogleFE.jpg';
import Certificate6Image from '../assets/FrontendCert/MSFE.jpg';
import Certificate1PDF from '../assets/DevOpsCert/DevtownDevops.pdf';
import Certificate2PDF from '../assets/DevOpsCert/GoogleDevOps.pdf';
import Certificate3PDF from '../assets/DevOpsCert/MSDevOps.pdf';
import Certificate4PDF from '../assets/FrontendCert/DevtownFE.pdf';
import Certificate5PDF from '../assets/FrontendCert/GoogleFE.pdf';
import Certificate6PDF from '../assets/FrontendCert/MSFE.pdf';

const certificates = [
  { id: 1, img: Certificate1Image, pdf: Certificate1PDF },
  { id: 2, img: Certificate2Image, pdf: Certificate2PDF },
  { id: 3, img: Certificate3Image, pdf: Certificate3PDF },
  { id: 4, img: Certificate4Image, pdf: Certificate4PDF },
  { id: 5, img: Certificate5Image, pdf: Certificate5PDF },
  { id: 6, img: Certificate6Image, pdf: Certificate6PDF },
];

const CertificateItem = ({ cert }) => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const handleViewPdf = (pdf) => {
    window.open(pdf, '_blank');
  };

  return (
    <div className="certificate-item">
      {loading && <div className="spinner"></div>}
      <img
        src={cert.img}
        alt="Certificate"
        onLoad={handleImageLoad}
        style={{ display: loading ? 'none' : 'block' }}
        className="certificate-image"
      />
      <button onClick={() => handleViewPdf(cert.pdf)}>View</button>
    </div>
  );
};

const Certificate = () => {
  return (
    <div className="certificate-container">
      <h2>Certificates</h2>
      <div className="certificate-grid">
        {certificates.map((cert) => (
          <CertificateItem key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certificate;
