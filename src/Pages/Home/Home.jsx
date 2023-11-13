import { React } from "react";
import { bg } from "../../Assets";
import { useLocation } from "react-router-dom";
function useQuery(){
  return  new URLSearchParams(useLocation().search)
}
const Home = () => {

  const query = useQuery()

  const ref = query.get("ref")
  localStorage.setItem("ref", ref)
  return (
    <div>
      {/* Landing */}
      <div className="flex min-h-screen flex-col justify-center items-center bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <section className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
          <div className="space-y-4 flex-1 text-center ">
            <h1 className="text-amber-500 font-bold text-7xl xl:text-8xl font-grandstander">
              solmeme
            </h1>

            <p className="text-gray-300 max-w-xl text-xl  leading-relaxed sm:mx-auto font-jost">
              A Socio-Fi experiment built for meme lovers. A $MEM airdrop to all of #Solana coming soon.
            </p>

            <div className="py-4">
              <a href="/login" className="block py-3 my-7 px-4 font-jost text-center text-2xl text-white bg-gradient-to-b from-amber-500 to-orange-700  active:shadow-none rounded-full shadow md:inline">
                START FARMING
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
