import Header from "@src/components/Header/Header";
import Pagination from "@src/components/pagination/Pagination";

const MainPage = () => {
  return (
    <div className="page_container">
      <Header />
      <button>추가</button>
      <Pagination />
    </div>
  );
};

export default MainPage;
