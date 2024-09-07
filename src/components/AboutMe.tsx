import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
    return (
        <div className="wrapper p-4">
            <Title text="About Me" icon={<SiInformatica />} />
            <div className="text-lg tracking-wide flex flex-col gap-6">
                <p className="text-left">
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