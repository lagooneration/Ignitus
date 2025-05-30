'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Define types for our data structure
interface TimeSlot {
  day: string;
  slots: string[];
}

interface Mentor {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  imgUrl: string;
  bio: string;
  availability: TimeSlot[];
  sessionFee: string;
  rating: number;
  reviewCount: number;
}

interface BookingDetailsType {
  mentor: Mentor;
  day: string;
  time: string;
}

// Extended mentor data with availability
const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Anchal Sharma',
    role: 'Fulbright Scholar, MIT',
    expertise: ['Design Thinking', 'Assistive Technology', 'Impact Measurement'],
    imgUrl: '/images/anc.png',
    bio: 'A passionate design thinker with expertise in creating assistive technologies. Anchal has helped numerous students and professionals develop innovative solutions that make a real impact.',
    availability: [
      { day: 'Monday', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { day: 'Wednesday', slots: ['9:00 AM', '1:00 PM'] },
      { day: 'Friday', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] }
    ],
    sessionFee: '$50',
    rating: 4.9,
    reviewCount: 124
  },
  {
    id: '2',
    name: 'Mihir Jain',
    role: 'Masters in CS, UC San Diego',
    expertise: ['Computer Science', 'Bioinfomatics', 'Machine Learning'],
    imgUrl: '/images/mih.png',
    bio: 'Specializing in the intersection of computer science and biological sciences, Mihir brings a unique perspective to solving complex problems through technology and data analysis.',
    availability: [
      { day: 'Tuesday', slots: ['11:00 AM', '3:00 PM', '5:00 PM'] },
      { day: 'Thursday', slots: ['10:00 AM', '2:00 PM'] },
      { day: 'Saturday', slots: ['9:00 AM', '1:00 PM', '4:00 PM'] }
    ],
    sessionFee: '$45',
    rating: 4.8,
    reviewCount: 98
  },
  {
    id: '3',
    name: 'Simar Kaur',
    role: 'PHD in Chemical Engg, MIT',
    expertise: ['Chemical Engg', 'Research Methods', 'Innovation Strategy'],
    imgUrl: '/images/sim.png',
    bio: 'With extensive experience in chemical engineering research, Simar guides students through complex research methodologies and helps them develop innovative strategies for their projects.',
    availability: [
      { day: 'Monday', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] },
      { day: 'Wednesday', slots: ['10:00 AM', '2:00 PM'] },
      { day: 'Friday', slots: ['11:00 AM', '3:00 PM'] }
    ],
    sessionFee: '$55',
    rating: 4.9,
    reviewCount: 112
  },
  {
    id: '4',
    name: 'Swathi Agarwal',
    role: 'Research Officer, AIIMS',
    expertise: ['Medical Officer', 'Research Innovation', 'Technology Policy'],
    imgUrl: '/images/swa.png',
    bio: 'A medical professional with a passion for research innovation and technology policy. Swathi helps students navigate the complex world of medical research and healthcare technology.',
    availability: [
      { day: 'Tuesday', slots: ['10:00 AM', '2:00 PM', '4:00 PM'] },
      { day: 'Thursday', slots: ['11:00 AM', '3:00 PM'] },
      { day: 'Saturday', slots: ['9:00 AM', '1:00 PM', '5:00 PM'] }
    ],
    sessionFee: '$60',
    rating: 4.7,
    reviewCount: 89
  }
];
  

// Mentor availability card component
interface AvailabilityCardProps {
  availability: TimeSlot[];
  onSelectSlot: (day: string, time: string) => void;
}

const AvailabilityCard: React.FC<AvailabilityCardProps> = ({ availability, onSelectSlot }) => {
  const [selectedDay, setSelectedDay] = useState(availability[0].day);
  const selectedDaySlots = availability.find((a: TimeSlot) => a.day === selectedDay)?.slots || [];

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
      <h4 className="text-sm font-semibold mb-3">Available Sessions</h4>
      
      {/* Day selection */}
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        {availability.map(day => (
          <button 
            key={day.day}
            onClick={() => setSelectedDay(day.day)}
            className={`px-3 py-1.5 text-xs rounded-full whitespace-nowrap ${
              selectedDay === day.day 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
            }`}
          >
            {day.day}
          </button>
        ))}
      </div>
      
      {/* Time slots */}
      <div className="grid grid-cols-2 gap-2">
        {selectedDaySlots.map(slot => (
          <button
            key={slot}
            onClick={() => onSelectSlot(selectedDay, slot)}
            className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 text-sm hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
          >
            {slot}
          </button>
        ))}
      </div>
    </div>
  );
};

