
// import { accessCache } from 'next-build-cache';
// export const cache = accessCache('build.cache');

const NodeCache = require( "node-cache" );
export const cache = new NodeCache();



