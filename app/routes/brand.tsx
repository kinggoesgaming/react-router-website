import type { V2_MetaFunction } from "@remix-run/node";
import classNames from "classnames";
import type { FC } from "react";

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: "React Router Assets and Branding Guidelines",
    },
  ];
};

export default function Brand() {
  return (
    <div className="md-prose container my-8 max-w-4xl">
      <h1>React Router Brand</h1>
      <p>
        These assets are provided for use in situations like articles and video
        tutorials.
      </p>
      <h2>Trademark Usage Agreement</h2>
      <p>
        The React Router name and logos are trademarks of Remix Software Inc.
      </p>
      <p>
        You may not use the React Router name or logos in any way that could
        mistakenly imply any official connection with or endorsement of Remix
        Software Inc. Any use of the React Router name or logos in a manner that
        could cause customer confusion is not permitted.
      </p>
      <p>
        Additionally, you may not use our trademarks for t-shirts, stickers, or
        other merchandise without explicit written consent.
      </p>
      <h2>Logo</h2>
      <p>
        Please use the logo with appropriate background. On dark backgrounds use
        the logo with white dots, and on light backgrounds use the logo with
        black dots.
      </p>
      <LogoBox name="react-router" Logo={LogoReactRouter} />
      <h2>Logo Stacked</h2>
      <p>For tighter horizontal spaces, the stacked logo is at your service.</p>
      <LogoBox name="react-router-stacked" Logo={LogoReactRouterStacked} />
      <h2>Logo Mark</h2>
      <LogoBox name="react-router-mark" Logo={LogoReactRouterMark} />
    </div>
  );
}

interface LogoProps {
  fg: string;
  highlight: string;
}

