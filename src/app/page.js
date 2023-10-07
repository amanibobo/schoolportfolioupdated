import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl items-center justify-center text-center mt-28">
          IA <span className="text-orange-500">Digital Research</span> Portfolio
        </h1>
        <p className="mt-12 text-zinc-700 sm:text-lg items-center justify-center text-center">
            A Portfolio of everthing I did in my Research Honors class at Innovation Academy!
            You can view things like my Research Method Artifact, FINER, and Some of the work that I did.
        </p>

      <p className="mt-5 text-zinc-700 sm:text-lg items-center justify-center text-center">
          When Im not in school and I have some free time, I love to do things like code, play basketball, run, and hangout with my friends occasionally.
        </p>
        
        <div>
          <div className="mb-16 mx-auto max-w-xl px-6 lg:px-8">
            <div className="mt-16 flow-root sm:mt-15">
              <div className=" items-center justify-center -mt-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                <Image src="/iaphoenix.jpg" width="761" height="762" quality="100" alt="iap" />
              </div>
            </div>
          </div>
      </div>
      </MaxWidthWrapper>


    </>
  )
}
