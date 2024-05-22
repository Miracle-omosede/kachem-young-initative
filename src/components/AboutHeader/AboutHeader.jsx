import React from "react";
import Team from "../Team/Team";

const AboutHeader = () => {
  return (
    <div className="relative mx-auto max-w-[1140px] w-full px-5">
      <div className="pt-[100px]">
        <h1 className="text-[48px] font-semibold font-poppins text-center text-black pt-[148px] pb-[56px]">
          Reconciling young minds to purpose.
        </h1>
        <p className="text-[22px] font-medium text-center font-poppins">
          Through education, mentorship, and personal development, we strive to
          instill in young minds a sense of purpose and direction, equipping
          them with the knowledge, skills, and mindset needed to overcome
          challenges and make a lasting impact on their communities and the
          world at large.
        </p>
      </div>

      {/* Hero Bento Grid */}
      <div className="pt-[145px] pb-[80px]">
        <div className="grid grid-cols-12 gap-[30px]">
          <div className="col-span-8 ">
            {/* inner items */}
            <div className="flex flex-col gap-[19px] w-full">
              <div className="flex flex-row justify-between items-center  w-full">
                <div className="md:block hidden">
                  <img
                    src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2061.png"
                    className="h-[228px] w-[319px] rounded-[8px] object-cover"
                  />
                </div>
                <div className="rounded-[8px]">
                  <div className="w-[385px] h-[228px] bg-primary text-white flex items-center justify-center rounded-[8px]">
                    <p className="text-center font-poppins text-[35px]">
                      Who we are...
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:block hidden">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2063.png"
                  className="h-[228px] w-full rounded-[8px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-4">
           <div  className="md:block hidden h-full">
           <img
              src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2064.png"
              className="h-full w-full rounded-[8px] object-cover"
            />
           </div>
          </div>
        </div>
      </div>

      <div className="pb-[190px]">
        <p className="text-[22px] font-medium font-poppins">
          Kachem Young Initiative is a non-profit NGO founded in 2017 to
          administer community resilience towards solving problems of poverty
          among grassroots people, devaluation of education especially girl
          child education, female discrimination, and exclusion of persons with
          disabilities in Ebonyi State.
        </p>
      </div>

      <div className="h-[400px] mb-[84px] w-full relative">
        <div className="h-[328px] w-[328px] absolute -top-[37%] right-[10%] bg-[#0979958e] flex items-center justify-center rounded-full">
          <p className="text-[40px] font-poppins font-medium text-white text-center">
            Our Story...
          </p>
        </div>
        <img
          src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2065.png"
          className="h-[400px] w-full object-cover"
        />
      </div>

      <div className="pt-[80px]">
        <p className="text-[22px] font-medium font-poppins">
          From our research, we put together vital statistics that inspired the
          foundation of our organisations purpose -
          <ol className="list-disc pl-10 pt-5">
            <li>
              Over 85% of the population of Ebonyi State reside in the rural
              heartland where the economically active workforce is about 38%.
            </li>
            <li>Ebonyi has a widespread abject poverty level of 90%</li>
            <li>
              In a stratified random sampling, the core poverty indices that
              capure the severity of poverty include income, consumption,
              dietery quality and capacity utilization.
            </li>
            <li>
              Abject poerty lines established for single-person, four-person,
              and six-person household units were annual incomes of $863,
              $2,256, $3,429 respectively and their corresponding absolute
              poverty lines are an annual income of $2,588, $6,769 and $10,299
              respectively.{" "}
            </li>
          </ol>
        </p>
      </div>

      <div className="h-[400px] mb-[84px] w-full relative flex flex-row mt-[100px]">
        <div className="h-full flex items-center">
          <div className="h-[328px] w-[328px] absolute mr-auto bg-[#f653088b] flex items-center justify-center rounded-[8px]">
            <p className="text-[40px] font-poppins font-medium text-white text-center">
              Our Purpose...
            </p>
          </div>
        </div>
        <div className="flex items-right justify-end ml-auto">
          <img
            src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2065%20(1).png"
            className="h-[400px] w-5/5 object-cover"
          />
        </div>
      </div>

      <div className="pt-[80px]">
        <p className="text-[22px] font-medium font-poppins">
          <ul className="flex flex-col gap-6">
            <li>
              <p>
                <b>Our Vision:</b> We envisage a sustainable and equitable
                structure for grassroots-oriented Inclusive or Equitable
                education policies in Africa through a massive drive for equity
                in grassroots Literacy.
              </p>
            </li>
            <li>
              <p>
                We firmly believe that education is the foundation for social
                and economic progress, and that by empowering individuals with
                the necessary skills and knowledge, we can drive sustainable
                development and create a brighter future for all.
              </p>
            </li>
            <li>
              <p>
                <b>Our Mission:</b> To advocate and promote entrepreneurial
                education, advocate for equity, inclusion, and access in
                Africa’s education, and mitigate the odds against literacy and
                minority rights.
              </p>
            </li>
          </ul>
        </p>
      </div>

      <div className="pt-[80px]">
        <div className="grid grid-cols-12 gap-[20px]">
          <div className="col-span-4">
            <img
              src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2067.png"
              className="h-[462px] md:block hidden w-full object-cover"
            />
          </div>
          <div className="col-span-4">
            <div className="flex flex-col justify-between h-full">
              <div  className="md:block hidden">
                <img
                  src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2070.png"
                  className="h-[216px] w-full object-cover"
                />
              </div>
              <div>
                <div className="font-poppins w-full ">
                  <div className="w-full md:mx-0 mx-auto  flex-1 flex-grow h-[216px] bg-secondary text-white flex items-center justify-center">
                    <p className="text-center font-poppins text-[35px]">
                      Our Team...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <img
              src="https://miracle.sirv.com/kachem-young-initiative/Rectangle%2069.png"
              className="h-[462px] w-full md:block hidden object-cover"
            />
          </div>
        </div>
      </div>

      <div className="pt-[80px]">
        <p className="text-[22px] font-medium font-poppins">
          <ul className="flex flex-col gap-6">
            <li>
              <p>
                At the heart of our organization lies a team of remarkable
                individuals who are driven by a common purpose - to create a
                world that is better, brighter and more equitable for all. We
                are a passionate and dedicated group, united by a shared
                commitment to driving meaningful change and making a positive
                impact in the lives of those around us.
              </p>
            </li>
            <li>
              <p>
                We are proud to be a part of this movement, and we hope that our
                passion and dedication inspires you to join us on this journey
                towards a brighter, more equitable future for all.
              </p>
            </li>
          </ul>
        </p>
      </div>

      <div className="mt-[80px]">
       <Team/>
      </div>
    </div>
  );
};

export default AboutHeader;
