import { SVGProps } from "react";
import { DoxleThemeColor } from "../../../DoxleGeneralStore/useDoxleThemeStore";

export const ErrorFetchingCommentIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
    style={{ marginBottom: 8 }}
  >
    <path
      stroke="#9F9F9F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M54.166 8.541A41.7 41.7 0 0 0 50 8.333C26.987 8.333 8.333 26.987 8.333 50c0 7.587 2.03 14.708 5.575 20.833l-3.492 18.75 18.75-3.492A41.478 41.478 0 0 0 50 91.666c23.012 0 41.666-18.654 41.666-41.666 0-1.409-.07-2.796-.208-4.167m-20.12-15.15 8.837-8.837m0 0 8.841-8.842m-8.841 8.842-8.834-8.842m8.834 8.842 8.841 8.837"
    />
  </svg>
);
export const DiscussionEmptyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    fill="none"
    {...props}
  >
    <path
      fill="#777"
      d="M55.957 41.113c-2.256 0-4.004 1.748-4.004 3.907 0 2.158 1.748 3.906 4.004 3.906 2.06 0 3.809-1.748 3.809-3.907 0-2.158-1.748-3.906-3.809-3.906Zm-27.344 0c-2.256 0-4.004 1.748-4.004 3.907 0 2.158 1.748 3.906 4.004 3.906 2.06 0 3.809-1.748 3.809-3.907 0-2.158-1.748-3.906-3.809-3.906Z"
    />
    <path
      fill="#777"
      d="M87.304 33.692a33.586 33.586 0 0 0-18.457-12.695v.01a35.844 35.844 0 0 0-5.664-5.089c-15.986-11.62-38.428-8.076-50.097 7.91-9.405 12.989-9.004 30.46.585 42.872l.079 12.949c0 .312.049.625.146.918a3.12 3.12 0 0 0 3.916 2.04l12.363-3.896a35.826 35.826 0 0 0 10.01 2.012l-.049.04c8.702 6.337 20.108 8.241 30.567 4.784l12.412 4.043c.312.098.635.157.967.157a3.122 3.122 0 0 0 3.125-3.125V73.536c8.603-11.68 8.828-27.823.097-39.844ZM31.543 71.778l-1.172-.489-9.668 3.028-.098-10.156-.781-.88c-8.262-10.077-8.809-24.599-1.074-35.253 9.414-12.91 27.46-15.762 40.332-6.445 12.91 9.384 15.771 27.402 6.445 40.234-7.822 10.732-21.826 14.697-33.984 9.96Zm49.316-1.66-.781.976.097 10.157-9.57-3.223-1.172.488a26.97 26.97 0 0 1-16.699.684l-.02-.01a35.87 35.87 0 0 0 18.477-13.174c7.461-10.283 8.672-23.203 4.336-34.219l.059.04a26.38 26.38 0 0 1 6.054 6.054c7.09 9.727 6.69 22.969-.781 32.227Z"
    />
    <path
      fill="#777"
      d="M42.285 41.113c-2.256 0-4.004 1.748-4.004 3.907 0 2.158 1.748 3.906 4.004 3.906 2.06 0 3.809-1.748 3.809-3.907 0-2.158-1.748-3.906-3.809-3.906Z"
    />
  </svg>
);

export const RFILinkExpiredIcon = (props: { themeColor: DoxleThemeColor }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={144}
    height={144}
    fill="none"
    {...props}
    style={{ marginBottom: 14 }}
  >
    <g clipPath="url(#a)">
      <path
        fill={props.themeColor.primaryBoxShadowColor}
        fillRule="evenodd"
        d="M73.574.018a72 72 0 1 0 20.781 140.427 6.752 6.752 0 0 0 .958-12.437 6.752 6.752 0 0 0-5.152-.397 58.502 58.502 0 0 1-71.26-80.153 58.501 58.501 0 0 1 107.224 2.339 6.752 6.752 0 0 0 12.997-2.536 6.741 6.741 0 0 0-.505-2.585A71.993 71.993 0 0 0 73.574.018ZM78.75 33.75a6.75 6.75 0 0 0-13.5 0v35.46L46.943 87.507a6.75 6.75 0 1 0 9.54 9.54L76.77 76.77l1.98-1.98V33.75ZM135 135a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-2.25-56.25a6.75 6.75 0 1 0-13.5 0v31.5a6.75 6.75 0 0 0 13.5 0v-31.5Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path
          fill={props.themeColor.primaryBoxShadowColor}
          d="M0 0h144v144H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
export const RFIDocketIcon = (props: { themeColor: DoxleThemeColor }) => {
  return (
    <svg
      width={20}
      height={21}
      style={{ marginRight: 8 }}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.506.13A1 1 0 011.51.14L4.5 1.92 7.489.14a1 1 0 011.022 0L11.5 1.92 14.489.14A1 1 0 0116 1v8.375h3a1 1 0 011 1v7.375a3 3 0 01-3 3H5.759c-.805 0-1.47 0-2.01-.044-.563-.046-1.08-.145-1.565-.392a4 4 0 01-1.748-1.748c-.247-.485-.346-1.002-.392-1.564C0 16.46 0 15.796 0 14.992V1A1 1 0 01.506.13zm16.492 18.62h.003a1 1 0 00.999-1v-6.375h-2v6.375a1 1 0 00.998 1zm-2.827 0H5.8c-.857 0-1.439 0-1.889-.038-.438-.035-.663-.1-.819-.18a2 2 0 01-.874-.874c-.08-.156-.145-.38-.18-.819C2 16.389 2 15.807 2 14.95V2.759l1.989 1.184a1 1 0 001.022 0L8 2.163l2.989 1.78a1 1 0 001.022 0L14 2.759V17.75c0 .35.06.687.17 1zM4 7.25a1 1 0 011-1h4a1 1 0 110 2H5a1 1 0 01-1-1zm1 3.167a1 1 0 100 2h6a1 1 0 100-2H5zm-1 5.166a1 1 0 011-1h6a1 1 0 110 2H5a1 1 0 01-1-1z"
        fill={props.themeColor.primaryFontColor}
      />
    </svg>
  );
};