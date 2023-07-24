import { memo, SVGProps } from 'react';

const BgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 532 532' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={493.782} cy={391.091} rx={35.3455} ry={35.3348} fill='url(#paint0_linear_118_48)' />
    <g filter='url(#filter0_b_118_48)'>
      <ellipse cx={266} cy={265.848} rx={265.874} ry={265.793} stroke='url(#paint1_radial_118_48)' strokeWidth={80} />
    </g>
    <ellipse cx={86.8182} cy={197.241} rx={49.5818} ry={49.5668} fill='#FA8443' />
    <g filter='url(#filter1_b_118_48)'>
      <ellipse
        cx={266}
        cy={264.772}
        rx={215.282}
        ry={215.217}
        stroke='url(#paint2_radial_118_48)'
        strokeOpacity={0.49}
        strokeWidth={60}
      />
    </g>
    <ellipse cx={266} cy={264.771} rx={172.226} ry={172.174} stroke='url(#paint3_radial_118_48)' strokeWidth={80} />
    <ellipse cx={408.364} cy={42.6511} rx={12.7636} ry={12.7598} fill='url(#paint4_linear_118_48)' />
    <defs>
      <filter
        id='filter0_b_118_48'
        x={-49.8738}
        y={-49.9453}
        width={631.747}
        height={631.587}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_118_48' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_118_48' result='shape' />
      </filter>
      <filter
        id='filter1_b_118_48'
        x={10.7176}
        y={9.55464}
        width={510.565}
        height={510.435}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feGaussianBlur in='BackgroundImageFix' stdDeviation={5} />
        <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_118_48' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_118_48' result='shape' />
      </filter>
      <linearGradient
        id='paint0_linear_118_48'
        x1={529.127}
        y1={426.426}
        x2={458.458}
        y2={355.735}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#42A7C3' />
        <stop offset={0.750282} stopColor='#8ADBF0' />
      </linearGradient>
      <radialGradient
        id='paint1_radial_118_48'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(258.522 277.477) rotate(88.7893) scale(353.917 354.023)'
      >
        <stop offset={0.654764} stopColor='#E2F6FC' stopOpacity={0.36} />
        <stop offset={1} stopColor='#48B7D6' stopOpacity={0.84} />
      </radialGradient>
      <radialGradient
        id='paint2_radial_118_48'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(259.945 274.188) rotate(88.7893) scale(286.572 286.659)'
      >
        <stop offset={0.654764} stopColor='#E2F6FC' stopOpacity={0.36} />
        <stop offset={1} stopColor='#48B7D6' stopOpacity={0.84} />
      </radialGradient>
      <radialGradient
        id='paint3_radial_118_48'
        cx={0}
        cy={0}
        r={1}
        gradientUnits='userSpaceOnUse'
        gradientTransform='translate(261.156 272.304) rotate(88.7893) scale(229.258 229.327)'
      >
        <stop offset={0.654764} stopColor='#E2F6FC' stopOpacity={0.36} />
        <stop offset={1} stopColor='#48B7D6' stopOpacity={0.84} />
      </radialGradient>
      <linearGradient
        id='paint4_linear_118_48'
        x1={421.127}
        y1={55.4109}
        x2={395.608}
        y2={29.8836}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#FFA679' />
        <stop offset={0.750282} stopColor='#FA8443' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(BgIcon);
export { Memo as BgIcon };
