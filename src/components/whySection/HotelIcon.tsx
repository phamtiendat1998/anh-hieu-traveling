import { memo, SVGProps } from 'react';

const HotelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_128_42)'>
      <path d='M8.83336 13H0V40H8.83336V13Z' fill='#E8EAEA' />
      <path d='M40.0001 13H31.1667V40H40.0001V13Z' fill='#E8EAEA' />
      <path
        d='M0 13.5H40C40 12.5 39.1666 11.6666 38.1666 11.6666H1.83336C0.833359 11.6666 0 12.5 0 13.5Z'
        fill='#FFA679'
      />
      <path d='M31.1667 8.49986H8.83333V39.9999H31.1667V8.49986Z' fill='#F2F2F2' />
      <path
        d='M32.4167 6.66665H7.58337C7.08337 6.66665 6.66673 7.0833 6.66673 7.58329C6.66673 8.08329 7.08337 8.50001 7.58337 8.50001H32.4167C32.9167 8.50001 33.3334 8.08337 33.3334 7.58337C33.3334 7.08337 32.9167 6.66665 32.4167 6.66665Z'
        fill='#FFA679'
      />
      <path d='M6.33336 15.5H2.5V19.75H6.33336V15.5Z' fill='#42A8C3' />
      <path d='M6.33336 21.4168H2.5V25.6668H6.33336V21.4168Z' fill='#42A8C3' />
      <path d='M6.33336 27.3333H2.5V31.5833H6.33336V27.3333Z' fill='#42A8C3' />
      <path d='M6.33336 33.2499H2.5V37.4999H6.33336V33.2499Z' fill='#42A8C3' />
      <path d='M37.5 15.5H33.6667V19.75H37.5V15.5Z' fill='#42A8C3' />
      <path d='M37.5 21.4168H33.6667V25.6668H37.5V21.4168Z' fill='#42A8C3' />
      <path d='M37.5 27.3333H33.6667V31.5833H37.5V27.3333Z' fill='#42A8C3' />
      <path d='M37.5 33.2499H33.6667V37.4999H37.5V33.2499Z' fill='#42A8C3' />
      <path d='M15.5 22.9167H11.3333V27.1667H15.5V22.9167Z' fill='#8ECBDB' />
      <path d='M24.4166 29.5833H15.5V40H24.4166V29.5833Z' fill='#056D8A' />
      <path d='M40 38.25H0V40H40V38.25Z' fill='#ACB3BA' />
      <path d='M15.5 11.0833H11.3333V15.3333H15.5V11.0833Z' fill='#8ECBDB' />
      <path d='M15.5 17.0001H11.3333V21.2501H15.5V17.0001Z' fill='#8ECBDB' />
      <path d='M22.0832 11.0833H17.9166V15.3333H22.0832V11.0833Z' fill='#8ECBDB' />
      <path d='M22.0832 17.0001H17.9166V21.2501H22.0832V17.0001Z' fill='#8ECBDB' />
      <path d='M22.0832 22.9167H17.9166V27.1667H22.0832V22.9167Z' fill='#8ECBDB' />
      <path d='M28.6667 11.0833H24.5V15.3333H28.6667V11.0833Z' fill='#8ECBDB' />
      <path d='M28.6667 17.0001H24.5V21.2501H28.6667V17.0001Z' fill='#8ECBDB' />
      <path d='M28.6667 22.9167H24.5V27.1667H28.6667V22.9167Z' fill='#8ECBDB' />
    </g>
    <defs>
      <clipPath id='clip0_128_42'>
        <rect width={40} height={40} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(HotelIcon);
export { Memo as HotelIcon };
