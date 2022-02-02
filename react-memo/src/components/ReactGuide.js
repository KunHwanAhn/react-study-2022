import ReactGuideTechList from "./ReactGuideTechList";
import ReactGuideSiteList from "./ReactGuideSiteList";

function ReactGuide() {
  return (
    <>
      <h1>Home</h1>
      <h2>안녕하세요, 리액트 앱</h2>

      <div className="row">
        <div className="col-6">
          <h3><i className="me-1 fa fa-wrench"></i>현재 사이트에서 사용한 기술 리스트</h3>
          <ReactGuideTechList />
        </div>
        <div className="col-6">
          <h3><i className="me-1 fa fa-sitemap"></i>현재 사이트와 관련된 추천 사이트</h3>
          <ReactGuideSiteList />
        </div>
      </div>
    </>
  );
};

export default ReactGuide;
