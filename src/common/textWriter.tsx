"use client";
import { FlipWords } from "../components/ui/flip-words";

export function TextWriter() {
    return (
        <div className=" flex justify-center items-center px-4">
            <div className="md:text-6xl font-bold  mx-auto l ext-neutral-600 dark:text-neutral-400">
                Hello, I'm Kai <br />
                <FlipWords words={["Web.", "React.", "NextJS.",]} className="text-blue-500" />
                <span className="text-orange-500 md:text-7xl">Developer.</span>
            </div>
        </div >
    );
}
