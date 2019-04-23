import React from "react";

function Welcome() {
  return (
    <div className="Welcome">
      <div className="inner">
        <h2 className="title_wrap">
          <strong className="title">
            Hello.
            <br />
          </strong>
          <span className="text">I am Ji yoon</span>
        </h2>
        <p className="text_welcome">
          안녕하세요! 성장하는 퍼블리셔 박지윤입니다.
          <br />
          무슨 일이든 기본기가 가장 중요하다고 생각합니다.
          <br />
          올바른 의미를 가진 태그를 사용하는 시맨틱 마크업을 최우선으로
          생각합니다!
          <br />
          누구보다 가장 효율적인 페이지를 만들고 싶다는 목표가 있습니다.
          <br />
          소중한 시간을 내어 포트폴리오 페이지를 봐주시는 모든 분께
          감사드립니다!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
