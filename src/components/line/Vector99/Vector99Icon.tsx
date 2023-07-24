import { memo, SVGProps } from 'react';

const Vector99Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1749 1322' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      opacity={0.6}
      d='M1748.28 255.5C1488.78 298 1298.68 -46.2971 1072.78 5.49983C813.277 64.9997 763.327 565.125 732.777 889.5C688.277 1362 113.777 1483.5 17.7772 1068.5C-34.0393 844.5 17.7772 585.5 302.277 630.5C593.007 676.486 1603.78 687.5 1721.78 957'
      stroke='url(#paint0_linear_120_85)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeDasharray='32 32'
    />
    <defs>
      <linearGradient
        id='paint0_linear_120_85'
        x1={744.777}
        y1={1275}
        x2={1126.48}
        y2={-207.354}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.237279} stopColor='#42A7C3' />
        <stop offset={1} stopColor='#8ADBF0' stopOpacity={0.54} />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Vector99Icon);
export { Memo as Vector99Icon };
