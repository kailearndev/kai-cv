"use client";
import {
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavToggle,
    Navbar,
    NavbarButton,
    NavbarLogo,
    NavBody,
    NavItems,
} from "@/components/ui/resizable-navbar";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

export function NavbarDemo({ children }: { children: ReactNode }) {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const changeLanguage = (newLocale: string) => {
        const segments = pathname.split("/");
        segments[1] = newLocale; // đổi locale ở phần đầu path
        const newPath = segments.join("/");

        router.push(newPath);
    };

    const t = useTranslations();

    const navItems = [
        {
            name: t('Navbar.infomation'),
            link: "infomation",
        },
        {
            name: t('Navbar.project'),
            link: "project",
        },
        {
            name: t('Navbar.about'),
            link: "contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="relative w-full">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">

                        <NavbarButton onClick={() => changeLanguage(currentLocale === "jp" ? "en" : "jp")} variant="primary">
                            <div className="flex gap-2 items-center justify-center">
                                <div>
                                    {t('language')}
                                </div>
                                <div key={currentLocale} className="bounce-in">
                                    {currentLocale === "jp" ? "🇯🇵" : "🇺🇸"}
                                </div>
                            </div>

                        </NavbarButton>
                        {/* <NavbarButton variant="secondary">
                            <ModeToggle />
                        </NavbarButton> */}
                    </div>
                </NavBody >

                {/* Mobile Navigation */}
                < MobileNav >
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">

                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                {t('language')}
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav >
            </Navbar >
            <div className="py-10">
                {children}
            </div>
            {/* Navbar */}
        </div >
    );
}

// const DummyContent = () => {
//     return (
//         <div className="container mx-auto p-8 pt-24">
//             <h1 className="mb-4 text-center text-3xl font-bold">
//                 Check the navbar at the top of the container
//             </h1>
//             <p className="mb-10 text-center text-sm text-zinc-500">
//                 For demo purpose we have kept the position as{" "}
//                 <span className="font-medium">Sticky</span>. Keep in mind that this
//                 component is <span className="font-medium">fixed</span> and will not
//                 move when scrolling.
//             </p>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
//                 {[
//                     {
//                         id: 1,
//                         title: "The",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 2,
//                         title: "First",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 3,
//                         title: "Rule",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 4,
//                         title: "Of",
//                         width: "md:col-span-3",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 5,
//                         title: "F",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 6,
//                         title: "Club",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 7,
//                         title: "Is",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 8,
//                         title: "You",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 9,
//                         title: "Do NOT TALK about",
//                         width: "md:col-span-2",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                     {
//                         id: 10,
//                         title: "F Club",
//                         width: "md:col-span-1",
//                         height: "h-60",
//                         bg: "bg-neutral-100 dark:bg-neutral-800",
//                     },
//                 ].map((box) => (
//                     <div
//                         key={box.id}
//                         className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
//                     >
//                         <h2 className="text-xl font-medium">{box.title}</h2>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
