import HeaderComponent from "../Components/Header/Header";

const Home = () => {
  return (
    <>
      {/* Initialize main-container Website */}
      <div className="main-container w-full h-full min-h-screen relative">
        {/* Initialize wrapper Website */}
        <div className="wrapper h-full flex flex-col bg-neutral-000 items-center">
          <HeaderComponent />
        </div>
        {/* End Initialize wrapper Website */}
      </div>
      {/* End Initialize main-container Website */}
    </>
  );
};

export default Home;
