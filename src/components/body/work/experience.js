import React, { useState } from "react";

function Experience() {
  return (
    <div className="notable-extracir-card">
      <h3>Internship Experience</h3>
      <div></div>
      <div className="experience-title">- Software Development Engineer</div>
      <p2>Greenstand (Jan 2025 - Apr 2025)</p2>
      <ul>
        <li>
          Implemented secure authentication system using Node.js and Keycloak,
          deploying the containerized microservice on Kubernetes in Digital
          Ocean with Ambassador API Gateway for optimized routing and
          scalability.
        </li>
      </ul>

      <div className="experience-title">- Software Developer Intern</div>
      <p2>Superstars, Inc. (August 2024 - December 2024)</p2>
      <ul>
        <li>
          Improved app scalability and reduced code redundancy by 35% through
          the development of reusable Angular components leveraging content
          projection, enhancing code maintainability and enabling more efficient
          development.
        </li>
        <br />
        <li>
          Rebuilt critical application interfaces using Angular components,
          TypeScript, and CSS, implementing responsive design patterns and
          resolving UI-related bugs to improve UI architecture and cross-device
          compatibility.
        </li>
        <br />
        <li>
          Actively contributed to Agile development, attending sprints,
          implementing tasks, and ensuring timely project progress.
        </li>
      </ul>

      <br />

      <div>- Full-stack Developer Intern</div>
      <p2>Indpower (Electrical Services Company) (Jan 2023 - July 2023)</p2>
      <ul>
        <li>
          Developed a company website using React.js, implementing optimization
          techniques that improved performance by 45%, achieving perfect
          Lighthouse performance scores across all categories.
        </li>
        <br />
        <li>
          Architected a modular SEO architecture with React Helmet and
          TypeScript that dynamically constructs structured JSON-LD data across
          pages, significantly improving search rankings and increasing client
          inquiries for the company.
        </li>
      </ul>

      <br />

      <div>- Associate Software Engineer</div>
      <p2>Osmosys Software Solutions (July 2022 - December 2022)</p2>
      <ul>
        <li>
          Developed scalable APIs in .NET C# using layered architecture with
          Entity Framework and Dapper for complex data queries.
        </li>
        <br />
        <li>
          Strengthened MSSQL database security by implementing parameterized
          queries and input sanitization with RBAC across 30+ critical
          operations, ensuring secure handling of sensitive policyholder data.
        </li>
        <br />
        <li>
          Developed stored procedures for complex database operations,
          optimizing data aggregation for insurance claims processing and
          temporary accommodation matching.
        </li>
        <br />
        <li>
          Developed responsive web applications using Angular, CSS3, and
          TypeScript, ensuring seamless cross-platform functionality, and
          optimized page load times through CSS minification and Lazy loading.
        </li>
        <br />
        <li>
          Architected an automated ETL process using Azure Data Factory and
          Azure Functions, orchestrating seamless ingestion and decryption of
          PGP-encrypted files from SFTP to Azure Blob Storage, resulting in 70%
          faster CSV data loading into SQL.
        </li>
      </ul>
    </div>
  );
}
export default Experience;
