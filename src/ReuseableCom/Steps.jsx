import React from "react";
import StepsCards from "./StepsCards";

const stepsCardsdata = [
  {
    leftSide: [
      {
        id: 1,
        title: "Information Security",
        description:
          "Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow",
        img: "/StepsImgs/Information-Security.svg",
      },
      {
        id: 2,
        title: "Data Synchronization",
        description:
          "Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow",
        img: "/StepsImgs/Data-Synchronization.svg",
      },
      {
        id: 3,
        title: "Event Processing",
        description:
          "Remind yourself of someone you know who died suddenly and the fact that there is no guarantee that tomorrow",
        img: "/StepsImgs/Event-Processing.svg",
      },
    ],
  },

  {
    rightSide: [
      {
        id: 4,
        title: "Process Automation",
        description:
          "It must come from the natural product of your desire to achieve something and your belief that you are capable.",
        img: "/StepsImgs/Information-Security.svg",
      },
      {
        id: 5,
        title: "Mobile Platforms",
        description:
          "There is really no magic to it and it’s not reserved only for a select few people. As such, success really has nothing.",
        img: "/StepsImgs/Information-Security.svg",
      },
      {
        id: 6,
        title: "Content Management",
        description:
          "It must come from the natural product of your desire to achieve something and your belief that you are capable.",
        img: "/StepsImgs/Information-Security.svg",
      },
    ],
  },
];

export default function Steps() {
  return (
   <div className="bg-black">
     <div className="grid h-screen max-w-[80%] mx-auto lg:grid-cols-2 lg:gap-5">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center justify-center gap-2 self-start">
          <img src="subtitle-icon.png" alt="" className="h-5 w-5" />
          <span className="text-se text-2xl font-extrabold">Our Steps</span>
        </div>
        <h1 className="text-primary-h1 font-extrabold">
          Digital marketing services that help you grow.
        </h1>
        <p className="ml-16">
          We all know that nothing moves until someone makes a decision. The
          first action is always in making the decision to proceed. which most
          people overlook, we don’t do it intentionally or with malice.
        </p>
      </div>
      <div className="grid w-full grid-cols-2 gap-5">
        {/* section steps leftSide Col 01 */}
        <div className="">
          {/* //Cards */}
          {stepsCardsdata[0].leftSide.map((card) => (
            <React.Fragment key={card.id}>
              <StepsCards data={card} />
            </React.Fragment>
          ))}
        </div>
        {/* section steps leftSide Col 02 */}
        <div className="mt-24">
          {stepsCardsdata[1].rightSide.map((card) => (
            <div className="flex flex-col gap-4" key={card.id}>
              <StepsCards data={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
}
