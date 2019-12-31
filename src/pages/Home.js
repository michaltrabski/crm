import React from "react";
import { reports } from "./../data/data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Lista dostępnych generatorów rapotów:</h1>
      <div className="list-group">
        {reports.map((r, i) => (
          <Link to={r.slug} className="list-group-item list-group-item-action">
            <strong>{r.title}</strong>
            <br />
            <span>{r.short_desc}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Home;
