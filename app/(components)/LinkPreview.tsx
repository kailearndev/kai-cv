"use client";
import React from "react";
import { LinkPreview } from "@/components/ui/link-preview";

export function Preview({ link, title, des }: { link: string, title: string, des: string }) {
    return (
        <div className="flex justify-center items-start  flex-col ">
            <div className="text-neutral-500 dark:text-neutral-400 text-xl md:text-3xl max-w-3xl  text-left mb-10">

                <LinkPreview
                    url={link ?? ""}
                    className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                    {title}
                </LinkPreview>
                {des}

            </div>


        </div>
    );
}
