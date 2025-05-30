import Hero from "@/components/landing/Hero";
import Courses from "@/components/landing/Courses";
import Mentors from "@/components/landing/Mentors";
import Footer from "@/components/landing/Footer";
import Demo from "@/components/landing/Demo";
import Startup from "@/components/landing/Startup";

const Page = () => {
  return (
    <main>
      <div className="absolute inset-0 top-20 bg-gray-100 bg-opacity-100 dark:bg-opacity-70 h-[80%]"></div>
      <Hero />
      <Demo />
      <Courses />
      <Mentors />
      <Startup />
      <Footer />
    </main>
  );
};

export default Page;

