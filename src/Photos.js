import React from "react";
export default function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            console.log(photo);
            return (
              <div className="col-4" key={index}>
                <img src={photo.urls.thumb} className="img-fluid" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
