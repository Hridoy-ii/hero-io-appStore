import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { HiOutlineCheckCircle, HiOutlineClock } from 'react-icons/hi';

const Banner = () => {
    return (
        <section className="container mx-auto px-4 pt-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                We Build <br /> <span className="text-primary">Productive</span> Apps
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>

            <div className="flex justify-center gap-4 mt-8">
                <button className="btn btn-outline gap-2 normal-case border-gray-300 hover:bg-gray-100">
                    <FaGooglePlay className="text-xl" /> Google Play
                </button>
                <button className="btn btn-outline gap-2 normal-case border-gray-300 hover:bg-gray-100">
                    <FaApple className="text-xl" /> App Store
                </button>
            </div>

            {/* Hero Image Placeholder */}
            <div className="mt-10 relative max-w-fit mx-auto">
                <img
                    src="/hero.png"
                    alt="App Preview"
                    className=""
                />
            </div>
        </section>
    );
};

export default Banner;