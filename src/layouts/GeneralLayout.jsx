import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

function GeneralLayout({ children }) {
  return (
    <div>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default GeneralLayout;
