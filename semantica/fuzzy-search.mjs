import Fuse from 'https://cdn.jsdelivr.net/npm/fuse.js@6.5.3/dist/fuse.esm.js';

const FUSE_OPTIONS = {
  isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  threshold: 0.6,
};

export const fuzzySearch = (list, keys = []) => {
  const fuse = new Fuse(list, { ...FUSE_OPTIONS, keys });
  return (pattern) => fuse.search(pattern);
};
