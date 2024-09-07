import { GiSkills } from "react-icons/gi";
import Title from "./Title";
import SkillsInput from "./SkillsInput";

const Skills = () => {
  return (
    <div className="wrapper">
      <Title text="Skills" icon={<GiSkills />} />
      <div className="flex gap-4 flex-wrap">
        <SkillsInput
          title="Javascript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <SkillsInput title="Reactjs" link="https://react.dev/" />
        <SkillsInput
          title="Typescript"
          link="https://www.typescriptlang.org/"
        />
        <SkillsInput
          title="Angular"
          link="https://angular.dev/"
        />
        <SkillsInput title="Nodejs" link="https://nodejs.org/en" />
        <SkillsInput title="Expressjs" link="https://expressjs.com/" />
        <SkillsInput title="Redux" link="https://redux.js.org/" />
        <SkillsInput title="REST API Integration" link="" />
        <SkillsInput title="Docker" link="" />
        <SkillsInput
          title="HTML5"
          link="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
        />
        <SkillsInput
          title="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillsInput title="Tailwindcss" link="https://tailwindcss.com/" />
        <SkillsInput title="VS Code" link="https://code.visualstudio.com/" />
      </div>
    </div>
  );
};

export default Skills;
