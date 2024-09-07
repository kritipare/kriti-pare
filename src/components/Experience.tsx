import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid gap-10">
        <ExperienceCard
          title="EPAM Systems"
          subTitle="Software Engineer 2022 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Gammastack"
          subTitle="Solution Engineer 2021 - 2022"
          icon={<SiToptal />}
        />
      </div>
    </div>
  );
};

export default Experience;
