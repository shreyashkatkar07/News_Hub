import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, time, name } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
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
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
          <div className="card-footer text-body-secondary">
            By Author : {!author ? "Unknown" : author} <br />
            Date - {date} <span> and </span>Time - {time}
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
