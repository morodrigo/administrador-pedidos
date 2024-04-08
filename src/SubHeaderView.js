// SubHeaderView.js
import React from "react";
import "./SubHeaderView.css";
function SubHeaderView() {
  return (
    <div className="overflow-auto">
      <div className="sub-header d-flex align-items-center">
        <div className="badge me-2 d-flex align-items-center">
          <span>Sin atender</span>
          <span className="badge ms-2 text-bg-danger">11</span>
        </div>
        <div className="badge me-2 d-flex align-items-center">
          <span>En proceso</span>
          <span className="badge ms-2 text-bg-danger">2</span>
        </div>
        <div className="badge me-2 d-flex align-items-center px-4">
          <span>Atendidos</span>
          <span className="badge ms-2 text-bg-danger"></span>
        </div>
        <div className="badge me-2 d-flex align-items-center px-4">
          <span>Promo</span>
          <span className="badge ms-2 text-bg-danger"></span>
        </div>
        <div className="badge me-2 d-flex align-items-center px-4">
          <span>Tu menú</span>
          <span className="badge ms-2 text-bg-danger"></span>
        </div>
      </div>
    </div>
  );
}

export default SubHeaderView;
