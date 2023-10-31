import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    pageSize: 6,
    category: "general",
    country: "in",
  };
  static propTypes = {
    pageSize: PropTypes.number,
    category: PropTypes.string,
    country: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults : 0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsHub`;
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      // loading: false,
    });
  }
  async componentDidMount() {
    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading : false,
    // });
    this.updateNews();
  }
  handlePrevClick = async () => {
    // if (this.state.page - 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&page=${
    //     this.state.page - 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page - 1,
    //     articles: parsedData.articles,
    //     loading : false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
    // } else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=9dcd9f3301e846388b89193203711165&page=${
    //     this.state.page + 1
    //   }&pageSize=${this.props.pageSize}`;
    //   this.setState({loading : true});
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading : false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  fetchMoreData = async() => {
   this.setState({page : this.state.page + 1});
   this.updateNews();
  };
  render() {
    return (
      <>
       
          <h3 className="text-center my-3">News Hub - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h3>
          {/* <div className="text-center"> */}
            {/* {this.state.loading && <Spinner />} */}
            {/* </div> */}

            <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.totalResults}
          loader={<Spinner/>}
        >
       <div className="container">

          <div className="row">
            {this.state.articles.map((element) => {
              let arrdt = element.publishedAt.split("T");
              let date = arrdt[0];
              let time = arrdt[1].slice(0, -1);
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
                        : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlS2MyP82wFMKpr7e1CxfyAoqgDRx0Bg0seg&usqp=CAU"
                      }
                      newsUrl={element.url}
                      author={element.author}
                      date={date}
                      time={time}
                      name={element.source.name}
                      />
                </div>
              );
            })}
          </div>

            </div>
          </InfiniteScroll>

        
        {/* <div className="container d-flex justify-content-between">
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
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }
}

export default News;
