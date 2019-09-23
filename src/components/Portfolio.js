import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map(item => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        {/* <a href="#modal-01"> */}
                        <img src={`${item.imgurl}`} className="item-img" />
                        {/* <div className="overlay"> */}
                        {/* <a href="https://www.w3schools.com/html/" target="_blank"> */}
                        <div className="portfolio-item-meta">
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <br />
                          <p>{item.technologies}</p>
                          <ul className="social-links">
                            {resumeData.socialLinksGit &&
                              resumeData.socialLinksGit.map(item => {
                                return (
                                  <li>
                                    <a href={item.url}>
                                      <i className={item.className} />
                                    </a>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                        {/* </a> */}
                        {/* </div> */}
                        {/* </a> */}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
