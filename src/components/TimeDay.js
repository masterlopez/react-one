import React from "react";

function TimeDay() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756F";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "#2E0927";
  } else {
    timeOfDay = "night";
    styles.color = "#D90000";
  }
  return (
    <div>
      <h2 style={styles}>Good {timeOfDay}!</h2>
    </div>
  );
}

export default TimeDay;
