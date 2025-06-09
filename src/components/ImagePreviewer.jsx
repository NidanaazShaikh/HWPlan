import React, { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Button } from "@mui/material";

const ImagePreviewer = ({ children }) => {
  const captureRef = useRef();
  const [showPreview, setShowPreview] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handlePreviewImage = async () => {
    setShowPreview(true);

    setTimeout(async () => {
      if (!captureRef.current) return;
      const canvas = await html2canvas(captureRef.current, {
        scale: 2,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      setImageURL(imgData);
    }, 100); // wait for rendering
  };

  const handleDownloadImage = () => {
    if (!imageURL) return;
    const link = document.createElement("a");
    link.href = imageURL;
    link.download = "Homework_Plan.png";
    link.click();
  };

  return (
    <div style={{ marginTop: 10, display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button
        variant="outlined"
        onClick={handlePreviewImage}
        // style={{ margin: "5px 5px 5px 5px" }}
      >
        Preview Img
      </Button>
      <Button
        variant="outlined"
        onClick={handleDownloadImage}
        disabled={!imageURL}
        // style={{ margin: "5px 5px 5px 5px" }}
      >
        Download Img
      </Button>

      {/* 📸 Hidden DOM to capture */}
      <div
        ref={captureRef}
        style={{ position: "absolute", top: "-9999px", left: "-9999px" }}
      >
        {children}
      </div>

      {/* 👀 Preview visible only when user clicks */}
      {showPreview && imageURL && (
        <div style={{ marginTop: "20px", textAlign: "center", color: "#003366" }}>
          <h4>Image Preview:</h4>
          <img
            src={imageURL}
            alt="Homework Preview"
            style={{ width: "90%", border: "1px solid #ccc" }}
          />
        </div>
      )}
    </div>
  );
};

export default ImagePreviewer;
