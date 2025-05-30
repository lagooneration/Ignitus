import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";
import industryAnimation from "../../constants/ai-animation.json";

const Ctatwo = () => {
    return (
        <section className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="inline-block px-4 py-2 mb-4 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 text-pink-700 dark:text-pink-300 font-medium text-sm">
                Start learning your way.
            </div>
            <h2 className="text-3xl font-bold mb-4 text-purple-600 dark:text-purple-300">
                Personalized Learning 
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                Pick a name, subject, & personality — and start learning through voice conversations that feel natural and fun.
            </p>

            {/* Lottie animation */}
            <div className="my-6 transform transition-transform hover:scale-105 w-64 h-64">
                <Lottie animationData={industryAnimation} loop={true} />
            </div>

            {/* <div className="my-6 transform transition-transform hover:scale-105">
                <Image src="/images/cta.svg" alt="cta" width={320} height={200} className="mx-auto" />
            </div> */}
            <Link href="/companions/new" className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-medium transition-all shadow-md hover:shadow-lg">
                <Image src="/icons/plus.svg" alt="plus" width={12} height={12} className="invert" />
                <span>Start Learning</span>
            </Link>
        </section>
    )
}
export default Ctatwo