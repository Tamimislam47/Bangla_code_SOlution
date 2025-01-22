import { AccordionDemo } from "./Accordian";


export default function Faq() {
  // const [openItem, setOpenItem] = useState(null); // Manage state of which accordion item is open

  return (
   <div >
     <div className="flex max-w-[80%] mx-auto flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-2">
        <img src="subtitle-icon.png" alt="" className="h-5 w-5" />
        <span className="text-2xl font-extrabold text-primary">FAQ</span>
      </div>

      <h1 className="text-2xl font-extrabold sm:text-4xl lg:text-6xl">
        Frequently Asked Questions
      </h1>
      <div className="w-full">
        <AccordionDemo />
      </div>
    </div>
   </div>
  );
}
