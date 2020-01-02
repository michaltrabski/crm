import React, { useState, useEffect } from "react";
import { reports } from "../data/data";
import { useLocation, useHistory } from "react-router-dom";
import Report from "./Report";

const ReportWrapper = () => {
  const [report, setReport] = useState(false);
  let { pathname } = useLocation();
  let history = useHistory();

  useEffect(() => {
    let foundReport = reports.find(rep => rep.slug === pathname);
    foundReport ? setReport(foundReport) : history.push("/");
  }, []);

  return report && <Report report={report} />;
};

export default ReportWrapper;
