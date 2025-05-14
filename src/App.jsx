import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav />
    <section className="pt-32">
      <Hero />
    </section>
    <section className="px-14 py-20">
      <PopularProducts />
    </section>
    <section className="px-14 py-20">
      <SuperQuality />
    </section>
    <section className="px-14 py-20">
      <Services />
    </section>
    <section className="px-14 py-20">
      <SpecialOffer />
    </section>
    <section className="bg-blue-100 px-14 py-20">
      <CustomerReviews />
    </section>
    <section className="px-14 py-20">
      <Subscribe />
    </section>
    <section className="px-14 py-20">
      <Footer />
    </section>
  </main>
);

export default App;
