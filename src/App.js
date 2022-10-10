import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./views/pages/Aboutus";
import Mainpage from "./views/pages/Mainpage";
import Newsroom from "./views/pages/Newsroom";
import Contactus from "./views/pages/Contactus";
import Career from "./views/pages/Career";
import Footer from "./components/sections/Footer";
import IndustrySolutions from "./views/pages/IndustrySolutions";
import Home from "./components/sections/home/Home";
import { Helmet } from "react-helmet";
import Maintainance from "./views/pages/Maintainance/Maintainance";

function App() {
  return (
    <div>
      <Helmet>
        <title>
          TrackGenesis&reg; | Top Software & Blockchain Company | Scotland
        </title>
        <meta
          name="description"
          content="TrackGenesis is the leading software and blockchain development company that supports sustainable business by ensuring transparency and immutability."
        />
        <link href="https://www.trackgenesis.com" rel="canonical"/>

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.trackgenesis.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TrackGenesis | Top Software & Blockchain Company | Scotland "
        />
        <meta
          property="og:description"
          content="TrackGenesis is the leading software and blockchain development company that supports sustainable business by ensuring transparency and immutability."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/trackgenesis/image/upload/v1654690005/TG-Website/images/TrackGenesis_amnxnj.png"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.trackgenesis.com/" />
        <meta
          name="twitter:title"
          content="TrackGenesis | Top Software & Blockchain Company | Scotland "
        />
        <meta
          name="twitter:description"
          content="TrackGenesis is the leading software and blockchain development company that supports sustainable business by ensuring transparency and immutability."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/trackgenesis/image/upload/v1654690005/TG-Website/images/TrackGenesis_amnxnj.png"
        />
      </Helmet>
      <BrowserRouter>
        <Routes>
        {/* <Route index element={<Maintainance />} /> */}
          <Route index element={<Mainpage />} />
          <Route path="home" element={<Home />}  />
          <Route path="about-us" element={<Aboutus />} />
          <Route path="footer" element={<Footer />} />
          <Route path="industry-solutions" element={<IndustrySolutions />} />
          <Route path="media-newsroom" element={<Newsroom />} />
          <Route path="contact-us" element={<Contactus />} />
          <Route path="careers" element={<Career />} />
          <Route path="404" element={<Maintainance />} />
          <Route path="/:error" element={<Mainpage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
