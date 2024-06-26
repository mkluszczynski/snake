export type Command = {
  name: string;
  exec: () => void | Promise<void>;
};
