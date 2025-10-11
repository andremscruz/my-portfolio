import React, {useState, useEffect} from 'react';
import { FaFileDownload } from "react-icons/fa";

function DownloadButton (){
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    
    const interval = setInterval(() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000); 
    }, 7000);
    
    const initialTimeout = setTimeout(() => setAnimate(false), 1000);

    return () => {
        clearInterval(interval);
        clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <a href="/AndreCruzResume.pdf" download title="Download resume">
      <FaFileDownload className={`${animate ? 'bounce' : ''} resume-expandable`} style={{ fontSize: '25px', marginBottom: '15px' }}/>
    </a>
  );
};

export default DownloadButton;