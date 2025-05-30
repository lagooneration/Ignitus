'use client';

import { useState, useEffect, useRef } from 'react';
import { cn, getSubjectColor } from "@/lib/utils";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import soundwaves from '@/constants/soundwaves.json';
import Ctathree from '../extra/CTATHREE';

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

// Sample conversation data for the demo
const demoConversation: { role: "assistant" | "user"; content: string }[] = [
    { role: 'assistant', content: "Hello! I'm excited to start our learning session today. We'll be talking about Neural Networks in Deep Learning." },
    { role: 'user', content: "Hi! I'm looking forward to learning about neural networks. What are they exactly?" },
    { role: 'assistant', content: "Neural networks are computing systems inspired by the biological neural networks in animal brains. They're designed to recognize patterns and interpret data through a process similar to how human brains work." },
    { role: 'user', content: "That sounds fascinating! How do they work?" },
    { role: 'assistant', content: "They consist of layers of connected nodes or 'neurons'. Each connection transmits signals between neurons. These signals are processed and transformed through weighted connections, which can be adjusted during learning." },
    { role: 'user', content: "So they can learn from data?" },
    { role: 'assistant', content: "Exactly! Through a process called training, neural networks adjust their weights based on feedback, minimizing errors in their predictions. This is similar to how our brains learn from experience." },
    { role: 'user', content: "What are some real-world applications of neural networks?" },
    { role: 'assistant', content: "Neural networks are used in many areas: image and speech recognition, language translation, medical diagnosis, self-driving cars, recommendation systems, and even creating art or music. They're quite versatile!" },
];

const Demo = () => {
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string; }[]>([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    
    const lottieRef = useRef<LottieRefCurrentProps>(null);
    
    // Subject and companion details for the demo
    const subject = "coding";
    const name = "Codey the Logic Hacker";
    const userName = "Student";
    
    useEffect(() => {
        if(lottieRef.current) {
            if(isSpeaking) {
                lottieRef.current.play();
            } else {
                lottieRef.current.stop();
            }
        }
    }, [isSpeaking]);
    
    // Simulate conversation in the demo
    useEffect(() => {
        if (callStatus !== CallStatus.ACTIVE) return;
        
        let timeout: NodeJS.Timeout;
        
        if (currentMessageIndex < demoConversation.length) {
            const message = demoConversation[currentMessageIndex];
            
            if (message.role === 'assistant') {
                setIsSpeaking(true);
                timeout = setTimeout(() => {
                    setMessages(prev => [message, ...prev]);
                    setIsSpeaking(false);
                    setCurrentMessageIndex(prev => prev + 1);
                }, 3000); // Simulate speaking time
            } else {
                timeout = setTimeout(() => {
                    setMessages(prev => [message, ...prev]);
                    setCurrentMessageIndex(prev => prev + 1);
                }, 2000);
            }
        }
        
        return () => {
            clearTimeout(timeout);
        };
    }, [callStatus, currentMessageIndex]);
    
    const toggleMicrophone = () => {
        setIsMuted(!isMuted);
    };
    
    const handleCall = () => {
        setCallStatus(CallStatus.CONNECTING);
        
        // Simulate connection delay
        setTimeout(() => {
            setCallStatus(CallStatus.ACTIVE);
            setMessages([]);
            setCurrentMessageIndex(0);
        }, 1500);
    };
    
    const handleDisconnect = () => {
        setCallStatus(CallStatus.FINISHED);
        setIsSpeaking(false);
    };
    
    const resetDemo = () => {
        setCallStatus(CallStatus.INACTIVE);
        setMessages([]);
        setCurrentMessageIndex(0);
    };
    
    return (
        <section className="flex flex-col bg-white p-6 rounded-xl shadow-md">            <h2 className="text-2xl font-bold mb-6 text-center">Interactive Learning with AI Companions</h2>

            <section className='flex items-center justify-center mb-6 w-full'>
                <Ctathree />
            </section>
            
            <section className="flex gap-8 max-sm:flex-col">
                <div className="companion-section">
                    <div className="companion-avatar" style={{ backgroundColor: getSubjectColor(subject)}}>
                        <div
                            className={
                            cn(
                                'absolute transition-opacity duration-1000', 
                                callStatus === CallStatus.FINISHED || callStatus === CallStatus.INACTIVE ? 'opacity-100' : 'opacity-0', 
                                callStatus === CallStatus.CONNECTING && 'opacity-100 animate-pulse'
                            )
                        }>
                            <Image src={`/icons/${subject}.svg`} alt={subject} width={150} height={150} className="max-sm:w-fit" />
                        </div>

                        <div className={cn('absolute transition-opacity duration-1000', callStatus === CallStatus.ACTIVE ? 'opacity-100': 'opacity-0')}>
                            <Lottie
                                lottieRef={lottieRef}
                                animationData={soundwaves}
                                autoplay={false}
                                className="companion-lottie"
                            />
                        </div>
                    </div>
                    <p className="font-bold text-2xl">{name}</p>
                </div>

                <div className="user-section">
                    <div className="user-avatar">
                        <div className="bg-gray-200 rounded-lg w-[130px] h-[130px] flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <p className="font-bold text-2xl">
                            {userName}
                        </p>
                    </div>
                    <button className="btn-mic" onClick={toggleMicrophone} disabled={callStatus !== CallStatus.ACTIVE}>
                        <Image src={isMuted ? '/icons/mic-off.svg' : '/icons/mic-on.svg'} alt="mic" width={36} height={36} />
                        <p className="max-sm:hidden">
                            {isMuted ? 'Turn on microphone' : 'Turn off microphone'}
                        </p>
                    </button>
                    {callStatus === CallStatus.FINISHED ? (
                        <button 
                            className="rounded-lg py-2 cursor-pointer transition-colors w-full text-white bg-blue-600" 
                            onClick={resetDemo}
                        >
                            Start New Demo
                        </button>
                    ) : (
                        <button 
                            className={cn(
                                'rounded-lg py-2 cursor-pointer transition-colors w-full text-white', 
                                callStatus === CallStatus.ACTIVE ? 'bg-red-700' : 'bg-primary', 
                                callStatus === CallStatus.CONNECTING && 'animate-pulse'
                            )} 
                            onClick={callStatus === CallStatus.ACTIVE ? handleDisconnect : handleCall}
                        >
                            {callStatus === CallStatus.ACTIVE
                                ? "End Session"
                                : callStatus === CallStatus.CONNECTING
                                    ? 'Connecting'
                                    : 'Start Demo Session'
                            }
                        </button>
                    )}
                </div>
            </section>

            <section className="transcript mt-6">
                <div className="transcript-message no-scrollbar">
                    {messages.map((message, index) => {
                        if(message.role === 'assistant') {
                            return (
                                <p key={index} className="max-sm:text-sm">
                                    {name.split(' ')[0].replace('/[.,]/g', ',')}: {message.content}
                                </p>
                            );
                        } else {
                           return (
                               <p key={index} className="text-primary max-sm:text-sm">
                                    {userName}: {message.content}
                                </p>
                           );
                        }
                    })}
                    
                    {callStatus === CallStatus.INACTIVE && (
                        <p className="text-center text-gray-500 italic">
                            Press &quot;Start Demo Session&quot; to see how companions help you learn
                        </p>
                    )}
                </div>

                <div className="transcript-fade" />
            </section>
            
            <div className="mt-4 text-center text-sm text-gray-500">
                <p>This is a demonstration of the AI companion learning experience. In the actual app, you&apos;ll be able to have real voice conversations.</p>
            </div>
        </section>
    );
};

export default Demo;