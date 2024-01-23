'use client'
import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/65ad73058d261e1b5f56272e/1hkmoijtb";
    script.charset = "UTF-8";
    script.setAttribute('crossorigin', '*');

    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkToWidget;
