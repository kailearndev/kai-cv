import { Preview } from "./LinkPreview"



type ProjectInfomationProps = |
{ isPreview: true; link: string; title: string; des: string; img: any[] }
    | { isPreview?: false; link?: undefined; title: string; des: string; img: any[] }

export default function ProjectInfomation({
    title,
    img,
    des,
    isPreview, link
}: ProjectInfomationProps): React.JSX.Element {


    return (
        <>
            <div className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 py-5">
                <div className="text-xl lg:text-3xl font-bold">
                    {link ? "" : title}
                </div>
                <div>
                    {isPreview && link && (
                        <Preview link={link} title={title} des={des} />
                    )}
                </div>
                <br />
                <div>
                    {link ? "" : des}
                </div>



            </div>
            <div className="grid grid-cols-2 gap-4">
                {img.map((item, idx) =>
                    <img
                        loading="lazy"
                        key={idx}
                        src={item.src}
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />)}

            </div>
        </>

    )
}