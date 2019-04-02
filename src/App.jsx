import React from 'react';
import './stylesheets/reset.css'
import './stylesheets/app.css';

class App extends React.Component {
  render() {
    return (
      <div className="wrap">
        {/* HTML 역할 */}
        <div className="content">
          <div className="section1">
            <div className="inner">
              <nav>
                <ul className="nav_wrap">
                  <li className="nav_list">
                    <a href="#" className="nav_list_in">Prolog</a>
                  </li>
                  <li className="nav_list">
                    <a href="#" className="nav_list_in">Intro&amp;Skill</a>
                  </li>
                  <li className="nav_list">
                    <a href="#" className="nav_list_in">My projects</a>
                  </li>
                  <li className="nav_list">
                    <a href="#" className="nav_list_in">Contacts</a>
                  </li>
                </ul>
              </nav>
            </div>{/* .inner */}
          </div>{/* .section1 */}
          <div className="section2">
            <div className="inner">
              <h2 className="title_wrap">
                <strong className="title">Hello.<br/></strong>
                <span className="text">I am Ji yoon</span>  
              </h2>
              <p className="text_welcome">
              안녕하세요! 성장하는 퍼블리셔 박지윤입니다.<br/>
              무슨 일이든 기본기가 가장 중요하다고 생각합니다.<br/>
              올바른 의미를 가진 태그를 사용하는 시맨틱 마크업을 최우선으로 생각합니다!<br/>
              누구보다 가장 효율적인 페이지를 만들고 싶다는 목표가 있습니다.<br/>
              소중한 시간을 내어 포트폴리오 페이지를 봐주시는 모든 분께 감사드립니다!
              </p>
            </div>{/* .inner */}
          </div>{/* .section2 */}
          <div className="section3">
            <section className="bx_wrap intro_bx">
              <h2 className="title_wrap">
                <span className="text">Intro<br/></span>
                <strong className="title">About My Self</strong>
              </h2>
              <p className="text_wrap">
                  “천재는 노력하는 자를 이길 수 없고,<br/>
                  노력하는 자는 즐기는 자를 이길 수 없다.”<br/>
                  신입 웹퍼블리셔 박지윤입니다.<br/>
                  하나를 가르쳐도 열을 아는,<br/>
                  알려주지 않아도 스스로 답을 찾아내는,<br/>
                  긍정적인 마인드로 어려움을 극복하는,<br/>
                  책임감을 가지고 꼼꼼하게 일을 수행해나가는,<br/>
                  머물러 있지 않고 하루하루 발전해나가는,<br/>
                  웹퍼블리셔가 되겠습니다.</p>
            </section>
            <section className="bx_wrap skill_bx">
              <h2 className="title_wrap">
                  <span className="text">Skill<br/></span>
                  <strong className="title">What Can I Do</strong>
              </h2>
              <div className="skill_wrap">
                <dl className="skill_list">
                  <dt className="name">HTML</dt>
                  <dd className="text">SEO&#40;검색엔진 최적화&#41;</dd>
                  <dd className="text">웹 접근성</dd>
                  <dd className="text">Sementic Web</dd>
                  <dt className="name">CSS</dt>
                  <dd className="text">CSS3</dd>
                  <dd className="text">반응형 레이아웃&#40;미디어쿼리&#41;</dd>
                  <dd className="text">Scss 활용</dd>
                  <dt className="name">JAVA SCRIPT</dt>
                  <dd className="text">UI 제어</dd>
                  <dd className="text">이벤트 핸들링</dd>
                  <dd className="text">JQuery 라이브러리 활용</dd>
                  <dd className="text">Ajax 등 비동기 처리</dd>
                </dl>
              </div>
              <div className="skill_wrap">
                <dl className="skill_list">
                  <dt className="name">Task Runner</dt>
                  <dd className="text">Gulp.js</dd>
                  <dd className="text">Sprite image 자동화</dd>
                  <dd className="text">Sass &#38; Watch</dd>
                  <dt className="name">ETC</dt>
                  <dd className="text">Git을 이용한 버전 관리</dd>
                  <dd className="text">GitHub 프로젝트 관리</dd>
                  <dd className="text">Zeplin-Sketch를 이용한 디자인</dd>
                </dl>
              </div>
            </section>
          </div>{/* .section3 */}
          <div className="section4">
            <div className="inner">
              <h2 className="title_wrap">
                <span className="text">Portfolio<br/></span>
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
                      <span className="palette_circle"></span>
                      <span className="palette_circle"></span>
                      <span className="palette_circle"></span>
                      <span className="palette_circle"></span>
                      <span className="palette_circle"></span>
                      <span className="palette_circle"></span>
                    </span>
                  </li>
                  <li className="introduce_list">
                    <span className="title">View URL</span>
                    <span className="text">
                      <a href="#" className="portfolio_url">https://jiyoooooni.github.io/portfolio-shopping/</a>
                    </span>
                  </li>
                </ul>
                <p className="introduce_text">
                 네이버 아트윈도는 <strong className="point">웹 접근성</strong>을 고려하여 작업 하였으며, <strong className="point">시멘틱 마크업</strong>에 중점을 두었습니다. <strong className="point">Gulp</strong>와 <strong className="point">Sass</strong>를 Task Runner로 Sprite image와 scss파일을 css파일로 컴파일 하는 것을 자동화하였습니다. <strong className="point">자바스크립트</strong>를 활용한 Infinity Grid Layout과 Ajax 및 다양한 UI 모듈화를 적용시켰으며, <strong className="point">미디어쿼리</strong>를 활용하여 PC 반응형 Layout을 구현하였습니다.
                </p>
              </div>{/* .introduce */}
              <div className="clickflow">
                <h3 className="clickflow_title">Click Flow</h3>
                <ul className="clickflow_wrap">
                  <li className="clickflow_list">
                    <div className="thumb">
                      <a href="#" className="thumb_in">
                        <img src="./img/clickflow_image1.png" alt="작품관 이동 플로우 이미지"/>
                      </a>
                    </div>
                    <p className="info">아트윈도 홈 메뉴에서 작품을 눌러, 작품관으로 이동</p>
                  </li>
                  <li className="clickflow_list">
                    <div className="thumb">
                      <a href="#" className="thumb_in">
                        <img src="./img/clickflow_image2.png" alt="작품상세페이지 이동 플로우 이미지"/>
                      </a>
                    </div>
                    <p className="info">아트윈도 작품관에서 상품을 눌러, 상세페이지로 이동</p>
                  </li>
                </ul>
              </div>{/* .clickflow */}
              <div className="portfolio artwindow_home">
                <div className="inner">
                  <h3 className="portfolio_title">
                    <strong className="title_number">01.</strong>
                    <span>아트윈도 홈 - Home</span>
                  </h3>
                  <div className="portfolio_monitor">
                    <a href="#" className="portfoliio_monitor_in">
                      <img src="" alt=""/>
                    </a> 
                  </div>
                  <div className="portfolio_btn">
                    <button type="button">
                      <a href="#" className="button_in">Git Hub</a>
                    </button>
                    <button type="button">
                      <a href="#" className="button_in">View Site</a>
                    </button>
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
                        <td className="table_text keywords">import, 미디어쿼리를 활용한 반응형 레이아웃</td>
                      </tr>
                      <tr>
                        <td className="table_text category">
                          <span className="categ js">JS</span>
                        </td>
                        <td className="table_text source">
                          <a href="#">index.js</a>
                        </td>
                        <td className="table_text keywords">egjs를 활용한 슬라이더 구현</td>
                      </tr>
                      <tr>
                        <td className="table_text category">
                          <span className="categ task">TASK</span>
                        </td>
                        <td className="table_text source"></td>
                        <td className="table_text keywords">gulp를 활용한 Sprite Image</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{/* .artwindow_home */}
              <div className="portfolio artwindow_products">
                <div className="inner">
                  <h3 className="portfolio_title">
                    <strong className="title_number">02.</strong>
                    <span>아트윈도 작품관 - Products List</span>
                  </h3>
                  <div className="portfolio_monitor">
                    <a href="#" className="portfoliio_monitor_in">
                      <img src="" alt=""/>
                    </a> 
                  </div>
                  <div className="portfolio_btn">
                    <button type="button">
                      <a href="#" className="button_in">Git Hub</a>
                    </button>
                    <button type="button">
                      <a href="#" className="button_in">View Site</a>
                    </button>
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
                        <td className="table_text keywords">import, 미디어쿼리를 활용한 반응형 레이아웃</td>
                      </tr>
                      <tr>
                        <td className="table_text category">
                          <span className="categ js">JS</span>
                        </td>
                        <td className="table_text source">
                          <a href="#">sub.js</a>
                        </td>
                        <td className="table_text keywords">Infinity Grid Layout, AJAX를 활용한 작품정보 불러오기</td>
                      </tr>
                      <tr>
                        <td className="table_text category">
                          <span className="categ task">TASK</span>
                        </td>
                        <td className="table_text source"></td>
                        <td className="table_text keywords">gulp를 활용한 Sprite Image</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{/* .artwindow_products */}
              <div className="portfolio artwindow_detail">
                <div className="inner">
                  <h3 className="portfolio_title">
                    <strong className="title_number">03.</strong>
                    <span>아트윈도 작품 상세 - Products Detail</span>
                  </h3>
                  <div className="portfolio_monitor">
                    <a href="#" className="portfoliio_monitor_in">
                      <img src="" alt=""/>
                    </a> 
                  </div>
                  <div className="portfolio_btn">
                    <button type="button">
                      <a href="#" className="button_in">Git Hub</a>
                    </button>
                    <button type="button">
                      <a href="#" className="button_in">View Site</a>
                    </button>
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
                        <td className="table_text keywords">import, 미디어쿼리를 활용한 반응형 레이아웃</td>
                      </tr>
                      <tr>
                        <td className="table_text category">
                          <span className="categ js">JS</span>
                        </td>
                        <td className="table_text source">
                          <a href="#">sub_detail.js</a>
                        </td>
                        <td className="table_text keywords">Acordian UI (리뷰), Floating Bar… 다양한 UI 모듈화</td>
                      </tr>
                      <tr>
                        <td className="table_text category">
                          <span className="categ task">TASK</span>
                        </td>
                        <td className="table_text source"></td>
                        <td className="table_text keywords">gulp를 활용한 Sprite Image</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>{/* .artwindow_product detail */}
            </div>{/* .inner */}
          </div>{/* .section4 */}
          <div className="section5">
            <div className="inner">
              <h2 className="contacts_title">Contacts</h2>
              <ul className="contacts_wrap">
                <li className="contacts_list">010-8228-8379</li>
                <li className="contacts_list">pooooooop@naver.com</li>
                <li className="contacts_list">tengh@KakaoTalk</li>
                <li className="contacts_list">
                  <a href="#">http://github.com/jiyoooooni.</a>
                </li> 
              </ul>
            </div>
          </div>
        </div>{/* .content */}
        <footer className="footer">
          <span className="copyright">copyright ⓒ 2018 JiYoon-Park All right reserved.</span>
        </footer> 
      </div>
    );
  }
}

export default App;
