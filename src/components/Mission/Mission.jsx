import React from "react";

const Mission = () => {
  return (
    <div>
      <div className="pt-[147px] max-w-[1140px] w-full mx-auto flex flex-col gap-[104px]">
        <div>
          <p className="text-black text-[26px] font-poppins text-center ">
            Our mission is to advocate and promote entrepreneurial education,
            advocate for equity, inclusion, and access in Africa’s education,
            and mitigate the odds against literacy and minority rights.{" "}
          </p>
        </div>

        <div>
          <div className="text-black font-poppins text-center px-[61px] grid grid-cols-12">
            <div className="col-span-12 md:col-span-5">
              <div>
                <div className="h-[417px] flex flex-col items-start justify-center">
                    <div className="flex flex-col items-center justify-center relative">
                    <div className="">
                    <span className="text-[40px] font-semibold">6</span>
                    <p className="text-[16px]">years of operation</p>
                  </div>
                  <div className="h-[1px] w-[80px] bg-slate-500 my-[15px]"></div>
                  <div>
                    <span className="text-[40px] font-semibold">20</span>
                    <p className="text-[16px]">empowerment programs</p>
                  </div>
                  <div className="h-[1px] w-[80px] bg-slate-500 my-[15px]"></div>
                  <div>
                    <span className="text-[40px] font-semibold">100</span>
                    <p className="text-[16px]">empowered persons</p>
                  </div>

                    </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="flex items-center justify-center">
              <div className="flex flex-col gap-[28px]">
                <div className="flex flex-row gap-[28px]">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/0%201.png"
                    className="w-[150px] h-[150px]"
                  />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/02.png" className="w-[150px] h-[150px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/03.png" className="w-[150px] h-[150px]" />
                </div>
                <div className="flex flex-row gap-[28px]">
                  <img src="https://miracle.sirv.com/kachem-young-initiative/04.png" className="w-[150px] h-[150px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/05.png" className="w-[150px] h-[150px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/06.png" className="w-[150px] h-[150px]"/>
                </div>
                <div className="flex flex-row gap-[28px]">
                  <img src="https://miracle.sirv.com/kachem-young-initiative/07.png" className="w-[150px] h-[91px]" />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/08.png" className="w-[150px] h-[91px]"  />
                  <img src="https://miracle.sirv.com/kachem-young-initiative/09.png" className="w-[150px] h-[91px]" />
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-[#157d9a3f] mt-[86px]">
            <div className="max-w-[1140px] mx-auto w-full">
            <p className="px-[80px] py-[80px] font-poppins text-center font-medium text-secondary">
            Kachem Young Initiative is a non-profit NGO founded in 2017 to administer community resilience towards solving problems of poverty among grassroots people, devaluation of education especially girl child education, female discrimination, and exclusion of persons with disabilities in Ebonyi State. <a href="#" className="text-primary">Learn more</a>
            </p>
            </div>
        </div>

        <div className="mt-[120px]">
            <h1 className="flex items-center text-center justify-center mb-[84px] font-poppins text-[40px] font-bold">Our Memories</h1>

            <div className=" w-full mx-auto max-w-[1140px] flex flex-row">
                <div className="flex gap-[18px] flex-wrap md:flex-nowrap">
                    <div className="h-[210px] w-[360px] flex items-center justify-center px-[15px] py-[30px] bg-[#9747ff42] rounded-[8px]">
                        <p className="text-black font-poppins text-[16px]">
                        <b>Hope</b> is a fundamental principle in our operations. We recognize the importance of understanding the challenges faced by grassroots people and developing solutions that address their specific needs. 
                        </p>
                    </div>
                    <div className="h-[210px]">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2035.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>
                    <div className="h-[210px]">
                        <img src="https://miracle.sirv.com/kachem-young-initiative/Frame%2039.png"  className="h-[210px] rounded-[8px] object-cover"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
