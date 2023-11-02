import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, time, name } =
      this.props;
    return (
      <div className="my-3"  style={{ maxHeight: "30rem" }}>
        <div className="card" style={{ height: "30rem" }}>
          <div className="card-header">
            By Source : {!name ? "Unknown" : name}
          </div>
          <img
            src={imageUrl}
            className="card-img-top"
            alt="..."
            style={{ height: "12rem" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div
              className="readmore"
              style={{ display: "flex", alignitems: "center" }}
            >
              <a
                href={newsUrl}
                target="_blank"
                className="btn btn-sm btn-primary mb-0"
              >
                Read More
              </a>
            </div>
          </div>
          <div className="card-footer text-body-secondary ">
            By Author : {!author ? "Unknown" : author}{author.length > 25 ? "..." : ""} <br />
            Date - {date} <span> and </span>Time - {time}
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
