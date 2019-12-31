import React from "react";
import { reports } from "./../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <ul>
        {reports.map((r, i) => (
          <li key={i}>
            <h2>
              <Link to={r.slug}>{r.title}</Link>
            </h2>
            <p>{r.short_desc}</p>
            <p className="text-secondary">
              <span>Wersja: {r.version}</span>,{" "}
              <span>Excel: {r.excel_name}</span>
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
