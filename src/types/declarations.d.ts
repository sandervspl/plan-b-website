// global variables
declare const __DEV__: boolean;
declare const __PROD__: boolean;
declare const __ACC__: boolean;
declare const __TEST__: boolean;

// extend window object
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

// files
declare module '*.svg';
declare module '*.svg?external';
declare module '*.png' {
  const value: string;
  export = value;
}
declare module '*.jpg' {
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
