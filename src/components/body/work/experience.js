import React, { useState } from "react";

function Experience() {
  return (
    <div className="notable-extracir-card">
      <h3>Internship Experience</h3>
      <div>- Osmosys Software Solutions</div>
      <p2>(July 2022 - December 2022)</p2>
      <ul>
        <li>
          Developed scalable Web APIs using C# .NET, incorporating business
          logic to deliver efficient and reliable solutions for a complex
          project.
        </li>
        <br />
        <li>
          {" "}
          Optimized data retrieval and manipulation in SQL database using Stored
          Procedures, resulting in improved system performance.
        </li>
        <br />
        <li>
          Worked on Azure tasks to ETL data from the sFTP server to Azure SQL
          database using Azure Data Factory.
        </li>
        <br />
        <li>
          Written Azure functions in c# language to decrypt the PGP encrypted
          files in Azure Blob storage.
        </li>
        <br />
        <li>
          Completed the assigned tasks on time and as per the requirement.{" "}
        </li>
      </ul>
    </div>
  );
}
export default Experience;
