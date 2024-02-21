import React, { useState } from "react";

const Popup = ({ details, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose} style={{color: 'red', fontSize: '3vh', fontWeight: 'bolder'}}>X</button>
        <h2>Details</h2>
        <div className="details-grid">
          {details.map((dayDetails, index) => (
            <div key={index} className="details-row">
              <p>{dayDetails}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  const [popupDetails, setPopupDetails] = useState(null);

  const [detailsByWeek, setDetailsByWeek] = useState({
    "1:0": [
      
        "Inauguration",
        "Department address by Dean academics, HoD and staff members",
        "Grouping of students for various course modules",
        "Fundamentals and Instructions for each course"
      ],

      "1:1":[
        "Blood Smear and Blood group analysis",
        "Morphological studies – plant, animal and microorganism",
        "Quantitative analysis of carbohydrates",
        "Buffer preparation"
      ],
      "1:2":[
        "Microbial staining techniques -Gram Stain, Leishman Stain",
        "Isolation of DNA from various sources",
        "Sequence analysis" 
      ],
      "1:3":[
        "Microbial large scale culture techniques – Batch and fed batch cultivation",
        "Centrifugation, Chromatography",
        "Cell disruption – Ultrasonication"
      ],
      "1:4":[
        "Project Expo",
        "Prize Distribution",
        "Vote of thanks"
      ],

  });
  
  const x = ['Biology']

  const generateDates = (startWeek) => {
    const startDate = new Date("2024-04-15");
    startDate.setDate(startDate.getDate() + (startWeek - 1) * 7);

    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 4);

    const dates = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const handleWeekChange = (week) => {
    setSelectedWeek(week);
  };

  const handleViewDetails = (weekIndex) => {
    console.log(selectedWeek," ",weekIndex);
    const details = detailsByWeek[selectedWeek+":"+weekIndex];
    setPopupDetails(details);
  };

  const handleClosePopup = () => {
    setPopupDetails(null);
  };

  // const dates = generateDates(selectedWeek);
  const dates = [1,2,3,4,5]

  return (
    <div className="schedule-container" style={{ marginTop: '10vh', textAlign: 'center', padding:'2vh', background:'#fafafa', }}>
      <h2 style={{ fontSize: '3rem', background: 'linear-gradient(black, blue)', backgroundClip: 'text', WebkitTextFillColor: 'transparent', }}>Syllabus</h2>
      <div style={{ overflowX: 'auto' }}>
  <table style={{ width: "80%", margin: "0 auto", borderCollapse: "collapse", }}>
    <thead>
      <tr>
        {[1].map((week) => (
          <th key={week} onClick={() => handleWeekChange(week)} style={{ padding: "10px", textAlign: "center", cursor: "pointer", backgroundColor: selectedWeek === week ? "#007BFF" : "whitesmoke", transition: "background-color 0.5s", minWidth: "100px" }}>
            {x[week - 1]} <br />(Week {week})
          </th>
        ))}
      </tr>
    </thead>
  </table>
</div>


      <table style={{ width: "80%", margin: "20px auto", borderCollapse: "collapse", }}>
        <thead>
          <tr>
            {/* <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Date</th> */}
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Day</th>
            <th style={{ border: "1px solid black", padding: "8px", backgroundColor: "#007BFF", color: "#fff" }}>Syllabus</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "whitesmoke" }}>
              <td style={{ border: "1px solid black", padding: "8px" }}><strong>Day {date}</strong></td>
              {/* <td style={{ border: "1px solid black", padding: "8px" }}>{["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"][date.getDay()]}</td> */}
              <td style={{ border: "1px solid black", padding: "8px", textAlign:'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={() => handleViewDetails(index)} className="syllabus-link" style={{ display: "block", textAlign: "center", padding: "5px", textDecoration: "none", color: "#007BFF", cursor: "pointer", backgroundColor: "transparent", border: "none", transition: "background-color 0.3s", }}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {popupDetails && <Popup details={popupDetails} onClose={handleClosePopup} />}
    </div>
  );
};

export default Schedule;