// Mentor detail component
interface MentorDetailProps {
  mentor: Mentor;
  onClose: () => void;
  onBook: (mentor: Mentor, day: string, time: string) => void;
}

const MentorDetail: React.FC<MentorDetailProps> = ({ mentor, onClose, onBook }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleSelectSlot = (day: string, time: string) => {
    setSelectedDay(day);
    setSelectedTime(time);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header with close button */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">{mentor.name}</h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Mentor info */}
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="relative w-full md:w-1/3 h-64 rounded-lg overflow-hidden">
              <Image 
                src={mentor.imgUrl} 
                alt={mentor.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            
            <div className="w-full md:w-2/3">
              <p className="text-gray-500 dark:text-gray-400 mb-2">{mentor.role}</p>
              
              <div className="flex items-center mb-3">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${i < Math.floor(mentor.rating) ? 'fill-current' : 'stroke-current fill-none'}`} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium">{mentor.rating}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">({mentor.reviewCount} reviews)</span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">{mentor.bio}</p>
              
              <div className="mb-4">
                <h3 className="text-sm font-semibold mb-2">Expertise:</h3>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill: string, index: number) => (
                    <span 
                      key={index} 
                      className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-sm">
                <span className="font-semibold">Session Fee:</span> {mentor.sessionFee} / hour
              </div>
            </div>
          </div>
          
          {/* Availability section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Book a Session</h3>
            <AvailabilityCard 
              availability={mentor.availability} 
              onSelectSlot={handleSelectSlot}
            />
          </div>
          
          {/* Booking section */}
          {selectedDay && selectedTime && (
            <div className="border-t pt-4">
              <h3 className="text-lg font-semibold mb-3">Complete Your Booking</h3>
              <p className="mb-4 text-sm">
                You are about to book a session with <span className="font-semibold">{mentor.name}</span> on <span className="font-semibold">{selectedDay}</span> at <span className="font-semibold">{selectedTime}</span>.
              </p>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="topic" className="block text-sm font-medium mb-1">Session Topic</label>
                  <Input 
                    id="topic" 
                    placeholder="Briefly describe what you'd like to discuss"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="notes" className="block text-sm font-medium mb-1">Additional Notes</label>
                  <textarea 
                    id="notes" 
                    rows={3}
                    placeholder="Any specific questions or areas you'd like to focus on"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-sm"
                  />
                </div>
              </div>
              
              <Button 
                onClick={() => onBook(mentor, selectedDay, selectedTime)}
                className="w-full"
              >
                Confirm Booking
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Enhanced mentor card component
interface EnhancedMentorCardProps {
  mentor: Mentor;
  onViewProfile: (mentor: Mentor) => void;
}

const EnhancedMentorCard: React.FC<EnhancedMentorCardProps> = ({ mentor, onViewProfile }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative h-72 w-full">
        <Image 
          src={mentor.imgUrl} 
          alt={mentor.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold mb-1">{mentor.name}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{mentor.role}</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-sm font-medium">{mentor.rating}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Expertise:</h4>
          <div className="flex flex-wrap gap-2">
            {mentor.expertise.map((skill: string, index: number) => (
              <span 
                key={index} 
                className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm">
            <span className="font-semibold">Session Fee:</span> {mentor.sessionFee}
          </div>
          <div className="text-sm text-green-600 dark:text-green-400">
            {mentor.availability[0].slots.length + mentor.availability[1].slots.length} slots available
          </div>
        </div>
        
        <Button 
          variant="default" 
          className="w-full"
          onClick={() => onViewProfile(mentor)}
        >
          Book a Session
        </Button>
      </div>
    </div>
  );
};

// Main Mentors Page Component
const MentorsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingDetailsType | null>(null);
  
  // Expertise options extracted from mentors data
  const expertiseOptions = Array.from(
    new Set(mentors.flatMap(mentor => mentor.expertise))
  );
  
  // Filter mentors based on search and expertise
  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = 
      searchQuery === '' || 
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.expertise.some(skill => 
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesExpertise = 
      selectedExpertise === '' || 
      mentor.expertise.includes(selectedExpertise);
    
    return matchesSearch && matchesExpertise;
  });
  
  const handleViewProfile = (mentor: Mentor) => {
    setSelectedMentor(mentor);
  };
  
  const handleCloseProfile = () => {
    setSelectedMentor(null);
  };
  
  const handleBookSession = (mentor: Mentor, day: string, time: string) => {
    // In a real app, this would call an API to book the session
    setBookingDetails({ mentor, day, time });
    setBookingSuccess(true);
    setSelectedMentor(null);
  };
  
  const handleCloseBookingSuccess = () => {
    setBookingSuccess(false);
    setBookingDetails(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero section */}
      <div className="bg-blue-500 dark:bg-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Expert Mentors</h1>
          <p className="text-xl max-w-2xl mb-8">
            Book one-on-one sessions with industry professionals to accelerate your learning journey.
          </p>
          
          {/* Search and filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              <Input
                type="text"
                placeholder="Search mentors by name, role, or expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 backdrop-blur-sm border-white/20 placeholder:text-white/60 text-white"
              />
            </div>
            <div className="w-full md:w-1/3">
              <select
                value={selectedExpertise}
                onChange={(e) => setSelectedExpertise(e.target.value)}
                className="w-full h-10 px-3 rounded-md bg-white/10 backdrop-blur-sm border border-white/20 text-white"
              >
                <option value="">All Expertise</option>
                {expertiseOptions.map(expertise => (
                  <option key={expertise} value={expertise}>
                    {expertise}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mentors grid */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Available Mentors</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Showing {filteredMentors.length} mentors
          </p>
        </div>
        
        {filteredMentors.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMentors.map(mentor => (
              <EnhancedMentorCard
                key={mentor.id}
                mentor={mentor}
                onViewProfile={handleViewProfile}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold mb-2">No mentors found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Try adjusting your search or filters to find available mentors.
            </p>
            <Button onClick={() => {
              setSearchQuery('');
              setSelectedExpertise('');
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
      
      {/* Booking process section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How Booking Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Browse Profiles</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Explore mentor profiles and find the right match for your learning needs.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule a Session</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Select an available time slot that works for both you and your mentor.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 dark:text-blue-300 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirm and Connect</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete your booking and receive a confirmation with session details.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">How long are the mentoring sessions?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Standard sessions are 60 minutes long. Some mentors offer extended sessions of 90 minutes for more in-depth discussions.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">            <h3 className="text-xl font-semibold mb-2">How do I pay for the sessions?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              After confirming your booking, you&apos;ll be directed to our secure payment portal where you can pay using credit card, PayPal, or other supported payment methods.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Can I reschedule or cancel my session?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Yes, you can reschedule or cancel your session up to 24 hours before the scheduled time without any penalty. Changes with less notice may incur a fee.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">            <h3 className="text-xl font-semibold mb-2">How are the sessions conducted?</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sessions are conducted via video call. You&apos;ll receive a link to join the session in your booking confirmation email and a reminder before the session starts.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mentor detail modal */}
      {selectedMentor && (
        <MentorDetail 
          mentor={selectedMentor}
          onClose={handleCloseProfile}
          onBook={handleBookSession}
        />
      )}
      
      {/* Booking success modal */}
      {bookingSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-xl max-w-md w-full p-6 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Your session with {bookingDetails?.mentor.name} on {bookingDetails?.day} at {bookingDetails?.time} has been scheduled.
            </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              You&apos;ll receive a confirmation email with all the details and instructions to join the call.
            </p>
            
            <Button onClick={handleCloseBookingSuccess}>
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentorsPage;