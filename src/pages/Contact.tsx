"use client";

import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export function Contact() {
    const words = [
        {
            text: "ReactJS",

        },
        {
            text: "NextJS",
        },
        {
            text: "Typescript",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Javascript",
            className: "text-blue-500 dark:text-blue-500",

        },
        {
            text: "Nodejs",
            className: "text-blue-500 dark:text-blue-500",
        },

    ];
    return (
        <div className="flex flex-col items-center justify-center h-[20rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-4xl sm:font-bold  ">
                Techologies
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    <a href="mailto:kaidev.contact@gmail.com" target="_blank">
                        Contact
                    </a>
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    <a href="https://www.topcv.vn/xem-cv/UQQHDgwCU1FcUlUHVFZZAAFXUlYPUgEKUgAOBQ06a0" target="_blank">
                        Resume
                    </a>
                </button>
            </div>
        </div>
    );
}
