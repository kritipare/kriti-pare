import { SiInformatica } from "react-icons/si";

const Aboutme = () => {
    return (
        <div className="wrapper p-4">
            <div className="flex justify-center	items-center gap-4 text-2xl group pb-8">
                <h3 className="font-semibold relative overflow-hidden">
                    About Me
                    <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-blue-600 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </h3>
                <span className="text-blue-600"><SiInformatica /></span>
            </div>
            <div className="text-lg tracking-wide flex flex-col gap-6">
                <p>
                    I am a Frontend Engineer with 4 years of experience in React and Angular. I have a
                    strong foundation in front-end development I can create user-friendly and responsive web applications using React and its ecosystem. I have experience working on a variety of projects,
                    including building and maintaining single page applications,
                    integrating with REST APIs, and implementing responsive design
                    principles. I am also proficient in using tools such as Webpack, npm,
                    and Git for development and deployment.
                </p>
            </div>
        </div>
    );
};

export default Aboutme;