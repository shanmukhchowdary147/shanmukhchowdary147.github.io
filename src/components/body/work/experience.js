import React, { useState } from "react";

function Experience() {
  return (
    <div className="notable-extracir-card">
      <h3>Internship Experience</h3>
      <div></div>
      <div>- Associate Software Engineer</div>
      <p2>Osmosys Software Solutions (July 2022 - December 2022)</p2>
      <ul>
        <li>
          Developed responsive web applications using HTML5, CSS3, and
          JavaScript, ensuring seamless cross-platform functionality, and
          optimized page load times by 20% through CSS minification and
          asynchronous JavaScript loading.
        </li>
        <br />
        <li>
          Developed scalable APIs in .NET C#, utilizing a layered architecture
          to incorporate business logic and data access, delivering efficient
          and maintainable solutions for a complex project.
        </li>
        <br />
        <li>
          Enhanced system performance through optimizing MSSQL data retrieval
          and manipulation using Stored Procedures.
        </li>
        <br />
        <li>
          Architected and implemented an automated ETL process in Azure Data
          Factory, efficiently transferring PGP-encrypted files from an SFTP to
          Azure Blob Storage and reducing processing time through seamless
          ingestion and decryption pipeline orchestration.
        </li>
        <br />
        <li>
          Enhanced data transfer and decryption efficiency by integrating Azure
          Functions with Azure Data Factory, accelerating CSV data loading into
          SQL by 30% and boosting data accessibility.
        </li>
      </ul>
    </div>
  );
}
export default Experience;
