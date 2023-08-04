import React from "react";
import { HotelProps } from "./State";
import { useNavigate } from "react-router-dom";

function Hotel(props: HotelProps) {
  const navigate = useNavigate();
  const onHotelDetails = (hotelId: number) => {
    navigate(`${hotelId}`);
    console.log("go to hotel details");
  };
  return (
    <div
      className="col-xs-12 col-sm-4 clickable"
      onClick={() => onHotelDetails(props.id)}
    >
      <div className="card border border-0" style={{width:"100%",height:"25em"}}>
        <img src={props.img} alt="" className="card-img-top img-fluid" style={{height:"60%"}}/>
        <div className="card-body">
          <h6 className="card-title" style={{ textAlign: "center" }}>
            <strong>{props.label}</strong>
          </h6>
          <p className="card-text opacity-50">
            {" "}
            <span>
              <i className="bi bi-geo-alt"></i>  <span>   </span>
              {props.lat}
            </span>{" "}
            <span>  {props.lng}</span>{" "}
          </p>
          <p className="border text-center" style={{cursor:"pointer"}}><button type="button" className="btn" onClick={() => onHotelDetails(props.id)}>
            mostra dettagli
          </button> </p>
        </div>
      </div>
    </div>
  );
}
export default Hotel;
