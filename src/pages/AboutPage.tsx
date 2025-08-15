import AccordionItem from "@/components/AccordionItem";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  const accordionArr = [
    {
      title:
        "What data is the language model trained on to assist the customer service team?",
      content:
        "Answer: The language model is trained on all company ticketing data.",
    },
    {
      title:
        "How does the language model improve efficiency for the customer service team?",
      content:
        "Answer: The language model improves efficiency by answering inquiries and routing them to the appropriate team, allowing the customer service team to focus on resolving issues.",
    },
    {
      title: "What is the most common issue the ticketing team faces?",
      content:
        "Answer: They face a lot of issues related to infrastructure tools and updating them.",
    },
  ];

  return (
    <div>
      <Header />
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white text-primary rounded-2xl p-1 max-w-7xl w-full flex items-start shadow-md mb-8">
            <div className="bg-secondary text-white font-bold text-3xl px-8 py-8 rounded-l-2xl rounded-br-[80px]">
              LLM
            </div>

            <p className="text-md md:text-lg font-semibold px-6">
              We used a large language model in our company to assist our
              customer service team with the ticketing system. The model,
              trained on all company ticketing data, can answer inquiries about
              various issues and route them to the appropriate team. This helps
              the team work more efficiently and effectively, as they can focus
              on resolving issues rather than managing inquiries.
            </p>
          </div>

          <div className="max-w-7xl">
            {accordionArr.map((item, index) => (
              <AccordionItem key={index} title={item.title} num={index + 1}>
                {item.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
