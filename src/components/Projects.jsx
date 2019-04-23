import React from "react";

function Projects() {
  return (
    <div className="Projects">
      <div className="inner">
        <h2 className="title_wrap">
          <span className="text">
            Portfolio
            <br />
          </span>
          <strong className="title">MY PROJECTS</strong>
        </h2>
        <div className="introduce">
          <h3 className="introduce_title">네이버 아트윈도</h3>
          <ul className="introduce_wrap">
            <li className="introduce_list">
              <span className="title">Viewport</span>
              <span className="text">PC 반응형</span>
            </li>
            <li className="introduce_list">
              <span className="title">Cross browser</span>
              <span className="text">Latest Browsers, IE 10+</span>
            </li>
            <li className="introduce_list">
              <span className="title">Palatte</span>
              <span className="text">
                <span className="palette_circle" />
                <span className="palette_circle" />
                <span className="palette_circle" />
                <span className="palette_circle" />
                <span className="palette_circle" />
                <span className="palette_circle" />
              </span>
            </li>
            <li className="introduce_list">
              <span className="title">View URL</span>
              <span className="text">
                <a
                  href="https://jiyoooooni.github.io/portfolio-shopping/"
                  className="portfolio_url"
                >
                  https://jiyoooooni.github.io/portfolio-shopping/
                </a>
              </span>
            </li>
          </ul>
          <p className="introduce_text">
            네이버 아트윈도는 <strong className="point">웹 접근성</strong>을
            고려하여 작업 하였으며,{" "}
            <strong className="point">시멘틱 마크업</strong>에 중점을
            두었습니다. <strong className="point">Gulp</strong>와{" "}
            <strong className="point">Sass</strong>를 Task Runner로 Sprite
            image와 scss파일을 css파일로 컴파일 하는 것을 자동화하였습니다.{" "}
            <strong className="point">자바스크립트</strong>를 활용한 Infinity
            Grid Layout과 Ajax 및 다양한 UI 모듈화를 적용시켰으며,{" "}
            <strong className="point">미디어쿼리</strong>를 활용하여 PC 반응형
            Layout을 구현하였습니다.
          </p>
        </div>
        {/* .introduce */}
        <div className="clickflow">
          <h3 className="clickflow_title">Click Flow</h3>
          <ul className="clickflow_wrap">
            <li className="clickflow_list">
              <div className="thumb">
                <span className="point" />
              </div>
              <p className="info">
                아트윈도 홈 메뉴에서 작품을 눌러, 작품관으로 이동
              </p>
            </li>
            <li className="clickflow_list">
              <div className="thumb">
                <span className="point" />
              </div>
              <p className="info">
                아트윈도 작품관에서 상품을 눌러, 상세페이지로 이동
              </p>
            </li>
          </ul>
        </div>
        {/* .clickflow */}
        <div className="portfolio artwindow_home">
          <h3 className="portfolio_title">
            <strong className="title_number">01.</strong>
            <span>아트윈도 홈 - Home</span>
          </h3>
          <div className="portfolio_monitor">
            <a href="#" className="portfoliio_monitor_in">
              <img src="" alt="" />
            </a>
          </div>
          <div className="portfolio_btn">
            <a
              href="https://github.com/jiyoooooni/portfolio-shopping/blob/master/docs/index.html"
              className="button_in"
              role="button"
            >
              Git Hub
            </a>
            <a
              href="https://jiyoooooni.github.io/portfolio-shopping/"
              className="button_in"
              role="button"
            >
              View Site
            </a>
          </div>
          <table className="portfolio_table">
            <thead>
              <tr>
                <th className="table_title title_category">Category</th>
                <th className="table_title title_source">Source</th>
                <th className="table_title title_keywords">Related keywords</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table_text category">
                  <span className="categ html">HTML</span>
                </td>
                <td className="table_text source">
                  <a href="#">index.html</a>
                </td>
                <td className="table_text keywords">시멘틱 태그, 웹 접근성</td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ scss">SCSS</span>
                </td>
                <td className="table_text source">
                  <a href="#">main.scss</a>
                </td>
                <td className="table_text keywords">
                  import, 미디어쿼리를 활용한 반응형 레이아웃
                </td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ js">JS</span>
                </td>
                <td className="table_text source">
                  <a href="#">index.js</a>
                </td>
                <td className="table_text keywords">
                  egjs를 활용한 슬라이더 구현
                </td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ task">TASK</span>
                </td>
                <td className="table_text source" />
                <td className="table_text keywords">
                  gulp를 활용한 Sprite Image
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* .artwindow_home */}
        <div className="portfolio artwindow_products">
          <h3 className="portfolio_title">
            <strong className="title_number">02.</strong>
            <span>아트윈도 작품관 - Products List</span>
          </h3>
          <div className="portfolio_monitor">
            <a href="#" className="portfoliio_monitor_in">
              <img src="" alt="" />
            </a>
          </div>
          <div className="portfolio_btn">
            <a
              href="https://github.com/jiyoooooni/portfolio-shopping/blob/master/docs/sub.html"
              className="button_in"
              role="button"
            >
              Git Hub
            </a>
            <a
              href="https://jiyoooooni.github.io/portfolio-shopping/sub.html"
              className="button_in"
              role="button"
            >
              View Site
            </a>
          </div>
          <table className="portfolio_table">
            <thead>
              <tr>
                <th className="table_title title_category">Category</th>
                <th className="table_title title_source">Source</th>
                <th className="table_title title_keywords">Related keywords</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table_text category">
                  <span className="categ html">HTML</span>
                </td>
                <td className="table_text source">
                  <a href="#">sub.html</a>
                </td>
                <td className="table_text keywords">시멘틱 태그, 웹 접근성</td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ scss">SCSS</span>
                </td>
                <td className="table_text source">
                  <a href="#">sub.scss</a>
                </td>
                <td className="table_text keywords">
                  import, 미디어쿼리를 활용한 반응형 레이아웃
                </td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ js">JS</span>
                </td>
                <td className="table_text source">
                  <a href="#">sub.js</a>
                </td>
                <td className="table_text keywords">
                  Infinity Grid Layout, AJAX를 활용한 작품정보 불러오기
                </td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ task">TASK</span>
                </td>
                <td className="table_text source" />
                <td className="table_text keywords">
                  gulp를 활용한 Sprite Image
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* .artwindow_products */}
        <div className="portfolio artwindow_detail">
          <h3 className="portfolio_title">
            <strong className="title_number">03.</strong>
            <span>아트윈도 작품 상세 - Products Detail</span>
          </h3>
          <div className="portfolio_monitor">
            <a href="#" className="portfoliio_monitor_in">
              <img src="" alt="" />
            </a>
          </div>
          <div className="portfolio_btn">
            <a
              href="https://github.com/jiyoooooni/portfolio-shopping/blob/master/docs/sub_detail.html"
              className="button_in"
              role="button"
            >
              Git Hub
            </a>
            <a
              href="https://jiyoooooni.github.io/portfolio-shopping/sub_detail.html"
              className="button_in"
              role="button"
            >
              View Site
            </a>
          </div>
          <table className="portfolio_table">
            <thead>
              <tr>
                <th className="table_title title_category">Category</th>
                <th className="table_title title_source">Source</th>
                <th className="table_title title_keywords">Related keywords</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table_text category">
                  <span className="categ html">HTML</span>
                </td>
                <td className="table_text source">
                  <a href="#">sub_datail.html</a>
                </td>
                <td className="table_text keywords">시멘틱 태그, 웹 접근성</td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ scss">SCSS</span>
                </td>
                <td className="table_text source">
                  <a href="#">sub_detail.scss</a>
                </td>
                <td className="table_text keywords">
                  import, 미디어쿼리를 활용한 반응형 레이아웃
                </td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ js">JS</span>
                </td>
                <td className="table_text source">
                  <a href="#">sub_detail.js</a>
                </td>
                <td className="table_text keywords">
                  Acordian UI (리뷰), Floating Bar… 다양한 UI 모듈화
                </td>
              </tr>
              <tr>
                <td className="table_text category">
                  <span className="categ task">TASK</span>
                </td>
                <td className="table_text source" />
                <td className="table_text keywords">
                  gulp를 활용한 Sprite Image
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Projects;
