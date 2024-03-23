import React, { useState } from "react";

function Experience() {
  return (
    <div className="notable-extracir-card">
      <h3>Internship Experience</h3>
      <div>- Osmosys Software Solutions</div>
      <p2>(July 2022 - December 2022)</p2>
      <ul>
        <li>
          Developed scalable APIs using C# .NET, incorporating business logic to
          deliver efficient solutions for a complex project.
        </li>
        <br />
        <li>
          Designed and implemented responsive web applications using HTML, CSS,
          and JavaScript, ensuring seamless cross-platform functionality, and
          improved responsiveness by 20% by implementing lazy loading.
        </li>
        <br />
        <li>
          Enhanced system performance by 40% through optimizing MSSQL data
          retrieval and manipulation using Stored Procedures.
        </li>
        <br />
        <li>
          Automated an ETL process in Azure Data Factory, efficiently
          transferring PGP-encrypted files from an SFTP to Azure Blob Storage
          and reducing processing time by 40% through seamless ingestion and
          decryption pipeline orchestration.
        </li>
        <br />
        <li>
          Enhanced data transfer and decryption efficiency by integrating Azure
          Functions with Azure Data Factory, accelerating CSV data loading into
          SQL by 30% and boosting analytical data accessibility.
        </li>
      </ul>
    </div>
  );
}
export default Experience;
