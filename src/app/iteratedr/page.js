import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function IteratedResearch() {
    return (
        <>
            <NavBar />
            <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl items-center justify-center text-center mt-28">
                    View FINERMAPS
                </h1>

                <p className="mt-12 text-zinc-700 sm:text-lg items-center justify-center text-center">
                    *I am changing my Reaserach Question*
                </p>


                <div>
                    <div className="mb-1 mx-auto max-w-2xl px-6 lg:px-8">
                        <div className="mt-16 flow-root sm:mt-15">
                            <div className=" items-center justify-center -mt-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <Image src="/finer1.jpg" width="765" height="1000" quality="100" alt="iap" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="mb-12 mx-auto max-w-2xl px-6 lg:px-8">
                        <div className="mt-16 flow-root sm:mt-15">
                            <div className=" items-center justify-center -mt-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <Image src="/finer2.jpg" width="765" height="1000" quality="100" alt="iap" />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
           
        </>
    )
}