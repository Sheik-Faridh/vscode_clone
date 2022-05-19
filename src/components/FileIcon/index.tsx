import { FC } from 'react';
import {
  SiTypescript,
  SiJavascript,
  SiBabel,
  SiWebpack,
  SiDocker,
  SiCss3,
  SiHtml5,
  SiSass,
  SiPrettier,
  SiEslint,
  SiGit,
  SiSvg,
} from 'react-icons/si';
import { VscJson, VscStarFull } from 'react-icons/vsc';
import { IoIosSettings } from 'react-icons/io';
import { TiDocumentText } from 'react-icons/ti';

const FileIcon: FC<{ name: string }> = ({ name }) => {
  switch (true) {
    case /.babelrc.json|babel.config.json|.babelrc/.test(name):
      return <SiBabel color="#FFEB9B" />;
    case /webpack.config.js/.test(name):
      return <SiWebpack color="#8ACEF2" />;
    case /.eslintrc/.test(name):
      return <SiEslint color="#C27DF9" />;
    case /.prettierrc/.test(name):
      return <SiPrettier />;
    case /.env/.test(name):
      return <IoIosSettings />;
    case /.Dockerfile/.test(name):
      return <SiDocker />;
    case /.gitignore/.test(name):
      return <SiGit />;
    case name.split('.').at(-1) === 'html':
      return <SiHtml5 color="#E96228" />;
    case name.split('.').at(-1) === 'css':
      return <SiCss3 color="#1B73B7" />;
    case name.split('.').at(-1) === 'scss':
    case name.split('.').at(-1) === 'sass':
      return <SiSass color="#C76395" />;
    case name.split('.').at(-1) === 'js':
    case name.split('.').at(-1) === 'jsx':
      return <SiJavascript color="#EFD81C" />;
    case name.split('.').at(-1) === 'ts':
    case name.split('.').at(-1) === 'tsx':
    case /tsconfig.json/.test(name):
      return <SiTypescript color="#2F74C0" />;
    case name.split('.').at(-1) === 'json':
      return <VscJson color="#EDD94B" />;
    case name.split('.').at(-1) === 'svg':
      return <SiSvg color="#C27DF9" />;
    case name.split('.').at(-1) === 'ico':
      return <VscStarFull color="#EDD94B" />;
    default:
      return <TiDocumentText />;
  }
};

export default FileIcon;
