
import React from "react";
import PageWrapper from "../../components/PageWrapper.jsx";

export default function AboutUs(){
  return (
    <PageWrapper  bgColor="#e0f7fa" bgImage="/images/about-bg.jpg" heading="About Us">
      <h1 style={{ textAlign: "center", marginTop: 50 }}>About TriNob Technologies</h1>
      <p style={{ maxWidth: 600, margin: "20px auto", textAlign: "center", lineHeight: "1.6" }}>
        TriNob Technologies is a forward-thinking technology company committed to delivering
        innovative solutions. We specialize in web development, AI-driven applications,
        and enterprise software solutions. Our mission is to empower businesses
        and individuals through technology.
      </p>
      <p style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", lineHeight: "1.6" }}>
        Founded in 2025, TriNob Technologies has a growing team of experts passionate about
        coding, design, and problem-solving. Join us to explore new opportunities and be part
        of our journey.
      </p>
    </PageWrapper>

// return (
//     <PageWrapper bgColor="#e0f7fa" bgImage="/images/about-bg.jpg">
//       <h2>About Us</h2>
//       <p>Trinob Technologies delivers modern software solutions with excellence.</p>
//     </PageWrapper>
//   );

  );
}
