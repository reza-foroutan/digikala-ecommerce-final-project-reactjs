import FooterComponent from "../Components/Footer/Footer";
import HeaderComponent from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      <div className="main-container w-full h-full min-h-screen relative">
        <div className="wrapper h-full flex flex-col bg-neutral-000 items-center">
          <HeaderComponent />
          {/* Initialize Main Website */}
          <main className="main-wrapper w-full h-full min-h-full bg-neutral-000 flex items-center flex-col mt-[200px]">
            {/* Initialize footer Website */}
            <FooterComponent />
            {/* End Initialize footer Website */}
          </main>
          {/* End Initialize Main Website */}
        </div>
      </div>
    </>
  );
};

export default Home;
