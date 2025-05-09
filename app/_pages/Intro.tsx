"use client";
import React from "react";
import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/moving-border";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export function Intro() {
    const t = useTranslations('Intro');

    return (
        <div className="h-screen w-full flex items-center justify-center relative overflow-hidden bg-black">
            {/* Background Image */}
            <motion.img
                src="https://reacttraining.com/images/blog/default.png"
                alt="Background"
                className="h-screen z-20 w-full object-cover absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1 }}
            />

            {/* Overlay gradient */}

            {/* Text Content */}
            <div className="text-2xl md:text-5xl lg:text-7xl font-bold text-center text-white relative z-10 font-sans">
                {t('line_1')}
                <br />
                <ColourfulText text={t('highlight')} />
                <br />
                {t('line_2')}
                <div className="hover:translate-x-2 duration-150 ease-in-out">

                    <Link href={"/infomation"} >
                        <Button className="cursor-pointer ">
                            <MoveRight />

                        </Button>
                    </Link>
                </div>

            </div>


        </div >
    );
}