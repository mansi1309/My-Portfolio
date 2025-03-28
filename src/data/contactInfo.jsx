import LinkedIn, { GitHub, GMail, Telegram, Resume } from "../components/Icons";
// import {  Discord, Twitter } from "../components/Icons";
import ResumeLink from "../assets/Mansi_Resume_Updated.pdf"
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/mansi-rai-378a54253/",
        icon: <LinkedIn />,
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/mansi1309",
        icon: <GitHub />,
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:raimansi76@gmail.com",
        icon: <GMail />,
    },

    // {
    //     id: 4,
    //     name: "Telegram",
    //     link: "https://web.telegram.org/a/",
    //     icon: <Telegram />,
    // },
    {
        id: 5,
        name: "Resume",
        link: ResumeLink,
        icon: <Resume />,
        download: true
    }
    // {
    //   id: 6,
    //   name: "Twitter",
    //   link: "twitter.com",
    //   icon: <Twitter />,
    // },
    // {
    //   id: 7,
    //   name: "Discord",
    //   link: "discord.com",
    //   icon: <Discord />,
    // },
];

export default contactInfo;