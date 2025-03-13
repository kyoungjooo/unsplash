import HeaderSearchbar from "./HeaderSearchbar";

export default function CommonHeader() {
  return (
    <header>
      <div>
        <a href="">Logo</a>
        <HeaderSearchbar />
      </div>
      <div>
        <button>로그인</button>
        <div>
          <button>언어선택</button>
        </div>
      </div>
    </header>
  );
}
