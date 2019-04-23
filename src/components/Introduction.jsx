import React from "react";

function Introduction() {
  return (
    <div className="Introduction">
      <section className="bx_wrap intro_bx">
        <h2 className="title_wrap">
          <span className="text">
            Intro
            <br />
          </span>
          <strong className="title">About My Self</strong>
        </h2>
        <p className="text_wrap">
          “천재는 노력하는 자를 이길 수 없고,
          <br />
          노력하는 자는 즐기는 자를 이길 수 없다.”
          <br />
          신입 웹퍼블리셔 박지윤입니다.
          <br />
          하나를 가르쳐도 열을 아는,
          <br />
          알려주지 않아도 스스로 답을 찾아내는,
          <br />
          긍정적인 마인드로 어려움을 극복하는,
          <br />
          책임감을 가지고 꼼꼼하게 일을 수행해나가는,
          <br />
          머물러 있지 않고 하루하루 발전해나가는,
          <br />
          웹퍼블리셔가 되겠습니다.
        </p>
      </section>
      <section className="bx_wrap skill_bx">
        <h2 className="title_wrap">
          <span className="text">
            Skill
            <br />
          </span>
          <strong className="title">What Can I Do</strong>
        </h2>
        <div className="skill_wrap_bx">
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
        </div>
      </section>
    </div>
  );
}

export default Introduction;
