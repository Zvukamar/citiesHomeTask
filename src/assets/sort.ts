import { colors } from '../utils';

export default (color: string) => `
<?xml version="1.0" encoding="utf-8"?>
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 12H21M13 8H21M13 16H21M6 7V17M6 17L3 14M6 17L9 14" stroke=${color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
