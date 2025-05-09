
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import { onepickbmImages } from "../_assets/1pick";
import { iposImages } from "../_assets/ipos";
import { personalIMG } from "../_assets/personal";
import { smbmImages } from "../_assets/smbm";

import ProjectInfomation from "../(components)/ProjectInfomation";

export function Project() {
    const t = useTranslations('Infomation');
    const imgSMBM = [smbmImages.sm_1, smbmImages.sm_2, smbmImages.sm_3, smbmImages.sm_4]
    const imgIPos = [iposImages.ipos_1, iposImages.ipos_2, iposImages.ipos_3, iposImages.ipos_4]
    const imgPersonal = [personalIMG.file_1, personalIMG.file_2]
    const imgONEPICK = [onepickbmImages.onepick_1, onepickbmImages.onepick_2, onepickbmImages.onepick_3, onepickbmImages.onepick_4]
    const imgEcom = [{
        src: "https://media.licdn.com/dms/image/v2/D562DAQGBCOTDWxyEcA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1739218895413?e=1747411200&v=beta&t=1lESnFzuuA_coc5le3a8QmFw7RjzmhmGn8p5LsoIR0I"
    }]
    const data = [
        {
            title: t("time_line_bm"),
            content: (
                <>
                    <ProjectInfomation
                        title={
                            t("smbm.title")
                        }
                        des={t("smbm.des")}
                        img={imgSMBM}
                    />
                    <ProjectInfomation
                        title={
                            t("onepick.title")
                        }
                        des={t("onepick.des")}
                        img={imgONEPICK}

                    />
                    <ProjectInfomation
                        title={
                            t("iposture.title")
                        }
                        des={t("iposture.des")}
                        img={imgIPos}

                    />
                </>
            ),
        },
        {
            title: t("time_line_scb"),
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-2xl dark:text-neutral-200">
                        {t('scb.company')}
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        {t('scb.title')}
                    </p>
                    <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                        {t('scb.des')}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://i.ytimg.com/vi/ADqlXmyoetk/maxresdefault.jpg"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBpfBfsXX9M2RrSoHsDBj8SMcBoYpz_d-gA&s"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />

                    </div>
                </div>
            ),
        },
        {
            title: t("time_line_personal"),
            content: (
                <>
                    <ProjectInfomation
                        isPreview
                        link="https://fe.list-job.kaidev.io.vn/"
                        title={
                            t("joblist.title")
                        }
                        des={t("joblist.des")}
                        img={imgPersonal}

                    />
                    <ProjectInfomation
                        isPreview
                        link="https://store.kaidev.io.vn/"
                        title={
                            t("ecommerce.title")
                        }
                        des={t("ecommerce.des")}
                        img={imgEcom}

                    />

                    {/* < className="mb-8">
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            {t("joblist.title")}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                            {t("ecommerce.title")}
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src="https://assets.aceternity.com/pro/hero-sections.png"
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/features-section.png"
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://media.licdn.com/dms/image/v2/D562DAQGBCOTDWxyEcA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1739218895413?e=1747411200&v=beta&t=1lESnFzuuA_coc5le3a8QmFw7RjzmhmGn8p5LsoIR0I"
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src="https://assets.aceternity.com/cards.png"
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div> */}
                </>
            ),
        },
    ];
    return (
        <div id="infomation" className="relative w-full overflow-clip">
            <Timeline summary={t('summary')} title={t('title')} data={data} />
        </div>
    );
}
