import React, { useEffect, useState } from "react";
import Summary from "../Summary/Summary";
import Detail from "../Detail/Detail";
import './Developer.css';

const Developer = () => {
  
  const [details, setDetails] = useState([]);
  const [ summary , setSummary ] = useState([]);

  const handleAddDetail=(detail)=>{
      const newSummary=[ ...summary, detail ]
      setSummary(newSummary)
  }

  useEffect(() => {
    fetch("/fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  return (
    <div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              {
              details.map(detail=>  
              <Detail
                  detail={detail}
                  handleAddDetail={handleAddDetail}
              >
              </Detail>)
              }
            </div>
          </div>
          <div className="col-md-3">
              <Summary
                  summary={summary}
              >
              </Summary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;