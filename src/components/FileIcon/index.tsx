import { FC } from 'react';
import { SiTypescript, SiBabel, SiWebpack, SiDocker, SiCss3, SiHtml5, SiSass, SiEslint, SiGit } from 'react-icons/si';
import { VscJson, VscStarFull } from 'react-icons/vsc';
import { IoIosSettings } from 'react-icons/io';
import { TiDocumentText } from 'react-icons/ti';
import Image from '@assets/svg/image.svg';
import Markdown from '@assets/svg/markdown.svg';
import Prettier from '@assets/svg/prettier.svg';
import Less from '@assets/svg/less.svg';
import JavaScript from '@assets/svg/javascript.svg';
import NPM from '@assets/svg/npm.svg';
import SVG from '@assets/svg/svg.svg';
import TypeScript from '@assets/svg/typescript.svg';
import YML from '@assets/svg/yml.svg';

const FileIcon: FC<{ name: string }> = ({ name }) => {
  const extension = name.split('.').at(-1);
  const defaultFilesCollection = {
    html: <SiHtml5 color="#E96228" />,
    css: <SiCss3 color="#1B73B7" />,
    scss: <SiSass color="#C76395" />,
    sass: <SiSass color="#C76395" />,
    js: <JavaScript />,
    jsx: <JavaScript />,
    less: <Less />,
    ts: <TypeScript />,
    tsx: <TypeScript />,
    json: <VscJson color="#EDD94B" />,
    svg: <SVG />,
    ico: <VscStarFull color="#EDD94B" />,
    yml: <YML />,
    md: <Markdown />,
    txt: <TiDocumentText />,
  };
  switch (true) {
    case /.babelrc.json|babel.config.json|.babelrc/.test(name):
      return <SiBabel color="#FFEB9B" />;
    case /^webpack([a-zA-Z0-9\s_\\.\-\(\):])+(.js|.json)$/i.test(name):
      return <SiWebpack color="#8ACEF2" />;
    case /.eslintrc|.eslintrc.json/.test(name):
      return <SiEslint color="#C27DF9" />;
    case /.prettierrc/.test(name):
      return <Prettier />;
    case /^(\.env).*$/.test(name):
      return <IoIosSettings />;
    case /.Dockerfile/.test(name):
      return <SiDocker />;
    case /.gitignore/.test(name):
      return <SiGit color="#ABABAB" />;
    case /.npmignore|.npmrc/.test(name):
      return <NPM />;
    case /tsconfig.json/.test(name):
      return <SiTypescript color="#2F74C0" />;
    case /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(name):
      return <Image />;
    default:
      return defaultFilesCollection[extension as keyof typeof defaultFilesCollection] || <TiDocumentText />;
  }
};

export default FileIcon;
