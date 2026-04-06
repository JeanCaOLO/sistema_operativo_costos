import Header from "./components/Header";
import IframeSection from "./components/IframeSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <IframeSection />
      <Footer />
    </div>
  );
}
