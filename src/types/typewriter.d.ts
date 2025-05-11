declare module 'typewriter-effect/dist/core' {
  export default class Typewriter {
    constructor(element: HTMLElement | null, options: TypewriterOptions);
  }

  interface TypewriterOptions {
    strings?: string[];
    autoStart?: boolean;
    loop?: boolean;
    delay?: number;
    deleteSpeed?: number;
    cursor?: string;
    devMode?: boolean;
    wrapperClassName?: string;
    cursorClassName?: string;
    stringSplitter?: (text: string) => string[];
    onCreateTextNode?: (character: string) => Text;
    onRemoveNode?: (node: HTMLElement) => void;
  }
}