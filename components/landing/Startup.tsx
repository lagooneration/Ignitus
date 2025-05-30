import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const Startup = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Startup Competition</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Turn your innovative ideas into reality! Apply for our startup contest and get a chance to pitch 
            your vision to industry experts and potential investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image 
              src="/images/her.jpg" 
              alt="Startup Competition" 
              width={600} 
              height={400} 
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contest Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Image src="/icons/check.svg" width={20} height={20} alt="Check" className="mr-2 mt-1" />
                  <span>Pitch to angel investors and VCs</span>
                </li>
                <li className="flex items-start">
                  <Image src="/icons/check.svg" width={20} height={20} alt="Check" className="mr-2 mt-1" />
                  <span>Mentorship from industry experts</span>
                </li>
                <li className="flex items-start">
                  <Image src="/icons/check.svg" width={20} height={20} alt="Check" className="mr-2 mt-1" />
                  <span>Seed funding opportunities</span>
                </li>
                <li className="flex items-start">
                  <Image src="/icons/check.svg" width={20} height={20} alt="Check" className="mr-2 mt-1" />
                  <span>Network with successful entrepreneurs</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Image src="/icons/clock.svg" width={20} height={20} alt="Clock" className="mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Application Deadline</p>
                    <p className="text-gray-600">June 30, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image src="/icons/clock.svg" width={20} height={20} alt="Clock" className="mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Selection Announcement</p>
                    <p className="text-gray-600">July 15, 2025</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Image src="/icons/clock.svg" width={20} height={20} alt="Clock" className="mr-2 mt-1" />
                  <div>
                    <p className="font-medium">Pitch Day</p>
                    <p className="text-gray-600">August 10, 2025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                <Link href="/startup-application" className="w-full flex items-center justify-center">
                  Apply Now
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <Link href="/startup-faq" className="w-full flex items-center justify-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Success Stories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "EcoSolutions",
                description: "A sustainable packaging startup that secured $500K in seed funding after winning our 2024 competition.",
                founder: "Alex Chen",
                image: "/images/c1.png"
              },
              {
                name: "HealthTech AI",
                description: "An AI-powered health diagnostics platform that partnered with three major hospitals following their pitch.",
                founder: "Sarah Johnson",
                image: "/images/c2.png"
              },
              {
                name: "EduConnect",
                description: "An EdTech startup that expanded to 5 countries within a year of presenting at our startup competition.",
                founder: "Michael Rodriguez",
                image: "/images/c3.png"
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mr-4">
                    <Image 
                      src={story.image} 
                      alt={story.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{story.name}</h4>
                    <p className="text-sm text-gray-600">Founded by {story.founder}</p>
                  </div>
                </div>
                <p className="text-gray-700">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;