import dynamic from 'next/dynamic';

// @ts-expect-error TS(2345): Argument of type '() => Promise<typeof import("/Us... Remove this comment to see the full error message
const SimpleLayout = dynamic(() => import('./SimpleLayout'));

export default SimpleLayout;
