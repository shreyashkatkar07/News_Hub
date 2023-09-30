import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){

    let url = "https://newsapi.org/v2/everything?q=apple&from=2023-09-29&to=2023-09-29&sortBy=popularity&apiKey=9dcd9f3301e846388b89193203711165";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({articles : parsedData.articles});

  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h3>News Hub - Top Headlines</h3>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    title={element.title ? element.title.slice(0, 30) : ""}
                    description={element.description ? element.description.slice(0, 45) : ""}
                    imageUrl={element.urlToImage ? element.urlToImage : "https://images.macrumors.com/t/on82wv5858RI4ckSlMLJ1hrpSPY=/2250x/article-new/2022/01/iOS-App-Store-General-Feature-Desaturated.jpg"}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