function LogoBox({
  name,
  Logo,
}: {
  name: "react-router" | "react-router-stacked" | "react-router-mark";
  Logo: FC<LogoProps>;
}) {
  // Tailwind classnames for the various ways we style the individual
  // component pieces of each LogoBox variant
  let variants = {
    color: {
      bg: "bg-white",
      border: "border-gray-50 dark:border-transparent",
      fg: "fill-gray-900",
      highlight: "fill-red-brand",
    },
    "color-inverted": {
      bg: "bg-gray-900",
      border: "border-transparent dark:border-gray-800",
      fg: "fill-white",
      highlight: "fill-red-brand",
    },
    monotone: {
      bg: "bg-white",
      border: "border-gray-50 dark:border-transparent",
      fg: "fill-gray-900",
      highlight: "fill-gray-900",
    },
    "monotone-inverted": {
      bg: "bg-gray-900",
      border: "border-transparent dark:border-gray-800",
      fg: "fill-white",
      highlight: "fill-white",
    },
  };
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 gap-x-6">
      {Object.entries(variants).map(
        ([variant, { bg, border, fg, highlight }]) => (
          <div className="flex flex-col" key={variant}>
            <div
              className={classNames(
                /* border here is the same as the custom index page */
                `flex h-40 items-center justify-center rounded-lg border-[3px] p-4 md:h-48`,
                bg,
                border
              )}
            >
              <Logo fg={fg} highlight={highlight} />
            </div>
            <div className="mt-1 flex items-end gap-4 text-sm">
              {["svg", "png"].map((format) => (
                <a
                  className="uppercase underline opacity-50 hover:opacity-100"
                  href={`/_brand/${name}-${variant}.${format}`}
                  download={true}
                  key={format}
                >
                  {format}
                </a>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
}

function LogoReactRouterMark({ fg, highlight }: LogoProps) {
  return (
    <svg
      width="94"
      height="61"
      viewBox="0 0 94 61"
      className={fg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72.7315 20.9357C70.0548 20.0941 68.6725 20.3778 65.8649 20.071C61.5246 19.5976 59.7954 17.9013 59.0619 13.5356C58.6514 11.0985 59.1361 7.53022 58.0881 5.32106C56.0839 1.10875 51.3943 -0.780439 46.6828 0.297843C42.7049 1.20956 39.3951 5.18518 39.2117 9.266C39.0021 13.9254 41.657 17.901 46.2156 19.273C48.3814 19.9261 50.6825 20.2548 52.9444 20.4214C57.0925 20.7238 57.4113 23.0297 58.5335 24.9277C59.2409 26.1243 59.9264 27.3034 59.9264 30.8714C59.9264 34.4394 59.2365 35.6185 58.5335 36.8151C57.4113 38.7087 56.0271 39.9491 51.879 40.2559C49.6171 40.4225 47.3116 40.7513 45.1502 41.4044C40.5916 42.7807 37.9367 46.7519 38.1463 51.4113C38.3297 55.4921 41.6395 59.4678 45.6174 60.3795C50.3289 61.4621 55.0185 59.5686 57.0227 55.3563C58.075 53.1471 58.6514 50.6443 59.0619 48.2072C59.7998 43.8414 61.5289 42.1451 65.8649 41.6717C68.6725 41.3649 71.5783 41.6717 74.2093 40.177C76.9895 38.1456 79.4734 35.0968 79.4734 30.8714C79.4734 26.6459 76.7967 22.2156 72.7315 20.9357Z"
        className={highlight}
      />
      <path d="M28.1997 40.7739C22.7285 40.7739 18.2656 36.3027 18.2656 30.8213C18.2656 25.3399 22.7285 20.8687 28.1997 20.8687C33.6709 20.8687 38.1338 25.3399 38.1338 30.8213C38.1338 36.2983 33.6665 40.7739 28.1997 40.7739Z" />
      <path d="M9.899 61C4.43661 60.9868 -0.0130938 56.498 2.89511e-05 51.0122C0.0132099 45.5353 4.4936 41.0773 9.96914 41.0948C15.4359 41.108 19.8856 45.5968 19.8681 51.0825C19.8549 56.5551 15.3745 61.0131 9.899 61Z" />
      <path d="M83.7137 60.9998C78.2339 61.0304 73.7361 56.5901 73.7052 51.122C73.6747 45.632 78.1068 41.1258 83.5646 41.0949C89.0444 41.0643 93.5423 45.5046 93.5731 50.9727C93.6036 56.4583 89.1716 60.9689 83.7137 60.9998Z" />
    </svg>
  );
}

function LogoReactRouterStacked({ fg, highlight }: LogoProps) {
  return (
    <svg
      width="145"
      height="76"
      viewBox="0 0 145 76"
      className={fg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.217 16.5198C89.1407 15.8557 88.0685 16.0796 85.8907 15.8375C82.524 15.4639 81.1827 14.1254 80.6137 10.6805C80.2953 8.75749 80.6712 5.94188 79.8583 4.19869C78.3037 0.87488 74.666 -0.615822 71.0114 0.235019C67.9259 0.95443 65.3585 4.09148 65.2162 7.31153C65.0537 10.9881 67.113 14.1252 70.649 15.2078C72.329 15.7231 74.1139 15.9825 75.8684 16.1139C79.0861 16.3526 79.3334 18.1721 80.2038 19.6697C80.7525 20.6139 81.2843 21.5443 81.2843 24.3597C81.2843 27.1751 80.7492 28.1055 80.2038 29.0497C79.3334 30.5439 78.2597 31.5227 75.042 31.7648C73.2875 31.8962 71.4992 32.1556 69.8226 32.671C66.2866 33.757 64.2272 36.8906 64.3898 40.5672C64.5321 43.7872 67.0994 46.9243 70.185 47.6437C73.8396 48.498 77.4773 47.0038 79.0319 43.68C79.8482 41.9368 80.2953 39.9619 80.6137 38.0389C81.1861 34.594 82.5273 33.2555 85.8907 32.882C88.0685 32.6399 90.3224 32.882 92.3633 31.7025C94.5199 30.0996 96.4466 27.6939 96.4466 24.3597C96.4466 21.0255 94.3703 17.5297 91.217 16.5198Z"
        className={highlight}
      />
      <path d="M56.6745 32.1735C52.4305 32.1735 48.9688 28.6454 48.9688 24.3201C48.9688 19.9949 52.4305 16.4668 56.6745 16.4668C60.9184 16.4668 64.3802 19.9949 64.3802 24.3201C64.3802 28.6419 60.915 32.1735 56.6745 32.1735Z" />
      <path d="M42.4793 48.1334C38.2422 48.123 34.7906 44.581 34.8008 40.2524C34.811 35.9307 38.2864 32.413 42.5337 32.4268C46.7742 32.4372 50.2257 35.9792 50.2122 40.3078C50.2019 44.6261 46.7266 48.1438 42.4793 48.1334Z" />
      <path d="M99.7362 48.1333C95.4856 48.1574 91.9967 44.6537 91.9728 40.339C91.9491 36.007 95.387 32.4513 99.6206 32.4269C103.871 32.4027 107.36 35.9065 107.384 40.2212C107.408 44.5497 103.97 48.1089 99.7362 48.1333Z" />
      <path d="M14.6796 75.7001C14.1397 75.1253 14.0625 74.4256 13.8312 72.0764C13.6512 70.252 12.6743 69.3273 11.0032 69.0024C12.9828 68.7525 14.4482 67.253 14.4482 64.9538C14.4482 61.8799 12.3658 59.9556 8.1753 59.9556H0V75.7001H4.29332V70.4769H7.19838C8.66376 70.4769 9.46073 70.8768 9.58927 72.6762C9.71781 74.3006 9.92348 75.2753 10.2577 75.7001H14.6796ZM4.29332 67.2031V63.3544H7.40405C9.25506 63.3544 10.1806 64.0292 10.1806 65.3037C10.1806 66.7532 9.25506 67.2031 7.40405 67.2031H4.29332Z" />
      <path d="M24.2132 71.7265C23.8276 72.6012 23.1077 72.9761 21.9765 72.9761C20.7168 72.9761 19.6885 72.3263 19.5857 70.9518H27.6324V69.8271C27.6324 66.8032 25.6014 64.2541 21.7709 64.2541C18.1974 64.2541 15.5237 66.7782 15.5237 70.302C15.5237 73.8508 18.146 76 21.8223 76C24.8559 76 26.964 74.5755 27.5553 72.0264L24.2132 71.7265ZM19.6371 69.0024C19.7913 67.9528 20.3826 67.1531 21.7195 67.1531C22.9535 67.1531 23.6219 68.0028 23.6733 69.0024H19.6371Z" />
      <path d="M35.9541 71.0517C35.9541 72.5012 35.0029 73.3509 33.8203 73.3509C33.1262 73.3509 32.6634 72.9761 32.6634 72.4013C32.6634 71.6765 33.2547 71.3766 34.2574 71.1767L35.9541 70.8768V71.0517ZM40.0418 68.6276C40.0418 65.5286 37.8051 64.2541 34.7715 64.2541C31.3266 64.2541 29.4499 65.9535 29.09 68.4026L32.9462 68.6526C33.1262 67.8278 33.589 67.253 34.5145 67.253C35.5171 67.253 35.9541 67.8029 35.9541 68.7275V68.9025L32.7406 69.4273C30.2468 69.8521 28.6529 70.7768 28.6529 72.9261C28.6529 74.8254 30.1183 75.95 32.3549 75.95C34.1803 75.95 35.4914 75.2753 36.1598 73.9757C36.5454 75.2503 37.6509 75.95 39.0649 75.95C40.2475 75.95 41.0701 75.6251 41.6614 75.2253V73.076C41.3272 73.201 41.0701 73.251 40.7359 73.251C40.2989 73.251 40.0418 73.0011 40.0418 72.4262V68.6276Z" />
      <path d="M42.136 70.127C42.136 73.6758 44.784 76 48.4089 76C51.8538 76 53.782 73.8508 54.0648 71.1517L50.6455 70.9018C50.3627 72.2763 49.6686 72.9511 48.4603 72.9511C47.2006 72.9511 46.3265 72.1264 46.3265 70.127C46.3265 68.1277 47.2006 67.303 48.4603 67.303C49.6686 67.303 50.3627 67.9528 50.6455 69.3273L54.0648 69.1024C53.782 66.4283 51.8538 64.2541 48.4089 64.2541C44.784 64.2541 42.136 66.6033 42.136 70.127Z" />
      <path d="M56.0688 72.6012C56.0688 75.2253 57.8941 76 59.8223 76C61.3905 76 62.3931 75.6251 63.2672 75.0004V72.3763C62.5731 72.6512 62.0075 72.7511 61.4933 72.7511C60.6449 72.7511 60.1822 72.3763 60.1822 71.4266V67.353H63.1644V64.554H60.1822V61.48H57.5599L57.1743 62.9295C56.8915 63.9542 56.5316 64.554 55.3747 64.7289L54.5263 64.8539V67.353H56.0688V72.6012Z" />
      <path d="M84.2733 75.7001C83.7334 75.1253 83.6563 74.4256 83.4249 72.0764C83.2449 70.252 82.268 69.3273 80.5969 69.0024C82.5765 68.7525 84.0419 67.253 84.0419 64.9538C84.0419 61.8799 81.9595 59.9556 77.769 59.9556H69.5937V75.7001H73.887V70.4769H76.7921C78.2575 70.4769 79.0544 70.8768 79.183 72.6762C79.3115 74.3006 79.5172 75.2753 79.8514 75.7001H84.2733ZM73.887 67.2031V63.3544H76.9978C78.8488 63.3544 79.7743 64.0292 79.7743 65.3037C79.7743 66.7532 78.8488 67.2031 76.9978 67.2031H73.887Z" />
      <path d="M89.3079 70.127C89.3079 68.4526 89.9249 67.303 91.3903 67.303C92.83 67.303 93.4727 68.4526 93.4727 70.127C93.4727 71.8015 92.83 72.9511 91.3903 72.9511C89.9249 72.9511 89.3079 71.8015 89.3079 70.127ZM97.6632 70.127C97.6632 66.6782 95.118 64.2541 91.3903 64.2541C87.6369 64.2541 85.1174 66.6782 85.1174 70.127C85.1174 73.6008 87.6369 76 91.3903 76C95.118 76 97.6632 73.6008 97.6632 70.127Z" />
      <path d="M106.875 70.0271C106.875 71.7265 106.361 72.8261 105.05 72.8261C103.79 72.8261 103.353 72.0014 103.353 70.5019V64.554H99.1882V71.5765C99.1882 73.9007 100.139 76 103.276 76C104.998 76 106.258 75.2753 106.875 74.0257V75.7001H111.04V64.554H106.875V70.0271Z" />
      <path d="M113.712 72.6012C113.712 75.2253 115.537 76 117.466 76C119.034 76 120.036 75.6251 120.91 75.0004V72.3763C120.216 72.6512 119.651 72.7511 119.137 72.7511C118.288 72.7511 117.825 72.3763 117.825 71.4266V67.353H120.808V64.554H117.825V61.48H115.203L114.818 62.9295C114.535 63.9542 114.175 64.554 113.018 64.7289L112.17 64.8539V67.353H113.712V72.6012Z" />
      <path d="M130.587 71.7265C130.201 72.6012 129.482 72.9761 128.35 72.9761C127.091 72.9761 126.062 72.3263 125.96 70.9518H134.006V69.8271C134.006 66.8032 131.975 64.2541 128.145 64.2541C124.571 64.2541 121.898 66.7782 121.898 70.302C121.898 73.8508 124.52 76 128.196 76C131.23 76 133.338 74.5755 133.929 72.0264L130.587 71.7265ZM126.011 69.0024C126.165 67.9528 126.757 67.1531 128.093 67.1531C129.327 67.1531 129.996 68.0028 130.047 69.0024H126.011Z" />
      <path d="M144.59 64.6789C144.308 64.454 143.691 64.2541 142.996 64.2541C141.48 64.2541 140.271 65.2787 139.86 66.5283V64.554H135.695V75.7001H139.86V70.6019C139.86 68.7275 140.811 68.0278 142.354 68.0278C143.151 68.0278 143.768 68.1777 144.333 68.5026L144.59 64.6789Z" />
    </svg>
  );
}

function LogoReactRouter({ fg, highlight }: LogoProps) {
  return (
    <svg
      width="230"
      height="24"
      viewBox="0 0 230 24"
      fill="none"
      className={fg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.7179 8.237C26.6978 7.90588 26.171 8.01751 25.101 7.89679C23.447 7.71054 22.788 7.04314 22.5084 5.32547C22.352 4.36662 22.5367 2.96271 22.1373 2.09353C21.3735 0.436228 19.5863 -0.307058 17.7908 0.117184C16.2749 0.475893 15.0135 2.04007 14.9436 3.64564C14.8638 5.47885 15.8755 7.04302 17.6128 7.58281C18.4381 7.83977 19.3151 7.96911 20.1771 8.03465C21.7579 8.15364 21.8794 9.06088 22.3071 9.80761C22.5767 10.2784 22.8379 10.7423 22.8379 12.1461C22.8379 13.5499 22.575 14.0138 22.3071 14.4846C21.8794 15.2296 21.3519 15.7177 19.7711 15.8384C18.9091 15.9039 18.0305 16.0333 17.2067 16.2902C15.4695 16.8318 14.4577 18.3942 14.5376 20.2274C14.6075 21.833 15.8688 23.3972 17.3848 23.7559C19.1803 24.1818 20.9675 23.4368 21.7313 21.7795C22.1324 20.9103 22.352 19.9256 22.5084 18.9668C22.7897 17.2491 23.4486 16.5817 25.101 16.3954C26.171 16.2747 27.2784 16.3954 28.281 15.8074C29.3406 15.0081 30.2872 13.8086 30.2872 12.1461C30.2872 10.4836 29.2671 8.74057 27.7179 8.237Z"
        className={highlight}
      />
      <path d="M10.7468 16.042C8.66173 16.042 6.96094 14.2829 6.96094 12.1262C6.96094 9.96962 8.66173 8.21045 10.7468 8.21045C12.8318 8.21045 14.5326 9.96962 14.5326 12.1262C14.5326 14.2811 12.8302 16.042 10.7468 16.042Z" />
      <path d="M3.77247 24C1.69077 23.9948 -0.00498999 22.2288 1.10332e-05 20.0704C0.00503422 17.9156 1.71249 16.1616 3.7992 16.1685C5.88256 16.1737 7.57832 17.9397 7.57166 20.0981C7.56663 22.2512 5.85917 24.0052 3.77247 24Z" />
      <path d="M31.9021 24C29.8138 24.012 28.0997 22.265 28.088 20.1136C28.0763 17.9536 29.7654 16.1807 31.8453 16.1685C33.9337 16.1565 35.6478 17.9035 35.6595 20.0549C35.6711 22.2132 33.9821 23.9878 31.9021 24Z" />
      <path d="M66.1442 22.7566C65.4633 21.9873 65.366 21.0508 65.0741 17.9067C64.8472 15.4649 63.615 14.2274 61.5073 13.7925C64.0041 13.4581 65.8524 11.4512 65.8524 8.37395C65.8524 4.25983 63.2259 1.68433 57.9404 1.68433H47.6289V22.7566H53.0441V15.766H56.7082C58.5565 15.766 59.5617 16.3012 59.7238 18.7094C59.886 20.8835 60.1454 22.188 60.5669 22.7566H66.1442ZM53.0441 11.3843V6.23327H56.9676C59.3023 6.23327 60.4696 7.13637 60.4696 8.84222C60.4696 10.7822 59.3023 11.3843 56.9676 11.3843H53.0441Z" />
      <path d="M78.169 17.4384C77.6826 18.6091 76.7746 19.1108 75.3479 19.1108C73.759 19.1108 72.462 18.2411 72.3323 16.4015H82.4816V14.8963C82.4816 10.8491 79.92 7.4374 75.0885 7.4374C70.5813 7.4374 67.2089 10.8157 67.2089 15.5318C67.2089 20.2815 70.5164 23.158 75.1533 23.158C78.9796 23.158 81.6386 21.2515 82.3844 17.8398L78.169 17.4384ZM72.3971 13.7925C72.5917 12.3877 73.3375 11.3174 75.0236 11.3174C76.5801 11.3174 77.4232 12.4546 77.488 13.7925H72.3971Z" />
      <path d="M92.9778 16.5353C92.9778 18.4753 91.778 19.6125 90.2864 19.6125C89.4109 19.6125 88.8273 19.1108 88.8273 18.3415C88.8273 17.3715 89.5731 16.9701 90.8377 16.7025L92.9778 16.3011V16.5353ZM98.1336 13.2908C98.1336 9.14326 95.3125 7.4374 91.4862 7.4374C87.1411 7.4374 84.774 9.71187 84.32 12.9898L89.184 13.3243C89.4109 12.2205 89.9946 11.4512 91.1619 11.4512C92.4266 11.4512 92.9778 12.187 92.9778 13.4246V13.6587L88.9245 14.3612C85.7792 14.9298 83.7688 16.1674 83.7688 19.0439C83.7688 21.586 85.6171 23.0911 88.4382 23.0911C90.7404 23.0911 92.3941 22.188 93.2372 20.4487C93.7236 22.1546 95.1179 23.0911 96.9014 23.0911C98.393 23.0911 99.4306 22.6563 100.176 22.1211V19.2446C99.7549 19.4118 99.4306 19.4787 99.0091 19.4787C98.4578 19.4787 98.1336 19.1442 98.1336 18.3749V13.2908Z" />
      <path d="M100.775 15.2977C100.775 20.0473 104.115 23.158 108.687 23.158C113.032 23.158 115.464 20.2815 115.821 16.6691L111.508 16.3346C111.151 18.1742 110.276 19.0773 108.752 19.0773C107.163 19.0773 106.06 17.9736 106.06 15.2977C106.06 12.6219 107.163 11.5181 108.752 11.5181C110.276 11.5181 111.151 12.3877 111.508 14.2274L115.821 13.9263C115.464 10.3474 113.032 7.4374 108.687 7.4374C104.115 7.4374 100.775 10.5815 100.775 15.2977Z" />
      <path d="M118.348 18.6091C118.348 22.1211 120.651 23.158 123.083 23.158C125.061 23.158 126.325 22.6563 127.428 21.8201V18.308C126.552 18.676 125.839 18.8098 125.19 18.8098C124.12 18.8098 123.537 18.308 123.537 17.037V11.585H127.298V7.83878H123.537V3.72466H120.229L119.743 5.66465C119.386 7.03602 118.932 7.83878 117.473 8.07292L116.403 8.24016V11.585H118.348V18.6091Z" />
      <path d="M153.923 22.7566C153.242 21.9873 153.144 21.0508 152.853 17.9067C152.626 15.4649 151.393 14.2274 149.286 13.7925C151.783 13.4581 153.631 11.4512 153.631 8.37395C153.631 4.25983 151.004 1.68433 145.719 1.68433H135.407V22.7566H140.823V15.766H144.487C146.335 15.766 147.34 16.3012 147.502 18.7094C147.664 20.8835 147.924 22.188 148.345 22.7566H153.923ZM140.823 11.3843V6.23327H144.746C147.081 6.23327 148.248 7.13637 148.248 8.84222C148.248 10.7822 147.081 11.3843 144.746 11.3843H140.823Z" />
      <path d="M160.273 15.2977C160.273 13.0567 161.051 11.5181 162.899 11.5181C164.715 11.5181 165.526 13.0567 165.526 15.2977C165.526 17.5387 164.715 19.0773 162.899 19.0773C161.051 19.0773 160.273 17.5387 160.273 15.2977ZM170.811 15.2977C170.811 10.6819 167.601 7.4374 162.899 7.4374C158.165 7.4374 154.987 10.6819 154.987 15.2977C154.987 19.947 158.165 23.158 162.899 23.158C167.601 23.158 170.811 19.947 170.811 15.2977Z" />
      <path d="M182.43 15.1639C182.43 17.4384 181.782 18.9101 180.128 18.9101C178.539 18.9101 177.988 17.8063 177.988 15.7994V7.83878H172.735V17.2377C172.735 20.3484 173.935 23.158 177.891 23.158C180.063 23.158 181.652 22.188 182.43 20.5156V22.7566H187.683V7.83878H182.43V15.1639Z" />
      <path d="M191.054 18.6091C191.054 22.1211 193.356 23.158 195.788 23.158C197.766 23.158 199.031 22.6563 200.133 21.8201V18.308C199.258 18.676 198.544 18.8098 197.896 18.8098C196.826 18.8098 196.242 18.308 196.242 17.037V11.585H200.003V7.83878H196.242V3.72466H192.935L192.448 5.66465C192.091 7.03602 191.637 7.83878 190.178 8.07292L189.108 8.24016V11.585H191.054V18.6091Z" />
      <path d="M212.338 17.4384C211.852 18.6091 210.944 19.1108 209.517 19.1108C207.928 19.1108 206.631 18.2411 206.502 16.4015H216.651V14.8963C216.651 10.8491 214.089 7.4374 209.258 7.4374C204.751 7.4374 201.378 10.8157 201.378 15.5318C201.378 20.2815 204.686 23.158 209.323 23.158C213.149 23.158 215.808 21.2515 216.554 17.8398L212.338 17.4384ZM206.566 13.7925C206.761 12.3877 207.507 11.3174 209.193 11.3174C210.749 11.3174 211.592 12.4546 211.657 13.7925H206.566Z" />
      <path d="M230.001 8.00602C229.644 7.70499 228.866 7.4374 227.99 7.4374C226.077 7.4374 224.553 8.80877 224.034 10.4812V7.83878H218.781V22.7566H224.034V15.9332C224.034 13.4246 225.234 12.4881 227.18 12.4881C228.185 12.4881 228.963 12.6888 229.676 13.1236L230.001 8.00602Z" />
    </svg>
  );
}
