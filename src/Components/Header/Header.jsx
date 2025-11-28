import HeaderTopComponent from "./HeaderTop/HeaderTop";

const HeaderComponent = () => {
  return (<>
    <div className="w-full h-[168px] shadow-2xs shadow-slate-900">
      <header>
        <HeaderTopComponent />
      </header>
    </div>
  </>);
}

export default HeaderComponent;
