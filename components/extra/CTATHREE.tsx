import Image from "next/image";
import Link from "next/link";
// import Lottie from "lottie-react";
// import industryAnimation from "../../constants/ai-animation.json";

const Ctathree = () => {
    return (
        <section className="flex flex-row w-full items-center justify-between bg-white p-4 rounded-lg shadow-lg dark:bg-gray-800">
            <div className="flex flex-row items-center gap-4 flex-1">
                <div className="flex flex-col text-left max-w-sm">
                    <div className="inline-block px-4 py-1 mb-2 rounded-full bg-gradient-to-r from-pink-200 to-purple-200 dark:from-pink-800 dark:to-purple-800 text-pink-700 dark:text-pink-300 font-medium text-sm w-fit">
                        learn your way.
                    </div>
                    <h2 className="text-xl font-bold mb-2 text-purple-600 dark:text-purple-300">
                        AI companions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Click start learning to experience smart learning.
                    </p>
                </div>

                {/* Lottie animation */}
                
            </div>

            <Link href="/companions/new" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-medium transition-all shadow-md hover:shadow-lg ml-4 flex-shrink-0">
                <Image src="/icons/plus.svg" alt="plus" width={10} height={10} className="invert" />
                <span>Start Learning</span>
            </Link>
        </section>
    )
}
export default Ctathree