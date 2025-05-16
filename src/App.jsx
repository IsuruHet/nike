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
    <section className="pt-32 px-6 md:px-12 lg:px-8">
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
    <section className="bg-blue-50  px-14 py-20">
      <CustomerReviews />
    </section>
    <section className="px-14 pt-20 pb-5">
      <Subscribe />
    </section>
    <section className="pt-5">
      <Footer />
    </section>
  </main>
);

export default App;
