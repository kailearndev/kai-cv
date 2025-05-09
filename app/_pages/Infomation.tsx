"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useTranslations } from "next-intl";
const stack =
    [
        {
            id: 1,
            name: "ReactJS",
            designation: "Frontend",
            image:
                "https://externlabs.com/blogs/wp-content/uploads/2021/10/what-is-react-1024x724.png",
        },
        {
            id: 2,
            name: "NextJS",
            designation: "Frontend",
            image:
                "https://img.icons8.com/?size=100&id=AU6Wc7r56Fxz&format=png&color=000000",
        },
        {
            id: 3,
            name: "Javascript",
            designation: "Frontend",
            image:
                "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
        },
        {
            id: 4,
            name: "Typescript",
            designation: "Frontend",
            image:
                "https://img.icons8.com/?size=100&id=uJM6fQYqDaZK&format=png&color=000000",
        },
        {
            id: 5,
            name: "NodeJS",
            designation: "Backend",
            image:
                "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
        },
        {
            id: 6,
            name: "Go",
            designation: "Backend",
            image:
                "https://www.contrastsecurity.com/hs-fs/hubfs/golang-l-logo.jpg?width=340&height=219&name=golang-l-logo.jpg",
        },
        {
            id: 7,
            name: "Git",
            designation: "Tools",
            image:
                "https://static.vecteezy.com/system/resources/previews/046/437/248/non_2x/github-logo-transparent-background-free-png.png",
        },

    ];
const ui =
    [
        {
            id: 1,
            name: "Tailwind",
            designation: "UI",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
        },
        {
            id: 2,
            name: "Shadcn",
            designation: "UI",
            image:
                "https://images.seeklogo.com/logo-png/51/1/shadcn-ui-logo-png_seeklogo-519786.png",
        },
        {
            id: 3,
            name: "Daisy UI",
            designation: "UI",
            image:
                "https://images.seeklogo.com/logo-png/61/1/daisyui-logo-png_seeklogo-616852.png",
        },
        {
            id: 4,
            name: "MUI",
            designation: "Frontend",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5jAcRSDN_ck1Cnivp0JIcRPdJ7-BmkvuAA&s",
        },
        {
            id: 5,
            name: "AWS",
            designation: "Backend",
            image:
                "https://cdn.iconscout.com/icon/free/png-256/free-aws-logo-icon-download-in-svg-png-gif-file-formats--cloud-computing-network-server-database-brand-pack-logos-icons-1583149.png?f=webp&w=256",
        },
        {
            id: 6,
            name: "Figma",
            designation: "UI",
            image:
                "https://i.pinimg.com/736x/a5/58/b4/a558b426cb8973523f37bbed94cf0f09.jpg",
        },
        {
            id: 7,
            name: "Jira",
            designation: "Tools",
            image:
                "https://static-00.iconduck.com/assets.00/jira-icon-512x512-kkop6eik.png",
        },

    ];




export function Infomation() {
    const t = useTranslations("techstack")
    const z = useTranslations("career")
    const projects = [
        {
            title: `${z("steps.1.title")} ${z("steps.1.year")}`,
            description:
                z("steps.1.desc"),
            link: "",
        },
        {
            title: `${z("steps.2.title")} ${z("steps.2.year")}`,
            description:
                z("steps.2.desc"),
            link: "",
        },
        {
            title: `${z("steps.3.title")} ${z("steps.3.year")}`,
            description:
                z("steps.3.desc"),
            link: "",
        },
        {
            title: `${z("steps.4.title")} ${z("steps.4.year")}`,
            description:
                z("steps.4.desc"),
            link: "",
        },
        {
            title: `${z("steps.5.title")} ${z("steps.5.year")}`,
            description:
                z("steps.5.desc"),
            link: "",
        },
    ];

    return (
        <div className="flex flex-col px-10 gap-5 justify-center items-center   py-10">
            <div className=" ">
                {t("title")}
            </div>
            <div className="flex flex-col gap-3 ">

                <div className="flex gap-3">
                    <AnimatedTooltip items={stack} />
                </div>
                <div className="flex gap-3">
                    <AnimatedTooltip items={ui} />

                </div>



            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}
