import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { useTranslations } from "next-intl";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Contact() {
    const t = useTranslations("contact")
    const words = [
        {
            text: t("1"),
        },
        {
            text: t("2"),
        },

        {
            text: t("3"),
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className="flex flex-col gap-2 px-20  h-svh items-center md:mt-40 mt-30 ">
            <TypewriterEffectSmooth words={words} />
            <div className="flex">
                <button className="w-40 mr-2 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    <a href={t("mailto")}>
                        {t("mail")}
                    </a>
                </button>
                <button type="button" className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    <a download={true} href="/cv.pdf">
                        {t("download")}
                    </a>
                </button>
            </div>
            <div className=" h-[20rem] lg:h-[40rem]  ">
                <TextHoverEffect text="KAI" />
            </div>
        </div>

    );
}
