// global variables
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __ACC__: boolean;

// extend window object
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
  onYouTubeIframeAPIReady: Function;
}

// files
declare module '*.svg';
declare module '*.png' {
  const value: string;
  export = value;
}
declare module '*.jpg' {
  const value: string;
  export = value;
}
declare module '*.png?external' {
  const value: string;
  export = value;
}
declare module '*.jpg?external' {
  const value: string;
  export = value;
}
declare module '*.otf' {
  const value: string;
  export = value;
}
declare module '*.json' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const value: any;
  export default value;
}
