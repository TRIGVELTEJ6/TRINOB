// import React from "react";
// import PageWrapper from "../../components/PageWrapper.jsx";

// export default function Home(){
//   return (
//     <PageWrapper bgColor="#f3f7fb" heading="Welcome to Trinob Technologies">
//       <p>We build software. Explore careers and join our team.</p>
//       <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c3f8a0d79a8fdb3d2b0bd1d3f6e7a8c" alt="office" style={{ width: "100%", borderRadius: 8, marginTop: 12 }} />
//     </PageWrapper>
//   );
// }

import React from "react";
import PageWrapper from "../../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper bgColor="#f0f4f8" bgImage="/images/home-bg.jpg">
      <h2>Welcome to Trinob Technologies</h2>
      <p>Explore our careers, learn about us, and apply for jobs easily!</p>
    </PageWrapper>
  );
}
