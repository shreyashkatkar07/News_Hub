import "./App.css";
import React, { Component } from "react";
import News from "./components/News";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
          <Navbar />
          <div className="container2 my-2">
            <Routes>
              <Route
                exact
                path="/about"
                element={<About setProgress={this.setProgress} />}
              ></Route>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageSize}
                    category="general"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/business"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="business"
                    pageSize={this.pageSize}
                    category="business"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/entertainment"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="entertainment"
                    pageSize={this.pageSize}
                    category="entertainment"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="general"
                    pageSize={this.pageSize}
                    category="general"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/health"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="health"
                    pageSize={this.pageSize}
                    category="health"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/science"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="science"
                    pageSize={this.pageSize}
                    category="science"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/sports"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="sports"
                    pageSize={this.pageSize}
                    category="sports"
                    country="in"
                  />
                }
              ></Route>
              <Route
                exact
                path="/technology"
                element={
                  <News
                    setProgress={this.setProgress}
                    key="technology"
                    pageSize={this.pageSize}
                    category="technology"
                    country="in"
                  />
                }
              ></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}
