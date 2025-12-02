import NavigationComponent from "./Navigation/Navigation";

const HeaderBottomComponent = () => {
  return (
    <>
      <div class="main-header-bottom w-full h-11 min-h-9 bg-neutral-000 flex justify-between items-center flex-wrap relative">
        <NavigationComponent />
      </div>
    </>
  );
};

export default HeaderBottomComponent;
