import { memo, SVGProps } from 'react';

const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0.75 4.15888C0.75 1.85895 2.67194 0 4.99672 0C7.32806 0 9.25 1.85895 9.25 4.15888C9.25 5.31785 8.8285 6.39381 8.13475 7.30579C7.3694 8.31176 6.42608 9.18823 5.36427 9.87621C5.12126 10.0352 4.90194 10.0472 4.63522 9.87621C3.56737 9.18823 2.62404 8.31176 1.86525 7.30579C1.17099 6.39381 0.75 5.31785 0.75 4.15888ZM3.59711 4.28838C3.59711 5.05885 4.22583 5.66483 4.99672 5.66483C5.76812 5.66483 6.40289 5.05885 6.40289 4.28838C6.40289 3.5239 5.76812 2.88842 4.99672 2.88842C4.22583 2.88842 3.59711 3.5239 3.59711 4.28838Z'
      fill='#42A7C3'
    />
  </svg>
);

const Memo = memo(LocationIcon);
export { Memo as LocationIcon };
