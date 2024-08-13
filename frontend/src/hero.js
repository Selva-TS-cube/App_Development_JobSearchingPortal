import { HiSearch } from "react-icons/hi"
import { IoLocationOutline } from "react-icons/io5"
import { useNavigate } from 'react-router-dom';
import "./hero.css";

const Hero = () => {
    const navigate = useNavigate();

    const handleExploreMore = () => {
        navigate('/job');
    };


    return (
        <div className="bg-[#fafbfc] pt-24">
            <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-6">
                <h1 className="xl:text-7xl lg:text-5xl sm:text-3xl text-2xl xl:leading-normal lg:leading-normal font-bold text-center">
                    Find your {""}
                    <span className="bg-primary text-white whitespace-pre">
                        dream jobs
                    </span> {""}
                    in <br /> Shigoto
                </h1>
                <p className="text-2xl lg:w-1/2 text-center leading-10 my-8">
                    The best place to find your next job is on platforms like LinkedIn, Glassdoor, or Indeed, combined with leveraging personal and professional networks for insights and referrals.
                </p>
                <button 
                    className="mt-8 bg-primary text-white rounded-full px-8 py-3 xl:text-xl text-lg font-semibold"
                    onClick={handleExploreMore}
                >
                    Explore More
                </button>
            </div>
        </div>
    )
}

export default Hero