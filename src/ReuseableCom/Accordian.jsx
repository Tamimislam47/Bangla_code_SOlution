import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  const [openItem, setOpenItem] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-1"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-1")}
          >
            It turned out to be the Hope Diamond?
          </AccordionTrigger>
          <AccordionContent>
            Imagine reaching deep inside you for all the strength and wisdom
            that you need to make this decision today. As you do so, imagine
            that when you choose to make that decision that deep inside your
            mind you are switching off the alternative path.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-2"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-2")}
          >
            So Why do we do it?
          </AccordionTrigger>
          <AccordionContent>
            Step out on to the path to your left. Where there is no change.
            Instead, you continue doing what you have in the past. What will
            life be like about staying on this path. Walk out into your future
            to the 10-year point.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-3"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-3")}
          >
            I am worried about e-mail scams...?
          </AccordionTrigger>
          <AccordionContent>
            Walk out 10 years into your future and feel how it feels to carry on
            doing the same thing. I want you to think about how you will feel in
            10 years if you continue doing the exact same things you have done
            to date. What will your daily life be like?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-4"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-4")}
          >
            Why IT Staff Management?
          </AccordionTrigger>
          <AccordionContent>
            Really experience that. See what you see, hear what you hear, feel
            the feelings. Notice everything that you need to know about what it
            will be like if you carry on with the same behaviour, putting off
            change. Drift back to where the path splits.
          </AccordionContent>
        </AccordionItem>
          </Accordion>
          
          
      <Accordion type="single" collapsible>
        <AccordionItem value="item-5">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-5"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-5")}
          >
            It turned out to be the Hope Diamond?
          </AccordionTrigger>
          <AccordionContent>
            Imagine reaching deep inside you for all the strength and wisdom
            that you need to make this decision today. As you do so, imagine
            that when you choose to make that decision that deep inside your
            mind you are switching off the alternative path.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-6"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-6")}
          >
            So Why do we do it?
          </AccordionTrigger>
          <AccordionContent>
            Step out on to the path to your left. Where there is no change.
            Instead, you continue doing what you have in the past. What will
            life be like about staying on this path. Walk out into your future
            to the 10-year point.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-7"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-7")}
          >
            I am worried about e-mail scams...?
          </AccordionTrigger>
          <AccordionContent>
            Walk out 10 years into your future and feel how it feels to carry on
            doing the same thing. I want you to think about how you will feel in
            10 years if you continue doing the exact same things you have done
            to date. What will your daily life be like?
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger
            className={`font-semibold text-xl ${
              openItem === "item-8"
                ? "bg-blue-gradient hover:text-white border-2"
                : "bg-black"
            }`}
            onClick={() => handleAccordionToggle("item-8")}
          >
            Why IT Staff Management?
          </AccordionTrigger>
          <AccordionContent>
            Really experience that. See what you see, hear what you hear, feel
            the feelings. Notice everything that you need to know about what it
            will be like if you carry on with the same behaviour, putting off
            change. Drift back to where the path splits.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
