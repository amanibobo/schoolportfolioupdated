import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import NavBar from "@/components/NavBar";

export default function Project() {
    return (
        <>
            <NavBar />
            <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl items-center justify-center text-center mt-28">
                    Project: AP CSP Wordle
                </h1>

                <p className="mt-12 text-zinc-700 sm:text-lg items-center justify-center text-center">
                    This is a AP Computer Science Principles project that I created in my 10th grade year. It a wordle game but it is based off of NFL and NBA teams. Users have up to 5 guesses and after that they are unable to type in the terminal.
                </p>

                <p className="mt-5 text-zinc-700 sm:text-lg items-center justify-center text-center">
                    The project took around two months of things like creating a create task project and planning out what I want the program to do. I then coded it in class and submitted it to collegeboard.
                </p>

                <div>
                    <div className="mb-12 mx-auto max-w-5xl px-6 lg:px-8">
                        <div className="mt-16 flow-root sm:mt-15">
                            <div className=" items-center justify-center -mt-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <video autoPlay muted loop>
                                    <source src="Presentation1.mp4" type="video/mp4" />
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

               
            </MaxWidthWrapper>
           
        </>
    )
}