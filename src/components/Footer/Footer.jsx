import React from "react";
import DonateButton from "../DonateButton";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="mt-[100px] md:px-0 px-5 mx-auto max-w-[1140px] ">
        <div className="py-[49px]">
          <div></div>
          <div className="flex justify-between items-center">
            <div>
            <svg width="99" height="50" viewBox="0 0 99 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1001_743)">
<path d="M18.1434 9.66834C18.1852 7.93805 19.6065 6.55068 21.3533 6.55068H21.9884L21.9968 6.04932H4L4.00847 6.55068H4.65201C6.39091 6.54221 7.81166 7.93805 7.85339 9.6768V37.4932C7.82013 39.2398 6.39877 40.6526 4.64354 40.6526H4.00847L4 41.1539H21.9968L21.9884 40.6526H21.3533C19.5981 40.6526 18.1682 39.2398 18.135 37.4932L18.1434 9.66834ZM94.2115 40.776H93.5765C91.8212 40.776 90.3914 39.7164 90.3666 38.3986V17.3969C90.4083 16.0911 91.8297 15.0382 93.5765 15.0382H94.2115L94.22 14.6596H76.2232L76.2316 15.0382H76.8667C78.6135 15.0382 80.0348 16.0917 80.0766 17.4035V38.3992C80.0766 39.6287 78.282 39.4158 76.5274 39.4333L67.3321 39.5247C64.6594 39.4606 60.711 40.2401 60.711 37.5029V25.0153L70.5498 9.50202C71.5696 7.94713 73.5008 6.55129 75.6069 6.55129H76.3091V6.04992H63.8126V6.55129H64.4477C65.8104 6.55129 66.9886 8.23137 66.2029 9.66048L59.081 22.0561L52.1847 9.65261C51.4577 8.23198 52.4774 6.55189 53.9399 6.55189H54.575V6.05053H42.142H35.1991H30.0466V6.49323H30.5316C31.9022 6.49323 32.5379 7.73848 31.7437 8.85007L19.7487 25.1992C19.7487 25.308 25.1547 34.0109 26.72 36.1403C30.6296 41.4582 38.155 41.1467 39.5848 41.1467H46.2252L67.6726 41.1552V41.1546L94.22 41.1552L94.2115 40.7766V40.776ZM38.585 7.29577C39.543 7.83161 40.3553 8.6015 40.8834 9.41796L50.421 24.9893V37.5271C50.421 39.6456 48.7492 39.1878 46.146 39.3456C44.1065 39.2954 41.2723 39.3051 39.6513 36.8582L27.9484 19.1973L36.4076 8.96679C37.0009 8.29306 37.7431 7.71973 38.585 7.29577Z" fill="#FEFEFE"/>
<path d="M85.2213 12.6336C88.4769 12.6336 91.116 9.99471 91.116 6.73943C91.116 3.48414 88.4769 0.845215 85.2213 0.845215C81.9657 0.845215 79.3266 3.48414 79.3266 6.73943C79.3266 9.99471 81.9657 12.6336 85.2213 12.6336Z" fill="#FEFEFE"/>
</g>
<defs>
<filter id="filter0_d_1001_743" x="0" y="0.845215" width="98.22" height="48.3101" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1001_743"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1001_743" result="shape"/>
</filter>
</defs>
</svg>
            </div>

            <ul className="md:flex hidden flex-row gap-5 font-manrope text-white">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Gallery</a>
              </li>
            </ul>

            <div className="md:block hidden">
              <DonateButton />
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-white"></div>
      <div className="md:mb-[12px] mx-auto py-5 md:px-0 px-5 max-w-[1140px] font-poppins">
        <div className="flex gap-6 md:gap-0 md:items-center md:flex-row  flex-col-reverse justify-between">
            <span className="font-manrope text-white text-[12px]">© 2023 Kachem Young Initiative. All rights reserved</span>
            <div>
            <ul className="flex flex-row gap-5 font-manrope text-white">
              <li className="py-4 px-4 flex items-center justify-center rounded-full bg-[#ffffff22]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00058 0.600098C5.26242 0.600098 5.04429 0.607698 4.36161 0.638765C3.68027 0.669965 3.2152 0.777833 2.80827 0.936101C2.38733 1.09957 2.03026 1.31824 1.67452 1.67411C1.31852 2.02985 1.09985 2.38692 0.935846 2.80772C0.777177 3.21479 0.669176 3.68 0.638509 4.36107C0.607976 5.04374 0.599976 5.26201 0.599976 7.00016C0.599976 8.73831 0.607709 8.95578 0.638643 9.63846C0.669976 10.3198 0.777844 10.7849 0.935979 11.1918C1.09958 11.6127 1.31825 11.9698 1.67412 12.3256C2.02972 12.6816 2.38679 12.9008 2.80747 13.0642C3.21467 13.2225 3.67987 13.3304 4.36108 13.3616C5.04376 13.3926 5.26176 13.4002 6.99978 13.4002C8.73806 13.4002 8.95553 13.3926 9.6382 13.3616C10.3195 13.3304 10.7851 13.2225 11.1924 13.0642C11.6132 12.9008 11.9697 12.6816 12.3253 12.3256C12.6813 11.9698 12.9 11.6127 13.064 11.1919C13.2213 10.7849 13.3293 10.3197 13.3613 9.63859C13.392 8.95592 13.4 8.73831 13.4 7.00016C13.4 5.26201 13.392 5.04388 13.3613 4.3612C13.3293 3.67986 13.2213 3.21479 13.064 2.80785C12.9 2.38692 12.6813 2.02985 12.3253 1.67411C11.9693 1.31811 11.6133 1.09944 11.192 0.936101C10.7839 0.777833 10.3186 0.669965 9.63727 0.638765C8.9546 0.607698 8.73726 0.600098 6.99858 0.600098H7.00058ZM6.42641 1.75343C6.59681 1.75316 6.78695 1.75343 7.00055 1.75343C8.70937 1.75343 8.9119 1.75956 9.58671 1.79023C10.2107 1.81876 10.5494 1.92303 10.775 2.01063C11.0737 2.12663 11.2866 2.2653 11.5105 2.4893C11.7345 2.7133 11.8731 2.92664 11.9894 3.22531C12.077 3.45064 12.1814 3.78931 12.2098 4.41332C12.2405 5.08799 12.2471 5.29066 12.2471 6.99868C12.2471 8.7067 12.2405 8.90937 12.2098 9.58404C12.1813 10.208 12.077 10.5467 11.9894 10.7721C11.8734 11.0707 11.7345 11.2834 11.5105 11.5073C11.2865 11.7313 11.0738 11.8699 10.775 11.9859C10.5497 12.0739 10.2107 12.1779 9.58671 12.2065C8.91203 12.2371 8.70937 12.2438 7.00055 12.2438C5.2916 12.2438 5.08906 12.2371 4.41439 12.2065C3.79038 12.1777 3.45171 12.0734 3.22598 11.9858C2.92731 11.8698 2.71397 11.7311 2.48997 11.5071C2.26597 11.2831 2.1273 11.0703 2.01103 10.7715C1.92343 10.5462 1.81903 10.2075 1.79063 9.58351C1.75996 8.90883 1.75383 8.70616 1.75383 6.99708C1.75383 5.28799 1.75996 5.08639 1.79063 4.41172C1.81916 3.78771 1.92343 3.44904 2.01103 3.22344C2.12703 2.92477 2.26597 2.71143 2.48997 2.48743C2.71397 2.26343 2.92731 2.12476 3.22598 2.00849C3.45158 1.92049 3.79038 1.81649 4.41439 1.78783C5.00479 1.76116 5.2336 1.75316 6.42641 1.75182V1.75343ZM10.4169 2.81611C9.99285 2.81611 9.64885 3.15971 9.64885 3.58385C9.64885 4.00785 9.99285 4.35185 10.4169 4.35185C10.8409 4.35185 11.1849 4.00785 11.1849 3.58385C11.1849 3.15984 10.8409 2.81611 10.4169 2.81611ZM7.00059 3.71345C5.1855 3.71345 3.71389 5.18506 3.71389 7.00015C3.71389 8.81523 5.1855 10.2862 7.00059 10.2862C8.81567 10.2862 10.2868 8.81523 10.2868 7.00015C10.2868 5.18506 8.81567 3.71345 7.00059 3.71345ZM7.00056 4.86679C8.17871 4.86679 9.13392 5.82187 9.13392 7.00015C9.13392 8.17829 8.17871 9.1335 7.00056 9.1335C5.82228 9.1335 4.86721 8.17829 4.86721 7.00015C4.86721 5.82187 5.82228 4.86679 7.00056 4.86679Z" fill="white"/>
