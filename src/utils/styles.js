export const mergeClassNames = (...args) => {
  return args.filter(argument => typeof argument === 'string').join(' ');
};
