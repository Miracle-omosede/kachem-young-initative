import React from "react";

const GiveScholarship = () => {
  return (
    <div className="mt-[100px] mx-auto max-w-[1140px] w-full">
      <h1 className="flex items-center text-center justify-center mb-[54px] font-poppins text-[40px] font-bold">
        Give a Scholarship
      </h1>

      <div className="">
        <div className="scholarship-bg-image h-[618px]  w-full relative grid grid-cols-12 font-poppins md:px-0 px-10 ">
          <div className=" hidden md:flex md:col-span-6"></div>
          <div className="md:col-span-6 col-span-12 flex flex-col items-start gap-6 pl-0 md:pl-14 justify-center">
            <h1 className="md:text-[35px] text-[30px] text-[#0539B6]">
              Launch a{" "}
              <span className="font-semibold not-italic md:italic">
              star
              </span>
            </h1>
            <p className="md:text-[18px] text-[18px] font-[600] w-full md:w-[387px] text-[#232222]">
              Your contribution can change a life, opening doors to new
              opportunities. Give a scholarship and empower the next generation
              of leaders!
            </p>
            <div className="flex">
              <a
                href=""
                className="flex flex-row items-center w-full  justify-center text-[16px] py-4 px-6 max-md:mt-4 rounded-[8px] text-[#fff] bg-primary capitalize font-manrope gap-2"
              >
                <span className="items-center justify-center flex-shrink flex tracking-wider">
                  Sponsor a student
                </span>
                <span className="flex items-center justify-center -mt-[10px]">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19.2846 3.55427C19.4509 3.58748 19.5897 3.61372 19.7267 3.63061C19.8531 3.57509 19.9786 3.51008 20.1283 3.43053L20.1744 3.40599C20.3283 3.32398 20.524 3.21972 20.7273 3.13225C21.23 2.91602 21.8327 2.77644 22.5882 2.94187C24.3071 3.3183 25.2404 4.88466 25.1957 6.4251C25.1603 7.64477 24.4972 8.74863 23.8677 9.55163C23.2147 10.3846 22.4589 11.067 21.9845 11.4629C21.3759 11.9707 20.5419 12.093 19.8131 11.7813C19.245 11.5384 18.3251 11.1017 17.4604 10.4914C16.6268 9.90294 15.6747 9.03596 15.2905 7.87783C14.8053 6.41512 15.2496 4.64671 16.7881 3.79253C17.4642 3.41716 18.0816 3.37777 18.6252 3.44056C18.8451 3.46596 19.0624 3.50964 19.2334 3.544L19.2846 3.55427ZM17.8802 5.75968C18.0483 5.66637 18.1667 5.65256 18.367 5.6757C18.4895 5.68985 18.6166 5.71525 18.8104 5.754L18.8439 5.7607C19.0408 5.80001 19.2914 5.84903 19.5699 5.87695C19.8938 5.90943 20.2211 5.86143 20.522 5.73731C20.7808 5.63059 21.0067 5.51168 21.184 5.41749L21.2142 5.40145C21.3888 5.30868 21.5032 5.24786 21.6165 5.19911C21.8017 5.11943 21.9191 5.09867 22.1068 5.13978C22.5914 5.24589 22.9656 5.70786 22.9466 6.35977C22.9325 6.84685 22.6365 7.47531 22.097 8.16344C21.6094 8.78536 21.0261 9.32635 20.6134 9.67607C20.1176 9.4596 19.4036 9.10888 18.7579 8.65316C18.0436 8.14892 17.5795 7.63194 17.4261 7.16943C17.2208 6.55042 17.4466 6.00045 17.8802 5.75968Z"
                      fill="white"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.75 12.1252C1.75 10.8825 2.75736 9.87519 4 9.87519H6.25C7.49264 9.87519 8.5 10.8826 8.5 12.1252V12.4886C9.43778 12.0794 10.5118 11.754 11.7086 11.575C12.9104 11.3953 14.0593 11.7236 14.9625 11.9817C15.1018 12.0215 15.2352 12.0597 15.3621 12.094C16.3874 12.3715 17.2597 12.5194 18.2692 12.1828C19.1826 11.8784 20.097 11.8044 20.8533 12.2209C21.6539 12.6618 21.9343 13.4542 21.9885 14.0982C22.0121 14.3772 21.981 14.7552 21.7622 15.1191C21.5878 15.409 21.3477 15.6504 21.098 15.8503C21.949 15.5777 22.8447 15.3038 23.6315 15.1967C24.382 15.0945 25.4259 15.085 26.1705 15.8296C27.0279 16.6871 26.7743 17.8012 26.425 18.5182C26.0604 19.2668 25.4123 20.0283 24.6775 20.7257C23.1915 22.136 21.0543 23.5607 19.067 24.4097C16.6307 25.4504 13.7918 24.8125 11.6745 24.2073C11.1923 24.0695 10.7592 23.9369 10.3609 23.8149C9.80596 23.645 9.3185 23.4958 8.8603 23.382C8.72723 23.349 8.60746 23.3219 8.5 23.3005V23.3752C8.5 24.6178 7.49264 25.6252 6.25 25.6252H4C2.75736 25.6252 1.75 24.6178 1.75 23.3752V12.1252ZM8.5 15.0018C9.43318 14.4684 10.6231 14.0123 12.0414 13.8002C12.7266 13.6978 13.3585 13.8735 14.2941 14.1336C14.4457 14.1757 14.6052 14.2201 14.7743 14.2659C15.9111 14.5736 17.3221 14.8703 18.9808 14.3174C19.2545 14.2261 19.4445 14.1932 19.5698 14.1842L19.5387 14.2055C19.3202 14.3529 19.0188 14.515 18.6386 14.6841C17.8794 15.022 16.9045 15.3449 15.8784 15.6216C15.1034 15.8306 14.4417 16.4355 14.3163 17.2492C14.2508 17.6738 14.3433 18.1556 14.6775 18.5466C15.0053 18.9301 15.458 19.1025 15.8859 19.1483C16.8831 19.2552 17.9335 19.0904 18.9027 18.8557C19.7436 18.6521 20.5989 18.3757 21.3712 18.1262C21.4922 18.087 21.6112 18.0486 21.7278 18.0112C22.6259 17.723 23.3582 17.5047 23.9351 17.4261C24.1955 17.3906 24.3601 17.3929 24.4598 17.4039C24.4456 17.4396 24.4269 17.4823 24.4023 17.5329C24.2099 17.9279 23.7845 18.4712 23.1286 19.0937C21.8334 20.323 19.9205 21.5983 18.183 22.3406C16.559 23.0344 14.4478 22.6599 12.2928 22.0439C11.911 21.9348 11.5123 21.8133 11.1198 21.6936C10.5027 21.5055 9.90009 21.3218 9.40242 21.1983C9.10349 21.1241 8.79734 21.0589 8.5 21.0205V15.0018ZM6.25 12.1252V23.3752H4V12.1252H6.25ZM24.5004 17.2484C24.502 17.2474 24.5032 17.2564 24.4992 17.2785C24.4967 17.2605 24.4987 17.2494 24.5004 17.2484ZM16.4319 17.8061C16.4316 17.8059 16.4338 17.8044 16.4393 17.8021C16.4348 17.8051 16.4321 17.8062 16.4319 17.8061Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiveScholarship;
