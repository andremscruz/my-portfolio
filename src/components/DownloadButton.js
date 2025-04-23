import React, {useState, useEffect} from 'react';
import { FaFileDownload } from "react-icons/fa";

function DownloadButton (){
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 1000); // remove class after animation
      return () => clearTimeout(timeout);
    }, []);

  return (
    <a href="/AndreCruzResume.pdf" download title="Download resume">
      <FaFileDownload className={`${animate ? 'bounce' : ''} resume-expandable`} style={{ fontSize: '25px', marginBottom: '15px' }}/>
    </a>
  );
};

export default DownloadButton;