import Footer from "../_components/footer";
import Header from "../_components/header";

const Components = () => {
  return (
    <>
      <Header />
      <div className="pt-20"></div>
      <div className="flex flex-col items-center justify-center gap-3 px-5 py-6">
        <Footer />
      </div>
    </>
  );
};

export default Components;
