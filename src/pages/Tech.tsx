import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

export function Tech() {
    const testimonials = [
        {
            quote:
                "A service that recommends posture correction exercises and provides results reports based on body analysis.Utilizes Google ML Kit’s Pose Detection feature to analyze users’ body shapes by capturing images through the camera..",
            name: "iPosture",
            designation: "Body Posture/Health care",
            src: "https://brickmate-global-site.s3.ap-northeast-2.amazonaws.com/image/2024-11-11/6731dbed90695b55900c95d5.png",
        },
        {
            quote:
                "A location-based community service integrating the Naver Maps API.An SNS platform offering map- based content and Q&A features. Users can upload moments(posts) and ask location - specific questions, fostering interaction.It also",
            name: "PREZEM",
            designation: "Community/SNS",
            src: "https://brickmate-global-site.s3.ap-northeast-2.amazonaws.com/image/2024-11-06/672b869090695b55900c950d.jpg",
        },

        {
            quote:
                "A digital authentication fandom app for enjoying K-pop culture.A digital passport and innovative membership service from SM Entertainment, allowing fans to collect stamps through GPS verification and QR code scans at online/ offline events.",
            name: "SM Town",
            designation: "QR Scanning/Fandom Platform",
            src: "https://brickmate-global-site.s3.ap-northeast-2.amazonaws.com/image/2024-11-07/672cc0f990695b55900c956d.png",
        },
        {
            quote:
                "A global audition platform connecting aspiring celebrities with casting directors. upports user-to-user chat functionality, allowing casting directors to leave evaluations for aspiring talents, who can then view their results in graphical form.",
            name: "One Pick",
            designation: "Media/Matching platform",
            src: "https://brickmate-global-site.s3.ap-northeast-2.amazonaws.com/image/2024-11-20/673de61890695b55900c9725.png",
        },
        {
            quote:
                "First project full stack ExpressJS, React, MySql, Zustand, Vercel Deploy.",
            name: "My Project",
            designation: "E-commerce",
            link: "https://fe-ecom-sand.vercel.app/",
            src: "https://i.ibb.co/QvH1fHv/image.png",
        },
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}



//         title: "My Project",
//         link: "https://fe-ecom-sand.vercel.app/",
//         thumbnail:
//             "https://i.ibb.co/QvH1fHv/image.png",
//     },