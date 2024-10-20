import "./Layout.css";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../components/banner/Banner";
import Categories from "../components/CategoriesNav/Categories";
import MainContent from "../views/main/MainContent";
import { useState } from "react";

const Layout: React.FC = () => {
  const [showMainContent, setShowMainContent] = useState<boolean>(true);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleSearchClick = () => {
    setShowFilter((prev) => !prev);
    setShowMainContent((prev) => !prev);
  };

  const handleCategoryClick = () => {
    setShowMainContent(true);
    setShowFilter(false);
  };

  return (
    <>
      <div className="sm:hidden xl:block lg:block text-center text-[50px] p-24 md:inline">
        <h1>
          This app is for mobile view only. Use phone to view the app or use dev
          tools and set it on mobile size to view the app
        </h1>
      </div>
      <div className="app-wrap lg:hidden xl:hidden md:hidden">
        <Header />
        <div className="content">
          <Banner />
          <Categories
            onSearchClick={handleSearchClick}
            onCategoryClick={handleCategoryClick}
          />
          {/* Show MainContent only when the state is true */}
          {showMainContent && <MainContent />}
          {/* Show Filter component when the filter is open */}
          {showFilter && <div></div>}
        </div>
        {/* Footer Section */}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
