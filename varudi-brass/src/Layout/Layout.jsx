/* eslint-disable react/prop-types */
import Headerbar from "./HeaderBar";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="sticky top-0 flex-shrink-0 z-10">
        <Headerbar />
      </div>
      <div className="flex-grow flex justify-center">{props.children}</div>
      <div className="flex-shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
