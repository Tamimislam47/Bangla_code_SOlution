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
    <div className="grid grid-cols-2 gap-4">
      <Accordion type="single" collapsible>
        {[
          {
            id: "item-1",
            title: "01. It turned out to be the Hope Diamond?",
            content:
              "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path.",
          },
          {
            id: "item-2",
            title: "02. So Why do we do it?",
            content:
              "Step out on to the path to your left. Where there is no change. Instead, you continue doing what you have in the past. What will life be like about staying on this path. Walk out into your future to the 10-year point.",
          },
          {
            id: "item-3",
            title: "03. I am worried about e-mail scams...?",
            content:
              "Walk out 10 years into your future and feel how it feels to carry on doing the same thing. I want you to think about how you will feel in 10 years if you continue doing the exact same things you have done to date. What will your daily life be like?",
          },
          {
            id: "item-4",
            title: "04. Why IT Staff Management?",
            content:
              "Really experience that. See what you see, hear what you hear, feel the feelings. Notice everything that you need to know about what it will be like if you carry on with the same behaviour, putting off change. Drift back to where the path splits.",
          },
        ].map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger
              className={`h-[60px] pl-4 pr-4 text-[25px] font-semibold ${
                openItem === item.id ? "border-2 bg-blue-gradient" : "bg-black"
              }`}
              onClick={() => handleAccordionToggle(item.id)}
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="flex items-center justify-center p-4 pt-4">
              <p className="text-[16px]">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Accordion type="single" collapsible>
        {[
          {
            id: "item-5",
            title: "05. It turned out to be the Hope Diamond?",
            content:
              "Imagine reaching deep inside you for all the strength and wisdom that you need to make this decision today. As you do so, imagine that when you choose to make that decision that deep inside your mind you are switching off the alternative path.",
          },
          {
            id: "item-6",
            title: "06. So Why do we do it?",
            content:
              "Step out on to the path to your left. Where there is no change. Instead, you continue doing what you have in the past. What will life be like about staying on this path. Walk out into your future to the 10-year point.",
          },
          {
            id: "item-7",
            title: "07. I am worried about e-mail scams...?",
            content:
              "Walk out 10 years into your future and feel how it feels to carry on doing the same thing. I want you to think about how you will feel in 10 years if you continue doing the exact same things you have done to date. What will your daily life be like?",
          },
          {
            id: "item-8",
            title: "08. Why IT Staff Management?",
            content:
              "Really experience that. See what you see, hear what you hear, feel the feelings. Notice everything that you need to know about what it will be like if you carry on with the same behaviour, putting off change. Drift back to where the path splits.",
          },
        ].map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger
              className={`h-[60px] pl-4 pr-4 text-[25px] font-semibold ${
                openItem === item.id ? "border-2 bg-blue-gradient" : "bg-black"
              }`}
              onClick={() => handleAccordionToggle(item.id)}
            >
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="flex items-center justify-center p-4 pt-4">
              <p className="text-[16px]">{item.content}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
