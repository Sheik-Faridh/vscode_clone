///<reference types="react" />

type TerminalProps = {
  theme: 'dark' | 'light';
  prefix: string;
};

declare module 'term/Terminal' {
  const Terminal: React.ComponentType<TerminalProps>;

  export default Terminal;
}
