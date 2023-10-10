import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps = {

    pageSize : 6,
    category : 'general',
    country : 'in',

  }
  static propTypes = {
    pageSize : PropTypes.number,
    category : PropTypes.string,
    country : PropTypes.string,
  }
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading : false,
    });
  }
  handlePrevClick = async () => {
    if (this.state.page - 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&page=${
        this.state.page - 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page - 1,
        articles: parsedData.articles,
        loading : false,
      });
    }
  };
  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading : true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading : false,
      });
    }
  };
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="text-center my-3">News Hub - Top Headlines</h3>
          <div className="text-center">
            {this.state.loading && <Spinner/>}
          </div>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 45)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "data:image/jpeg;base64,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"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-info"
            onClick={this.handlePrevClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-info"
            onClick={this.handleNextClick}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}

export default News;
