import { useState } from "react";

const LazyLoadimage = ({ src, alt, placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      {!isLoaded && (
        <img 
        width={250}
        height={230}
          src={placeholder}
          alt="loading..."
          style={{ position: "absolute", top: 0, left: 0, height: "auto" }}
        />
      )}
      <img
        width={250}
        height={230}
        src={src}
        alt={alt}
        style={{
          height: "auto",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out", 
        }}
        onLoad={() => setIsLoaded(true)} 
        onError={() => setIsLoaded(false)} 
      />
    </div>
  );
};

export default LazyLoadimage;
