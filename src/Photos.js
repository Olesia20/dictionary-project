import React from "react";
export default function Photos(props) {
  if (props.photos) {
    console.log(props.photos);
    return (
      <div className="Photo">
        <div className="row">
          {props.photos.map(function (photo, index) {
            if (index < 9) {
              return (
                <div className="col-4" key={index}>
                  <img
                    src={photo.urls.small}
                    className="img-fluid Photo"
                    alt=""
                  />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
