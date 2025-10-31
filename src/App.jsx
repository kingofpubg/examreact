import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ObjectList from "./components/ObjectList";
import SubjectList from "./components/SubjectList";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="banner">
          <img
            src="https://aptech.fpt.edu.vn/wp-content/uploads/2023/06/hoc-phi-nganh-cong-nghe-thong-tin-fpt-aptech-la-bao-nhieu.jpg"
            alt="FPT Aptech"
          />
        </section>

        <section className="objects-section">
          <h2>SHOULD WHO LEARN PROGRAMMING IN FPT APTECH?</h2>
          <ObjectList />
        </section>

        <section className="subjects-section">
          <h2>WHAT IS THE COURSE PROGRAM?</h2>
          <SubjectList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;