</svg>

              </li>
              <li className="py-4 px-4 flex items-center justify-center rounded-full bg-[#ffffff22]">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4 6.99122C13.4 7.42404 13.3559 7.85626 13.2694 8.27757C13.185 8.68888 13.06 9.09268 12.8962 9.4787C12.7362 9.85789 12.5378 10.2233 12.3059 10.5641C12.0774 10.9027 11.8143 11.2204 11.5252 11.5099C11.2355 11.7983 10.9167 12.0607 10.5783 12.2901C10.2364 12.5204 9.87047 12.7186 9.49106 12.8793C9.10449 13.0422 8.69975 13.167 8.2888 13.2513C7.86693 13.338 7.43313 13.3823 6.99969 13.3823C6.56592 13.3823 6.13215 13.338 5.71088 13.2513C5.2993 13.167 4.89459 13.0422 4.50832 12.8793C4.12893 12.7186 3.76264 12.5204 3.42076 12.2901C3.0823 12.0607 2.76354 11.7983 2.47446 11.5099C2.18508 11.2204 1.92193 10.9027 1.69317 10.5641C1.46253 10.2233 1.26376 9.85787 1.10313 9.4787C0.939356 9.09268 0.814055 8.68886 0.72936 8.27757C0.643738 7.85626 0.599976 7.42404 0.599976 6.99122C0.599976 6.55808 0.643713 6.12494 0.729385 5.70455C0.81408 5.29324 0.939381 4.88881 1.10316 4.50342C1.26378 4.12396 1.46256 3.75823 1.69319 3.41744C1.92195 3.07854 2.18511 2.76147 2.47449 2.47155C2.76357 2.18319 3.08233 1.92139 3.42078 1.69234C3.76267 1.46108 4.12895 1.26295 4.50834 1.10191C4.89461 0.938663 5.2993 0.813543 5.7109 0.729921C6.13217 0.643797 6.56594 0.600098 6.99971 0.600098C7.43316 0.600098 7.86693 0.643797 8.28882 0.729921C8.69977 0.813568 9.10449 0.938688 9.49109 1.10191C9.87047 1.26292 10.2364 1.46108 10.5783 1.69234C10.9168 1.92139 11.2356 2.18319 11.5252 2.47155C11.8143 2.76147 12.0775 3.07854 12.3059 3.41744C12.5378 3.75823 12.7362 4.12398 12.8962 4.50342C13.06 4.88881 13.185 5.29324 13.2694 5.70455C13.3559 6.12494 13.4 6.55808 13.4 6.99122ZM4.66766 2.05463C3.14351 2.77334 2.00595 4.17575 1.65124 5.86591C1.79533 5.86716 4.07295 5.89587 6.69714 5.19963C5.75116 3.52133 4.74049 2.15171 4.66766 2.05463ZM7.14997 6.04006C4.33577 6.88136 1.6353 6.82082 1.53844 6.8171C1.53686 6.87575 1.53405 6.93254 1.53405 6.99122C1.53405 8.39331 2.06376 9.67153 2.93444 10.638C2.93256 10.6352 4.42828 7.98545 7.3778 7.03304C7.44904 7.00933 7.52156 6.98809 7.59343 6.9675C7.45626 6.65733 7.30653 6.3465 7.14997 6.04006ZM10.6092 2.89504C9.64698 2.04776 8.3835 1.53382 6.99967 1.53382C6.55558 1.53382 6.12461 1.5875 5.71179 1.68673C5.79365 1.79659 6.82028 3.15656 7.75501 4.8704C9.81732 4.09836 10.5958 2.915 10.6092 2.89504ZM7.96599 7.87187C7.95382 7.8759 7.94165 7.87937 7.92975 7.88373C4.70494 9.00632 3.65184 11.2687 3.64045 11.2934C4.56833 12.0139 5.73214 12.4486 6.99971 12.4486C7.7566 12.4486 8.47757 12.2947 9.13354 12.0161C9.0526 11.5393 8.73509 9.86784 7.96599 7.87187ZM10.0539 11.5174C11.2811 10.6905 12.1527 9.37729 12.3959 7.85623C12.2834 7.82004 10.7542 7.33664 8.99006 7.61908C9.70697 9.58636 9.99826 11.1885 10.0539 11.5174ZM8.1757 5.68366C8.30256 5.94393 8.4254 6.20883 8.53883 6.47505C8.57916 6.57056 8.61854 6.66418 8.65697 6.75779C10.5346 6.52185 12.3843 6.9188 12.4634 6.93501C12.4509 5.64121 11.9874 4.45379 11.2206 3.52416C11.2102 3.5388 10.3336 4.80361 8.1757 5.68366Z" fill="white"/>
