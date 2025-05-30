import Hero from "@/components/landing/Hero";
import Courses from "@/components/landing/Courses";
import Mentors from "@/components/landing/Mentors";
import Footer from "@/components/landing/Footer";
import Demo from "@/components/landing/Demo";

const Page = () => {
  return (
    <main>
      <Hero />
      <Courses />
      <Demo />
      <Mentors />
      <Footer />
    </main>
  );
};

export default Page;

