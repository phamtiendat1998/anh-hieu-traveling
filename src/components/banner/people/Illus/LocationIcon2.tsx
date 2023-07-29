import { memo, SVGProps } from 'react';

const LocationIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 8 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.458333 4.29907C0.458333 2.38245 2.05995 0.833333 3.99727 0.833333C5.94005 0.833333 7.54167 2.38245 7.54167 4.29907C7.54167 5.26487 7.19042 6.16151 6.61229 6.92149C5.9745 7.7598 5.1884 8.49019 4.30356 9.06351C4.10105 9.19601 3.91828 9.20601 3.69602 9.06351C2.80614 8.49019 2.02004 7.7598 1.38771 6.92149C0.80916 6.16151 0.458333 5.26487 0.458333 4.29907ZM2.83093 4.40698C2.83093 5.04904 3.35486 5.55403 3.99727 5.55403C4.6401 5.55403 5.16907 5.04904 5.16907 4.40698C5.16907 3.76991 4.6401 3.24035 3.99727 3.24035C3.35486 3.24035 2.83093 3.76991 2.83093 4.40698Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(LocationIcon2);
export { Memo as LocationIcon2 };