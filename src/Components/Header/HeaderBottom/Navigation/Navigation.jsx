import DesktopHeaderLocationComponent from "../DesktopHeaderLocation/DesktopHeaderLocation";
import DesktopHeaderNavigationComponent from "./DesktopHeaderNavigation/DesktopHeaderNavigation";

const NavigationComponent = () => {
  return (
    <>
      <nav class="main-header-bottom-nav-location w-full h-11 min-h-9 px-4 box-border flex justify-between grow mx-auto relative">
        {/* <!-- Initialize desktop header navigation Website --> */}
        <DesktopHeaderNavigationComponent />
        {/* End Initialize desktop header navigation Website */}
        {/* Initialize desktop header location Website */}
        <DesktopHeaderLocationComponent />
        {/* End Initialize desktop header location Website */}
      </nav>
    </>
  );
};

export default NavigationComponent;