</svg>

              </li>
              <li className="py-4 px-4 flex items-center justify-center rounded-full bg-[#ffffff22]">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.6406 2.75395L5.66578 3.16917L5.2461 3.11833C3.71843 2.92343 2.38383 2.26245 1.25067 1.15236L0.696681 0.601544L0.553988 1.0083C0.251813 1.91502 0.444869 2.87258 1.0744 3.51661C1.41015 3.87252 1.33461 3.92336 0.755438 3.71151C0.553988 3.64372 0.377719 3.59287 0.360931 3.6183C0.302175 3.67761 0.503625 4.44875 0.663106 4.75381C0.881344 5.17752 1.32621 5.59274 1.81305 5.83849L2.22434 6.03339L1.73751 6.04187C1.26746 6.04187 1.25067 6.05034 1.30103 6.22829C1.46891 6.77911 2.13201 7.36381 2.87066 7.61803L3.39108 7.79599L2.93781 8.06716C2.26631 8.45696 1.4773 8.67729 0.688288 8.69424C0.310569 8.70271 0 8.73661 0 8.76203C0 8.84677 1.02404 9.32131 1.61999 9.50774C3.40786 10.0586 5.53148 9.82128 7.1263 8.88066C8.25945 8.21122 9.39261 6.88079 9.92142 5.59274C10.2068 4.90635 10.4922 3.65219 10.4922 3.05054C10.4922 2.66073 10.5174 2.60989 10.9874 2.14382C11.2644 1.87265 11.5246 1.57606 11.575 1.49132C11.6589 1.33031 11.6505 1.33031 11.2224 1.47437C10.509 1.72859 10.4083 1.69469 10.7608 1.31336C11.021 1.04219 11.3316 0.5507 11.3316 0.406642C11.3316 0.381219 11.2057 0.42359 11.063 0.499856C10.9119 0.584596 10.5761 0.711706 10.3243 0.787973L9.87105 0.932031L9.45976 0.652388C9.23313 0.499856 8.91417 0.330375 8.74629 0.279531C8.31821 0.160895 7.6635 0.177843 7.27738 0.313427C6.22816 0.694758 5.56506 1.67774 5.6406 2.75395Z" fill="white"/>
</svg>
              </li>
              <li className="py-4 px-4 flex items-center justify-center rounded-full bg-[#ffffff22]">
              <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0008 0.874762C12.5515 1.02589 12.9853 1.4712 13.1325 2.03671C13.4 3.06162 13.4 5.2001 13.4 5.2001C13.4 5.2001 13.4 7.3385 13.1325 8.36349C12.9853 8.92899 12.5515 9.3743 12.0008 9.52551C11.0027 9.8001 6.99998 9.8001 6.99998 9.8001C6.99998 9.8001 2.99728 9.8001 1.9991 9.52551C1.44834 9.3743 1.01459 8.92899 0.867394 8.36349C0.599976 7.3385 0.599976 5.2001 0.599976 5.2001C0.599976 5.2001 0.599976 3.06162 0.867394 2.03671C1.01459 1.4712 1.44834 1.02589 1.9991 0.874762C2.99728 0.600098 6.99998 0.600098 6.99998 0.600098C6.99998 0.600098 11.0027 0.600098 12.0008 0.874762ZM5.79999 3.40006V7.40006L8.99999 5.40013L5.79999 3.40006Z" fill="white"/>
</svg>

              </li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
