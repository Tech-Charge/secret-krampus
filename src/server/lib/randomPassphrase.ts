// TODO: Generate cool sentences
export const randomPassphrase = (): string => {
  return (Math.random()).toString(36).substring(2, 8);
};

export default randomPassphrase;
