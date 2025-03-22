import zero_hunger from "../assets/Projects/zero_hunger.png"
import news_notes from "../assets/Projects/news_notes.jpg"
import translator from "../assets/Projects/translator.jpg"
import crop from "../assets/Projects/crop.png"
import tic_tac_toe from "../assets/Projects/tic_tac_toe.jpg"
import calculator from "../assets/Projects/calculator.jpg"
import weather_app from "../assets/Projects/weather_app.jpg"
import resume_builder from "../assets/Projects/resume_builder.jpg"
import to_do_app from "../assets/Projects/to_do_app.jpg"
import ECF from "../assets/Projects/ECF.png"
import CLI_TMA from "../assets/Projects/CLI_TMA.png"




const projects = [
    {
        img: zero_hunger,
        name: "Zero-Hunger",
        demo: "https://drive.google.com/file/d/11ke3EfUcfuDhUORe3CbTM6eu0gWPVnCh/view",
        code: "https://github.com/mansi1309/Zero-Hunger?tab=readme-ov-file",
        description: "Zero Hunger is a food donation platform combating hunger through instant donations. With secure JWT authentication and multi-role dashboards",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: news_notes,
        name: "NEWS-Notes",
        demo: "https://drive.google.com/file/d/1CzjquvJxQNfEwhazvMyTgjO0XmgoQAig/view",
        code: "https://github.com/mansi1309/NewsNotes-",
        description: "NewsNotes is a responsive platform combining real-time news updates and note-taking. Users can explore categorized news, search for specific articles, and create, save, or delete personal notes with timestamps.",
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: translator,
        name: "Language Translator App",
        demo: "https://drive.google.com/file/d/1RFJ2UNot601D9j3IqcGfcENvX7pVa4fN/view?usp=sharing",
        code: "https://github.com/mansi1309/Language-Translator-App",
        description: "It Translate text instantly across multiple languages, copy results with a click, and hear perfect pronunciations—all in real time!",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: crop,
        name: "Crop Recommendation System",
        demo: "https://github.com/mansi1309/Crop-Recommendation-System",
        code: "https://github.com/mansi1309/Crop-Recommendation-System",
        description: "The Crop Recommendation System uses machine learning to help farmers choose the best crops based on soil nutrients, temperature, humidity, and rainfall, boosting agricultural yield efficiently.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: tic_tac_toe,
        name: "Tic-Tac-Toe",
        demo: "https://mansi1309.github.io/Tic-Tac-Toe/",
        code: "https://github.com/mansi1309/Tic-Tac-Toe",
        description: "The game allows two players to play against each other on a 3x3 grid. The objective is to get three marks in a row, column, or diagonal. The project focuses on providing an interactive and user-friendly interface.",
        style: {
            shadow: "shadow-[#23CEEE]",
            cover: "from-[#23CEEE]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: calculator,
        name: "My Calculator",
        demo: "https://mansi1309.github.io/My_Calculator/",
        code: "https://github.com/mansi1309/My_Calculator",
        description: "The calculator supports basic arithmetic operations and provides a seamless user experience with a clean and intuitive interface.",
        style: {
            shadow: "shadow-[#277AF8]",
            cover: "from-[#277AF8]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: weather_app,
        name: "Dynamic Weather App",
        demo: "https://github.com/mansi1309/Dynamic-Weather-App",
        code: "https://github.com/mansi1309/Dynamic-Weather-App",
        description: "FontAwesome Clone is a Project based on Fontawesome.com, created using React Js and Tailwind CSS.",
        style: {
            shadow: "shadow-[#FFD43B]",
            cover: "from-[#FFD43B]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: resume_builder,
        name: "Resume Builder",
        demo: "https://drive.google.com/file/d/1Jx6VeFBs6XwB7N_24wIlqjKecFp2yi7f/view",
        code: "https://github.com/mansi1309/Resume_Builder",
        description: "A Resume Builder built with React.js lets users create, customize, and download resumes easily. It features real-time previews, dynamic forms, and PDF export using React-to-PDF. Styled with Tailwind CSS or Material-UI, it ensures a clean and professional UI.",
        style: {
            shadow: "shadow-[#011F3F]",
            cover: "from-[#011F3F]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: to_do_app,
        name: "TO-DO APP",
        demo: "https://mansi1309.github.io/To-Do-List/",
        code: "https://github.com/mansi1309/To-Do-List",
        description: "By To-do app is very easy to create your own to do list .",
        style: {
            shadow: "shadow-[#A582E2]",
            cover: "from-[#A582E2]",
            display: " hidden group-hover:flex"
        }
    },
    // {
    //     img: ECF,
    //     name: "Ecommerce Frontend",
    //     demo: "https://dhawal-793.github.io/E-Commerce-Website-Front-End-Design/",
    //     code: "https://github.com/dhawal-793/E-Commerce-Website-Front-End-Design",
    //     description: "Frontend Design of an Ecommerce Website created using HTML CSS JS and Bootstrap.",
    //     style: {
    //         shadow: "shadow-[#CEC3FB]",
    //         cover: "from-[#CEC3FB]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: CLI_TMA,
    //     name: "Task Manager CLI",
    //     demo: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
    //     code: "https://github.com/dhawal-793/Command-line-application-for-Task-Management",
    //     description: "This is a Task Management CLI App created using C++, here user can create, read, Update and delete tasks.",
    //     style: {
    //         shadow: "shadow-[#763145]",
    //         cover: "from-[#763145]",
    //         display: " hidden group-hover:flex"
    //     }
    // },
    // {
    //     img: "",
    //     name: "WordCloud Generator",
    //     demo: "https://github.com/dhawal-793/Wordcloud-maker",
    //     code: "https://github.com/dhawal-793/Wordcloud-maker",
    //     description: "This is a WordCloud Maker, Created using Python. User can create WordCloud by giving paragraph of text as Input.   ",
    //     style: {
    //         shadow: "shadow-emerald-500",
    //         cover: "from-emerald-500",
    // display:" hidden group-hover:flex"
    //     }
    // },
]
export default projects;