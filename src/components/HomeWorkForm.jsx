import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo1 from "../assets/images/logo1.png";
import logo2 from "../assets/images/logo2.png";
import { Button } from "@mui/material";
import ImagePreviewer from "./ImagePreviewer";
// import './App.css';

const HomeWorkForm = () => {
  const [plannerData, setPlannerData] = useState([
    { subject: "", classwork: "", homework: "" },
  ]);
  const [headerInfo, setHeaderInfo] = useState({
    date: "",
    day: "Monday",
    className: "",
    section: "Explorer",
  });

  const handleInputChange = (index, field, value) => {
    const updated = [...plannerData];
    updated[index][field] = value;
    setPlannerData(updated);
  };

  const handleHeaderChange = (e) => {
    const { name, value } = e.target;
    setHeaderInfo({ ...headerInfo, [name]: value });
  };

  const addRow = () => {
    setPlannerData([
      ...plannerData,
      { subject: "", classwork: "", homework: "" },
    ]);
  };
  const generatePDF = () => {
                        const doc = new jsPDF("p", "mm", "a4");

                        doc.addImage(logo1, "PNG", 15, 10, 25, 25);
                        doc.addImage(logo2, "PNG", 155, 10, 40, 20);
                        doc.setFontSize(20);
                        doc.text("Creative English School", 100, 20, { align: "center" });
                        doc.setFont("bold");
                        doc.line(60, 22, 140, 22);
                        doc.setFontSize(12);
                        doc.text(`Date: ${headerInfo.date}`, 15, 45);
                        doc.text(`Day: ${headerInfo.day}`, 15, 52);
                        doc.text(`Class: ${headerInfo.className}`, 157, 45);
                        doc.text(`Section: ${headerInfo.section}`, 157, 52);

                        const tableData = plannerData.map((item, index) => [
                          index + 1,
                          (item.subject || "").trim(),
                          (item.classwork || "").replace(/\n/g, "\n"),
                          (item.homework || "").replace(/\n/g, "\n"),
                        ]);

    autoTable(doc, {
      startY: 60,
      styles: {
        cellWidth: "wrap",
        fontSize: 14,
        valign: "top",
      },
      //       textColor: "#003366",     // text color for all cells
      //       lineColor: "#ff1493",     // border color
      //       lineWidth: 0.2,
      // },
      // headStyles: {
      //   fillColor: "#e3f2fd",     // header background color (light blue)
      //   textColor: "#003366",     // header text color
      //   fontStyle: "bold",
      // },
      // bodyStyles: {
      //   fillColor: "#ffffff",     // row background (white)
      //   textColor: "#000000",     // row text color
      // },
      // alternateRowStyles: {
      //   fillColor: "#f9f9f9",     // alternate row background
      // },
      columnStyles: {
        0: { cellWidth: 10 },
        1: { cellWidth: 30 },
        2: { cellWidth: 70 },
        3: { cellWidth: 70 },
      },
      head: [["No.", "Subject", "Classwork", "Homework"]],
      body: tableData,
    });

    doc.save("HW_plan.pdf");
  };

  return (
    <div className="app-container" style={{ maxWidth: 700, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      {" "}
      <h2 style={{ color: "#003366" }}>Homework Planner</h2>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          name="date"
          placeholder="Date (e.g. 29/03/25)"
          onChange={handleHeaderChange}
          style={{ width: "100%", maxWidth: 200 }}
        />

        <select name="day"
          onChange={handleHeaderChange}
          style={{ margin: "10px" }}
        >
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="className"
          placeholder="Class"
          onChange={handleHeaderChange}
          style={{ width: "100%", maxWidth: 200 }}
          
        />

        <select
          name="section"
          onChange={handleHeaderChange}
          style={{ margin: "10px" }}
        >
          {["Explorer", "Inquirer", "Discoverer"].map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
      <div className="table-wrapper" style={{ overflowX: "auto" }}>
      <table style={{ minWidth: 600, width: "100%", borderCollapse: "collapse" }} >
        {/* border="1" width="100%" cellPadding=""     */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Subject</th>
            <th>Classwork</th>
            <th>Homework</th>
          </tr>
        </thead>
        <tbody>
          {plannerData.map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <textarea
                  value={item.subject}
                  onChange={(e) =>
                    handleInputChange(idx, "subject", e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </td>
              <td>
                <textarea
                  value={item.classwork}
                  onChange={(e) =>
                    handleInputChange(idx, "classwork", e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </td>
              <td>
                <textarea
                  value={item.homework}
                  onChange={(e) =>
                    handleInputChange(idx, "homework", e.target.value)
                  }
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
     <div style={{ marginTop: 10, display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Button
        variant="outlined"
        onClick={addRow}
        // style={{ margin: "5px 5px 5px 5px" }}
      >
        Add Lecture
      </Button>
      <Button
        variant="outlined"
        onClick={generatePDF}
        // style={{ margin: "5px 5px 5px 50px" }}
      >
        Download PDF
      </Button>
      </div>
      
       {/* 👇 Wrapped with ImagePreviewer 👇 */}
    <ImagePreviewer>
  <div style={{ padding: "10px", backgroundColor: "#fff", fontSize: "14px" }}>
    <div style={{margin:"10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <img src={logo1} alt="Logo 1" style={{height: "60px", marginRight:"8px" }} />
      <h5 style={{ textAlign: "center", flex: 1 }}>Creative English School</h5>
      <img src={logo2} alt="Logo 2" style={{height: "40px", marginLeft:"8px" }} />
    </div>

  <div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
  gap: "12px",
  marginTop: "10px",
  marginBottom: "10px",
  alignItems: "center"
}}>
  <div style={{ display: "flex", justifyContent: "flex-start", marginLeft:"8px" }}>
    <strong>Date:&nbsp;</strong><span>{headerInfo.date}</span>
  </div>
  <div style={{ display: "flex", justifyContent: "flex-start", marginLeft:"70px" }}>
    <strong>Class:&nbsp;</strong><span>{headerInfo.className}</span>
  </div>
  <div style={{ display: "flex", justifyContent: "flex-start", marginLeft:"8px" }}>
    <strong>Day:&nbsp;</strong><span>{headerInfo.day}</span>
  </div>
  <div style={{ display: "flex", justifyContent: "flex-start", marginLeft:"70px" }}>
    <strong>Section:&nbsp;</strong><span>{headerInfo.section}</span>
  </div>
</div>

    <table style={{
      width: "100%",
      borderCollapse: "collapse",
    }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black", padding: "6px" }}>No.</th>
          <th style={{ border: "1px solid black", padding: "6px" }}>Subject</th>
          <th style={{ border: "1px solid black", padding: "6px" }}>Classwork</th>
          <th style={{ border: "1px solid black", padding: "6px" }}>Homework</th>
        </tr>
      </thead>
      <tbody>
        {plannerData.map((item, idx) => (
          <tr key={idx}>
            <td style={{ border: "0.5px solid black", padding: "6px" }}>{idx + 1}</td>
            <td style={{ border: "0.5px solid black", padding: "6px" }}>{item.subject}</td>
            <td style={{ border: "0.5px solid black", padding: "6px" }}>{item.classwork}</td>
            <td style={{ border: "0.5px solid black", padding: "6px" }}>{item.homework}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </ImagePreviewer>
    </div>
  );
};

export default HomeWorkForm;
