"use client";
import { useRouter } from "next/navigation";

const Hero = () => {
    const route = useRouter()

  return (
    <>
      <div className="bg-slate-200 h-[calc(100vh-72px)] items-center w-full flex flex-col pt-28">
        <div className="border-2 h-[54px] w-[240px] border-orange-500 flex items-center rounded-2xl gap-2 px-4 text-orange-500">
          <div className="flex pr-4">Logo</div>
          <div className="flex flex-col justify-between">
            <div className="text-xs">Product Hunt</div>
            <div className="text-md font-bold">#3 Get Discount</div>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-10 items-center">
          <div className="font-extrabold text-center text-5xl text-wrap w-[700px] text-[#1D2447]">
            REAL API Design-first{" "}
            <span className="text-blue-500">Development Platform</span>
          </div>

          <div className="mt-8 text-wrap text-sm w-[250px] text-[#1D2447] text-center">
            Design. Debug. Test. Document. Mock. Build APIs Faster & Together
          </div>

          <div className="flex justify-between gap-3 text-xs mt-8 text-[#7F85A3]">
            <div>
                <span>&#x2713;</span> No credit card required
            </div>
            <div>
                <span>&#x2713;</span> No time limit on Free plan
            </div>
          </div>

        <div className="flex justify-between mt-4 gap-10">
            <button className="bg-blue-500 text-white px-8 py-2 rounded-xl">Download</button>
            <button onClick={() => route.push('/teams')} className="text-blue-500 px-8 py-2 rounded-lg border border-blue-500">Launch Web APP</button>
        </div>

        </div>
      </div>
    </>
  );
};

export default Hero;