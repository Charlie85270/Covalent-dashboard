import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const sections = [
    {
      title: "ADDRESS",
      links: [
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 11.15H7"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 11.15V6.53003C2 4.49003 3.65 2.84003 5.69 2.84003H11.31C13.35 2.84003 15 4.11002 15 6.15002"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.48 12.2C16.98 12.68 16.74 13.42 16.94 14.18C17.19 15.11 18.11 15.7 19.07 15.7H20V17.15C20 19.36 18.21 21.15 16 21.15H6C3.79 21.15 2 19.36 2 17.15V10.15C2 7.94002 3.79 6.15002 6 6.15002H16C18.2 6.15002 20 7.95002 20 10.15V11.6H18.92C18.36 11.6 17.85 11.82 17.48 12.2Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M22 12.62V14.68C22 15.24 21.54 15.7 20.97 15.7H19.04C17.96 15.7 16.97 14.91 16.88 13.83C16.82 13.2 17.06 12.61 17.48 12.2C17.85 11.82 18.36 11.6 18.92 11.6H20.97C21.54 11.6 22 12.06 22 12.62Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          label: "Balance checker",
          link: "/",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 9C7 8.44772 7.44772 8 8 8H16C16.5523 8 17 8.44772 17 9C17 9.55228 16.5523 10 16 10H8C7.44772 10 7 9.55228 7 9Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 13C7 12.4477 7.44772 12 8 12H12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14H8C7.44772 14 7 13.5523 7 13Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.71963 17.4636C7.07906 17.164 7.53213 17 8 17H19C19.5523 17 20 16.5523 20 16V6C20 5.44771 19.5523 5 19 5H5C4.44772 5 4 5.44772 4 6V19.7299L6.71963 17.4636ZM8 19H19C20.6569 19 22 17.6569 22 16V6C22 4.34315 20.6569 3 19 3H5C3.34315 3 2 4.34315 2 6V19.7299C2 21.4256 3.97771 22.3519 5.28037 21.2664L8 19Z"
                fill="currentColor"
              />
            </svg>
          ),
          label: "Transactions",
          link: "/transactions",
        },
      ],
    },
    {
      title: "NFT",
      links: [
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.01001 11.22V15.71C3.01001 20.2 4.81001 22 9.30001 22H14.69C19.18 22 20.98 20.2 20.98 15.71V11.22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 12C13.83 12 15.18 10.51 15 8.68L14.34 2H9.66999L8.99999 8.68C8.81999 10.51 10.17 12 12 12Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.31 12C20.33 12 21.81 10.36 21.61 8.35L21.33 5.6C20.97 3 19.97 2 17.35 2H14.3L15 9.01C15.17 10.66 16.66 12 18.31 12Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M5.64 12C7.29 12 8.78 10.66 8.94 9.01L9.16 6.8L9.64001 2H6.59C3.97001 2 2.97 3 2.61 5.6L2.34 8.35C2.14 10.36 3.62 12 5.64 12Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 17C10.33 17 9.5 17.83 9.5 19.5V22H14.5V19.5C14.5 17.83 13.67 17 12 17Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          label: "NFT market",
          link: "/nft",
        },
      ],
    },
    {
      title: "Tools",
      links: [
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 2C3.55228 2 4 2.44772 4 3V19C4 19.5523 4.44772 20 5 20H21C21.5523 20 22 20.4477 22 21C22 21.5523 21.5523 22 21 22H5C3.34315 22 2 20.6569 2 19V3C2 2.44772 2.44772 2 3 2Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 8C7.55228 8 8 8.44772 8 9V17C8 17.5523 7.55228 18 7 18C6.44772 18 6 17.5523 6 17V9C6 8.44772 6.44772 8 7 8Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11 14C11.5523 14 12 14.4477 12 15V17C12 17.5523 11.5523 18 11 18C10.4477 18 10 17.5523 10 17V15C10 14.4477 10.4477 14 11 14Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 4C15.5523 4 16 4.44772 16 5V17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17V5C14 4.44772 14.4477 4 15 4Z"
                fill="currentColor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 10C19.5523 10 20 10.4477 20 11V17C20 17.5523 19.5523 18 19 18C18.4477 18 18 17.5523 18 17V11C18 10.4477 18.4477 10 19 10Z"
                fill="currentColor"
              />
            </svg>
          ),
          label: "Events",
          link: "/events",
        },
        {
          icon: (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.01 18.51L15.06 13.56"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.06 13.56L11.52 17.1C10.74 17.88 9.47 17.88 8.69 17.1L4.44999 12.86C3.66999 12.08 3.66999 10.81 4.44999 10.03L11.52 2.96C12.3 2.18 13.57 2.18 14.35 2.96L18.59 7.20002C19.37 7.98002 19.37 9.25001 18.59 10.03L15.06 13.56Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2 21H8"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.56 7.92001L13.63 14.99"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          ),
          label: "Approvals checker",
          link: "/approvals",
        },
      ],
    },
  ];

  const router = useRouter();

  const isMatch = (path: string) => {
    if (path === "/") {
      return router.asPath === path;
    }
    return (
      router.asPath.includes(path) &&
      (router.asPath.length === path.length || router.asPath !== "/")
    );
  };

  return (
    <nav className="h-screen px-6 pt-4 bg-white w-72 rounded-2xl dark:bg-gray-700">
      <div className="py-2 my-4 mb-8 ">
        <svg
          width="162"
          height="56"
          viewBox="0 0 162 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 37.8823C22.5422 37.8823 18.1177 33.4579 18.1177 28C18.1177 22.5421 22.5422 18.1176 28 18.1176C33.4579 18.1176 37.8824 22.5421 37.8824 28C37.8824 33.4579 33.4579 37.8823 28 37.8823Z"
            fill="#AE9AFF"
          />
          <path
            d="M8.93455 31.9937C6.1019 32.4841 4.16027 35.1703 5.24764 37.7846C6.76572 41.4344 9.18763 44.6861 12.3275 47.2272C16.8172 50.8604 22.48 52.8019 28.2977 52.7022C34.1153 52.6026 39.7058 50.4683 44.0637 46.6833C47.1111 44.0363 49.416 40.7034 50.8036 37.004C51.7973 34.354 49.7612 31.7359 46.9129 31.3429C44.0647 30.95 41.5073 32.9853 40.1004 35.4483C39.3378 36.7833 38.3477 37.9945 37.1617 39.0246C34.6614 41.1964 31.4538 42.4208 28.116 42.4781C24.7781 42.5352 21.529 41.4214 18.953 39.3366C17.731 38.3478 16.6986 37.1713 15.8889 35.8632C14.3954 33.4499 11.7672 31.5034 8.93455 31.9937Z"
            fill="#AE9AFF"
          />
          <path
            d="M52.5148 30.4583C52.641 29.4698 52.7059 28.4627 52.7059 27.4408C52.7059 14.105 41.6447 3.29413 28 3.29413C14.3553 3.29413 3.29413 14.105 3.29413 27.4408C3.29413 28.7523 3.4011 30.0393 3.607 31.2941C4.74179 29.7758 6.51291 28.6919 8.42597 28.3622C10.4958 28.0055 12.377 28.4962 13.9675 29.4133C13.8736 28.769 13.8249 28.1105 13.8249 27.4408C13.8249 19.7894 20.1714 13.5866 28 13.5866C35.8286 13.5866 42.1751 19.7894 42.1751 27.4408C42.1751 27.9453 42.1474 28.4435 42.0937 28.934C43.6507 27.9629 45.5135 27.408 47.5952 27.694C49.5183 27.9582 51.3265 28.9804 52.5148 30.4583Z"
            fill="#5429FF"
          />
          <path
            d="M82.472 30.836C80.624 30.836 79.0093 30.416 77.628 29.576C76.2467 28.736 75.1733 27.5693 74.408 26.076C73.6427 24.564 73.26 22.8093 73.26 20.812C73.26 18.796 73.652 17.0227 74.436 15.492C75.2387 13.9427 76.368 12.7387 77.824 11.88C79.2987 11.0027 81.044 10.564 83.06 10.564C85.356 10.564 87.26 11.1147 88.772 12.216C90.284 13.3173 91.264 14.8387 91.712 16.78H87.708C87.4093 15.8653 86.868 15.156 86.084 14.652C85.3 14.1293 84.292 13.868 83.06 13.868C81.1 13.868 79.588 14.4933 78.524 15.744C77.46 16.976 76.928 18.6747 76.928 20.84C76.928 23.0053 77.4507 24.6853 78.496 25.88C79.56 27.056 80.9973 27.644 82.808 27.644C84.5813 27.644 85.916 27.168 86.812 26.216C87.7267 25.2453 88.2773 23.976 88.464 22.408H83.508V19.72H92.076V30.5H88.772L88.492 27.924C87.8573 28.8573 87.064 29.576 86.112 30.08C85.16 30.584 83.9467 30.836 82.472 30.836ZM95.5603 30.5V10.9H102.756C104.324 10.9 105.612 11.1707 106.62 11.712C107.647 12.2347 108.412 12.9533 108.916 13.868C109.42 14.764 109.672 15.7627 109.672 16.864C109.672 18.0587 109.355 19.1507 108.72 20.14C108.104 21.1293 107.134 21.848 105.808 22.296L109.868 30.5H105.752L102.112 22.772H99.1443V30.5H95.5603ZM99.1443 20.14H102.532C103.727 20.14 104.604 19.8507 105.164 19.272C105.724 18.6933 106.004 17.928 106.004 16.976C106.004 16.0427 105.724 15.296 105.164 14.736C104.623 14.176 103.736 13.896 102.504 13.896H99.1443V20.14ZM114.462 30.696C113.808 30.696 113.267 30.4907 112.838 30.08C112.427 29.6693 112.222 29.1747 112.222 28.596C112.222 27.9987 112.427 27.4947 112.838 27.084C113.267 26.6733 113.808 26.468 114.462 26.468C115.115 26.468 115.647 26.6733 116.058 27.084C116.487 27.4947 116.702 27.9987 116.702 28.596C116.702 29.1747 116.487 29.6693 116.058 30.08C115.647 30.4907 115.115 30.696 114.462 30.696ZM120.985 30.5V14.988L117.765 15.744V13L122.497 10.9H124.709V30.5H120.985ZM137.469 30.5V26.86H127.809V24.004L136.993 10.9H141.053V23.752H143.629V26.86H141.053V30.5H137.469ZM131.645 23.752H137.693V14.848L131.645 23.752Z"
            fill="#27262E"
          />
          <path
            d="M75.85 50.62C75.1433 50.62 74.5367 50.47 74.03 50.17C73.5233 49.8633 73.1333 49.44 72.86 48.9C72.5867 48.3533 72.45 47.7233 72.45 47.01C72.45 46.2967 72.5867 45.6667 72.86 45.12C73.1333 44.5733 73.5233 44.1467 74.03 43.84C74.5367 43.5333 75.1433 43.38 75.85 43.38C76.69 43.38 77.3767 43.59 77.91 44.01C78.45 44.4233 78.7867 45.0067 78.92 45.76H77.51C77.4233 45.38 77.2367 45.0833 76.95 44.87C76.67 44.65 76.2967 44.54 75.83 44.54C75.1833 44.54 74.6767 44.76 74.31 45.2C73.9433 45.64 73.76 46.2433 73.76 47.01C73.76 47.7767 73.9433 48.38 74.31 48.82C74.6767 49.2533 75.1833 49.47 75.83 49.47C76.2967 49.47 76.67 49.37 76.95 49.17C77.2367 48.9633 77.4233 48.68 77.51 48.32H78.92C78.7867 49.04 78.45 49.6033 77.91 50.01C77.3767 50.4167 76.69 50.62 75.85 50.62ZM80.023 50.5V45.54H81.163L81.283 46.47C81.463 46.15 81.7064 45.8967 82.013 45.71C82.3264 45.5167 82.693 45.42 83.113 45.42V46.77H82.753C82.473 46.77 82.223 46.8133 82.003 46.9C81.783 46.9867 81.6097 47.1367 81.483 47.35C81.363 47.5633 81.303 47.86 81.303 48.24V50.5H80.023ZM84.6079 52.7L85.7579 50.17H85.4579L83.5279 45.54H84.9179L86.3079 49.03L87.7579 45.54H89.1179L85.9679 52.7H84.6079ZM89.9547 52.7V45.54H91.0947L91.2347 46.25C91.3947 46.03 91.6047 45.8367 91.8647 45.67C92.1314 45.5033 92.4747 45.42 92.8947 45.42C93.3614 45.42 93.778 45.5333 94.1447 45.76C94.5114 45.9867 94.8014 46.2967 95.0147 46.69C95.228 47.0833 95.3347 47.53 95.3347 48.03C95.3347 48.53 95.228 48.9767 95.0147 49.37C94.8014 49.7567 94.5114 50.0633 94.1447 50.29C93.778 50.51 93.3614 50.62 92.8947 50.62C92.5214 50.62 92.1947 50.55 91.9147 50.41C91.6347 50.27 91.408 50.0733 91.2347 49.82V52.7H89.9547ZM92.6247 49.5C93.0314 49.5 93.368 49.3633 93.6347 49.09C93.9014 48.8167 94.0347 48.4633 94.0347 48.03C94.0347 47.5967 93.9014 47.24 93.6347 46.96C93.368 46.68 93.0314 46.54 92.6247 46.54C92.2114 46.54 91.8714 46.68 91.6047 46.96C91.3447 47.2333 91.2147 47.5867 91.2147 48.02C91.2147 48.4533 91.3447 48.81 91.6047 49.09C91.8714 49.3633 92.2114 49.5 92.6247 49.5ZM98.4928 50.5C97.9728 50.5 97.5561 50.3733 97.2428 50.12C96.9295 49.8667 96.7728 49.4167 96.7728 48.77V46.61H95.9228V45.54H96.7728L96.9228 44.21H98.0528V45.54H99.3928V46.61H98.0528V48.78C98.0528 49.02 98.1028 49.1867 98.2028 49.28C98.3095 49.3667 98.4895 49.41 98.7428 49.41H99.3628V50.5H98.4928ZM102.745 50.62C102.265 50.62 101.832 50.51 101.445 50.29C101.065 50.07 100.762 49.7667 100.535 49.38C100.315 48.9867 100.205 48.5333 100.205 48.02C100.205 47.5067 100.318 47.0567 100.545 46.67C100.772 46.2767 101.075 45.97 101.455 45.75C101.842 45.53 102.275 45.42 102.755 45.42C103.228 45.42 103.655 45.53 104.035 45.75C104.422 45.97 104.725 46.2767 104.945 46.67C105.172 47.0567 105.285 47.5067 105.285 48.02C105.285 48.5333 105.172 48.9867 104.945 49.38C104.725 49.7667 104.422 50.07 104.035 50.29C103.648 50.51 103.218 50.62 102.745 50.62ZM102.745 49.51C103.078 49.51 103.368 49.3867 103.615 49.14C103.862 48.8867 103.985 48.5133 103.985 48.02C103.985 47.5267 103.862 47.1567 103.615 46.91C103.368 46.6567 103.082 46.53 102.755 46.53C102.415 46.53 102.122 46.6567 101.875 46.91C101.635 47.1567 101.515 47.5267 101.515 48.02C101.515 48.5133 101.635 48.8867 101.875 49.14C102.122 49.3867 102.412 49.51 102.745 49.51ZM108.842 50.5V43.5H111.232C112.052 43.5 112.725 43.6467 113.252 43.94C113.785 44.2267 114.179 44.6333 114.432 45.16C114.692 45.68 114.822 46.2933 114.822 47C114.822 47.7067 114.692 48.3233 114.432 48.85C114.179 49.37 113.785 49.7767 113.252 50.07C112.725 50.3567 112.052 50.5 111.232 50.5H108.842ZM110.122 49.4H111.172C111.759 49.4 112.222 49.3067 112.562 49.12C112.902 48.9267 113.145 48.6533 113.292 48.3C113.439 47.94 113.512 47.5067 113.512 47C113.512 46.5 113.439 46.07 113.292 45.71C113.145 45.35 112.902 45.0733 112.562 44.88C112.222 44.6867 111.759 44.59 111.172 44.59H110.122V49.4ZM117.631 50.62C117.205 50.62 116.855 50.5533 116.581 50.42C116.308 50.28 116.105 50.0967 115.971 49.87C115.838 49.6433 115.771 49.3933 115.771 49.12C115.771 48.66 115.951 48.2867 116.311 48C116.671 47.7133 117.211 47.57 117.931 47.57H119.191V47.45C119.191 47.11 119.095 46.86 118.901 46.7C118.708 46.54 118.468 46.46 118.181 46.46C117.921 46.46 117.695 46.5233 117.501 46.65C117.308 46.77 117.188 46.95 117.141 47.19H115.891C115.925 46.83 116.045 46.5167 116.251 46.25C116.465 45.9833 116.738 45.78 117.071 45.64C117.405 45.4933 117.778 45.42 118.191 45.42C118.898 45.42 119.455 45.5967 119.861 45.95C120.268 46.3033 120.471 46.8033 120.471 47.45V50.5H119.381L119.261 49.7C119.115 49.9667 118.908 50.1867 118.641 50.36C118.381 50.5333 118.045 50.62 117.631 50.62ZM117.921 49.62C118.288 49.62 118.571 49.5 118.771 49.26C118.978 49.02 119.108 48.7233 119.161 48.37H118.071C117.731 48.37 117.488 48.4333 117.341 48.56C117.195 48.68 117.121 48.83 117.121 49.01C117.121 49.2033 117.195 49.3533 117.341 49.46C117.488 49.5667 117.681 49.62 117.921 49.62ZM123.743 50.62C123.303 50.62 122.916 50.55 122.583 50.41C122.25 50.2633 121.983 50.0633 121.783 49.81C121.583 49.5567 121.463 49.2633 121.423 48.93H122.713C122.753 49.1233 122.86 49.29 123.033 49.43C123.213 49.5633 123.443 49.63 123.723 49.63C124.003 49.63 124.206 49.5733 124.333 49.46C124.466 49.3467 124.533 49.2167 124.533 49.07C124.533 48.8567 124.44 48.7133 124.253 48.64C124.066 48.56 123.806 48.4833 123.473 48.41C123.26 48.3633 123.043 48.3067 122.823 48.24C122.603 48.1733 122.4 48.09 122.213 47.99C122.033 47.8833 121.886 47.75 121.773 47.59C121.66 47.4233 121.603 47.22 121.603 46.98C121.603 46.54 121.776 46.17 122.123 45.87C122.476 45.57 122.97 45.42 123.603 45.42C124.19 45.42 124.656 45.5567 125.003 45.83C125.356 46.1033 125.566 46.48 125.633 46.96H124.423C124.35 46.5933 124.073 46.41 123.593 46.41C123.353 46.41 123.166 46.4567 123.033 46.55C122.906 46.6433 122.843 46.76 122.843 46.9C122.843 47.0467 122.94 47.1633 123.133 47.25C123.326 47.3367 123.583 47.4167 123.903 47.49C124.25 47.57 124.566 47.66 124.853 47.76C125.146 47.8533 125.38 47.9967 125.553 48.19C125.726 48.3767 125.813 48.6467 125.813 49C125.82 49.3067 125.74 49.5833 125.573 49.83C125.406 50.0767 125.166 50.27 124.853 50.41C124.54 50.55 124.17 50.62 123.743 50.62ZM126.947 50.5V43.3H128.227V46.3C128.394 46.0267 128.617 45.8133 128.897 45.66C129.184 45.5 129.51 45.42 129.877 45.42C130.49 45.42 130.964 45.6133 131.297 46C131.637 46.3867 131.807 46.9533 131.807 47.7V50.5H130.537V47.82C130.537 47.3933 130.45 47.0667 130.277 46.84C130.11 46.6133 129.844 46.5 129.477 46.5C129.117 46.5 128.817 46.6267 128.577 46.88C128.344 47.1333 128.227 47.4867 128.227 47.94V50.5H126.947ZM135.971 50.62C135.598 50.62 135.271 50.55 134.991 50.41C134.711 50.27 134.484 50.0733 134.311 49.82L134.171 50.5H133.031V43.3H134.311V46.25C134.471 46.03 134.681 45.8367 134.941 45.67C135.208 45.5033 135.551 45.42 135.971 45.42C136.438 45.42 136.854 45.5333 137.221 45.76C137.588 45.9867 137.878 46.2967 138.091 46.69C138.304 47.0833 138.411 47.53 138.411 48.03C138.411 48.53 138.304 48.9767 138.091 49.37C137.878 49.7567 137.588 50.0633 137.221 50.29C136.854 50.51 136.438 50.62 135.971 50.62ZM135.701 49.5C136.108 49.5 136.444 49.3633 136.711 49.09C136.978 48.8167 137.111 48.4633 137.111 48.03C137.111 47.5967 136.978 47.24 136.711 46.96C136.444 46.68 136.108 46.54 135.701 46.54C135.288 46.54 134.948 46.68 134.681 46.96C134.421 47.2333 134.291 47.5867 134.291 48.02C134.291 48.4533 134.421 48.81 134.681 49.09C134.948 49.3633 135.288 49.5 135.701 49.5ZM141.934 50.62C141.454 50.62 141.021 50.51 140.634 50.29C140.254 50.07 139.951 49.7667 139.724 49.38C139.504 48.9867 139.394 48.5333 139.394 48.02C139.394 47.5067 139.508 47.0567 139.734 46.67C139.961 46.2767 140.264 45.97 140.644 45.75C141.031 45.53 141.464 45.42 141.944 45.42C142.418 45.42 142.844 45.53 143.224 45.75C143.611 45.97 143.914 46.2767 144.134 46.67C144.361 47.0567 144.474 47.5067 144.474 48.02C144.474 48.5333 144.361 48.9867 144.134 49.38C143.914 49.7667 143.611 50.07 143.224 50.29C142.838 50.51 142.408 50.62 141.934 50.62ZM141.934 49.51C142.268 49.51 142.558 49.3867 142.804 49.14C143.051 48.8867 143.174 48.5133 143.174 48.02C143.174 47.5267 143.051 47.1567 142.804 46.91C142.558 46.6567 142.271 46.53 141.944 46.53C141.604 46.53 141.311 46.6567 141.064 46.91C140.824 47.1567 140.704 47.5267 140.704 48.02C140.704 48.5133 140.824 48.8867 141.064 49.14C141.311 49.3867 141.601 49.51 141.934 49.51ZM147.329 50.62C146.902 50.62 146.552 50.5533 146.279 50.42C146.005 50.28 145.802 50.0967 145.669 49.87C145.535 49.6433 145.469 49.3933 145.469 49.12C145.469 48.66 145.649 48.2867 146.009 48C146.369 47.7133 146.909 47.57 147.629 47.57H148.889V47.45C148.889 47.11 148.792 46.86 148.599 46.7C148.405 46.54 148.165 46.46 147.879 46.46C147.619 46.46 147.392 46.5233 147.199 46.65C147.005 46.77 146.885 46.95 146.839 47.19H145.589C145.622 46.83 145.742 46.5167 145.949 46.25C146.162 45.9833 146.435 45.78 146.769 45.64C147.102 45.4933 147.475 45.42 147.889 45.42C148.595 45.42 149.152 45.5967 149.559 45.95C149.965 46.3033 150.169 46.8033 150.169 47.45V50.5H149.079L148.959 49.7C148.812 49.9667 148.605 50.1867 148.339 50.36C148.079 50.5333 147.742 50.62 147.329 50.62ZM147.619 49.62C147.985 49.62 148.269 49.5 148.469 49.26C148.675 49.02 148.805 48.7233 148.859 48.37H147.769C147.429 48.37 147.185 48.4333 147.039 48.56C146.892 48.68 146.819 48.83 146.819 49.01C146.819 49.2033 146.892 49.3533 147.039 49.46C147.185 49.5667 147.379 49.62 147.619 49.62ZM151.39 50.5V45.54H152.53L152.65 46.47C152.83 46.15 153.074 45.8967 153.38 45.71C153.694 45.5167 154.06 45.42 154.48 45.42V46.77H154.12C153.84 46.77 153.59 46.8133 153.37 46.9C153.15 46.9867 152.977 47.1367 152.85 47.35C152.73 47.5633 152.67 47.86 152.67 48.24V50.5H151.39ZM157.547 50.62C157.081 50.62 156.664 50.5067 156.297 50.28C155.931 50.0533 155.641 49.7433 155.427 49.35C155.214 48.9567 155.107 48.51 155.107 48.01C155.107 47.51 155.214 47.0667 155.427 46.68C155.641 46.2867 155.931 45.98 156.297 45.76C156.664 45.5333 157.081 45.42 157.547 45.42C157.921 45.42 158.247 45.49 158.527 45.63C158.807 45.77 159.034 45.9667 159.207 46.22V43.3H160.487V50.5H159.347L159.207 49.79C159.047 50.01 158.834 50.2033 158.567 50.37C158.307 50.5367 157.967 50.62 157.547 50.62ZM157.817 49.5C158.231 49.5 158.567 49.3633 158.827 49.09C159.094 48.81 159.227 48.4533 159.227 48.02C159.227 47.5867 159.094 47.2333 158.827 46.96C158.567 46.68 158.231 46.54 157.817 46.54C157.411 46.54 157.074 46.6767 156.807 46.95C156.541 47.2233 156.407 47.5767 156.407 48.01C156.407 48.4433 156.541 48.8 156.807 49.08C157.074 49.36 157.411 49.5 157.817 49.5Z"
            fill="#7A797D"
          />
        </svg>
      </div>

      {sections.map(section => {
        return (
          <div>
            <p className="w-full pb-2 mb-4 ml-2 font-normal text-gray-400 border-b-2 border-gray-100 text-md">
              {section.title}
            </p>

            {section.links.map(link => {
              return (
                <Link
                  className="relative flex items-center justify-start font-thin text-gray-500"
                  href={link.link}
                >
                  <a
                    className={`${
                      isMatch(link.link)
                        ? "bg-indigo-100 text-indigo-700 "
                        : "hover:text-gray-800 dark:text-gray-400 hover:bg-gray-100"
                    } flex items-center p-3 my-4 rounded-xl transition-colors duration-200 cursor-pointer  dark:hover:text-white dark:hover:bg-gray-600`}
                  >
                    <span className="text-left">{link.icon}</span>
                    <span className="mx-4 text-lg font-normal">
                      {link.label}
                    </span>
                    {isMatch(link.link) && (
                      <img
                        src="/images/selected.svg"
                        className="absolute right-0"
                      />
                    )}
                  </a>
                </Link>
              );
            })}
          </div>
        );
      })}
    </nav>
  );
};
