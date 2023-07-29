import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 14C0 14.88 0.39 15.67 1 16.22V18C1 18.55 1.45 19 2 19H3C3.55 19 4 18.55 4 18V17H12V18C12 18.55 12.45 19 13 19H14C14.55 19 15 18.55 15 18V16.22C15.61 15.67 16 14.88 16 14V4C16 0.5 12.42 0 8 0C3.58 0 0 0.5 0 4V14ZM3.5 15C2.67 15 2 14.33 2 13.5C2 12.67 2.67 12 3.5 12C4.33 12 5 12.67 5 13.5C5 14.33 4.33 15 3.5 15ZM12.5 15C11.67 15 11 14.33 11 13.5C11 12.67 11.67 12 12.5 12C13.33 12 14 12.67 14 13.5C14 14.33 13.33 15 12.5 15ZM14 9H2V4H14V9Z'
      fill='#42A8C3'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };