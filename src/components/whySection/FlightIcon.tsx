import { memo, SVGProps } from 'react';

const FlightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect width={64} height={64} rx={16} fill='white' />
    <path
      d='M21.9414 40.3859L16.987 36.4891C16.7164 36.2855 16.6278 35.9261 16.7902 35.6909C17.5843 34.5409 19.114 34.1481 20.617 34.7083L25.0977 37.2501L21.9414 40.3859Z'
      fill='#42A8C3'
    />
    <path
      d='M23.6041 42.0485L27.5112 47.0131C27.7147 47.2837 28.0741 47.3723 28.3093 47.2099L28.6047 47.0059C29.5774 46.3343 29.9096 45.0404 29.4358 43.7691L26.7502 38.9024L23.6041 42.0485Z'
      fill='#42A8C3'
    />
    <path d='M22.2304 35.6234L19.4273 38.4083L21.9413 40.3858L25.0977 37.2498L22.2304 35.6234Z' fill='#219FC0' />
    <path
      d='M23.2836 25.1235C22.6614 24.5013 22.6121 23.5099 23.168 22.8278C23.9631 21.8521 24.9591 20.7658 25.5567 20.1682C26.3741 19.3508 26.4455 19.4484 27.3189 18.9131C27.4475 18.8342 27.6134 18.8533 27.7201 18.9599L29.4472 20.687C29.5539 20.7937 29.5728 20.9596 29.494 21.0882C28.9587 21.9616 29.0563 22.0329 28.2389 22.8504C27.6414 23.4479 26.555 24.444 25.5793 25.2391C24.8972 25.7948 23.9057 25.7457 23.2836 25.1235Z'
      fill='#FFBFAB'
    />
    <path
      d='M38.8763 40.7163C38.2541 40.0941 38.2048 39.1027 38.7607 38.4206C39.5557 37.4449 40.5518 36.3585 41.1494 35.761C41.9668 34.9435 42.0382 35.0412 42.9116 34.5058C43.0402 34.427 43.2061 34.446 43.3128 34.5527L45.0399 36.2798C45.1466 36.3864 45.1655 36.5524 45.0867 36.681C44.5514 37.5543 44.649 37.6257 43.8316 38.4432C43.2341 39.0407 42.1477 40.0368 41.172 40.8319C40.4899 41.3877 39.4985 41.3385 38.8763 40.7163Z'
      fill='#FFBFAB'
    />
    <path
      d='M31.0835 31.013L37.1959 24.9006L18.2609 18.9514C17.871 18.8518 17.4833 18.9466 17.2254 19.2046L15.6257 20.8043C15.0899 21.3401 15.3199 22.3222 16.0762 22.7283L31.0835 31.013Z'
      fill='#42A8C3'
    />
    <path d='M32.9175 23.5565L27.4608 29.0132L31.0835 31.0131L37.1959 24.9007L32.9175 23.5565Z' fill='#219FC0' />
    <path
      d='M32.9868 32.9165L39.0993 26.8041L45.0485 45.7391C45.148 46.129 45.0532 46.5167 44.7953 46.7746L43.1955 48.3743C42.6598 48.9101 41.6777 48.6801 41.2716 47.9238L32.9868 32.9165Z'
      fill='#42A8C3'
    />
    <path
      d='M44.5241 24.2346L34.2553 34.5032C32.5323 36.2263 30.7004 37.8335 28.7826 39.3047L23.8969 43.0526C22.7659 43.9203 21.4207 44.0253 20.6977 43.3023C19.9747 42.5793 20.0797 41.2341 20.9474 40.1031L24.6953 35.2174C26.1665 33.2995 27.7736 31.4678 29.4967 29.7447L39.7655 19.476C41.1693 18.0722 42.7815 16.9026 44.4847 16.0996C45.9514 15.4081 47.5105 14.9749 48.2678 15.7322C49.0251 16.4895 48.5919 18.0486 47.9004 19.5153C47.0975 21.2186 45.9279 22.8308 44.5241 24.2346Z'
      fill='#E0F3FC'
    />
    <path
      d='M48.2677 15.7323C48.0011 15.4658 47.635 15.3471 47.2088 15.335C47.2394 16.1236 46.8974 17.1239 46.4445 18.0846C45.6416 19.7878 44.472 21.4 43.0681 22.8038L32.7995 33.0725C31.0764 34.7955 29.2446 36.4027 27.3267 37.8738L22.4411 41.6217C21.7217 42.1736 20.9158 42.4164 20.2383 42.3344C20.2892 42.7104 20.441 43.0456 20.6976 43.3022C21.4206 44.0252 22.7658 43.9202 23.8969 43.0525L28.7825 39.3046C30.7004 37.8334 32.5321 36.2263 34.2553 34.5032L44.524 24.2346C45.9278 22.8308 47.0974 21.2186 47.9004 19.5154C48.5918 18.0486 49.025 16.4896 48.2677 15.7323Z'
      fill='#C3D3DB'
    />
    <path
      d='M45.3749 22.2681L45.0243 22.6188C44.6986 22.9444 41.0558 19.3016 41.3814 18.9759L41.7321 18.6253C41.9531 18.4042 42.2775 18.3346 42.5417 18.4514C43.8581 19.0337 44.9665 20.1422 45.5488 21.4585C45.6655 21.7227 45.5959 22.0471 45.3749 22.2681Z'
      fill='#51C4F5'
    />
    <path
      d='M21.8071 42.681C21.6822 42.681 21.5572 42.6334 21.4619 42.538C21.2712 42.3473 21.2712 42.0381 21.4619 41.8475L25.7259 37.5834C25.9166 37.3927 26.2258 37.3927 26.4164 37.5834C26.6071 37.7741 26.6071 38.0833 26.4164 38.2739L22.1524 42.538C22.0571 42.6333 21.9321 42.681 21.8071 42.681Z'
      fill='#42A8C3'
      fillOpacity={0.92}
    />
  </svg>
);

const Memo = memo(FlightIcon);
export { Memo as FlightIcon };