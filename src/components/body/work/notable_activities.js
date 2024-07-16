import React, { useState } from "react";

function NotableActivities() {
  return (
    <div className="notable-extracir-card">
      <h3>Achievements</h3>
      <div>
        <ul className="activities-list">
          <li>
            President at Bennett Cloud Computing Club{" "}
            <p2>(Jan 2022 - April 2022)</p2>
            <div className="activities-description">
              <ul>
                <li>
                  Organized various events on Cloud Computing like hackathons
                  and workshops to enhance students' knowledge on cloud
                  computing and to create awareness on Cloud courses in
                  university.
                </li>
                <li>
                  Led all the club members in an organized manner by assigning
                  tasks to each individual and verifying their performance.
                </li>
              </ul>
            </div>
          </li>
          <li>
            Bennett Dean’s List Scholarship: Distinguished as one of 11
            recipients from over 500 students, awarded a US$17,000 merit based
            scholarship for exceptional academic performance.
          </li>
          <li>
            "For Her" Project: Selected as one of the best projects of the
            semester and shortlisted for the Industrial Project Expo.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotableActivities;
