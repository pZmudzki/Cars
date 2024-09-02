import Container from "./ui/Container";
import FAQQuestion from "./faq/FAQQuestion";

function FAQSection() {
  return (
    <section
      id="faq"
      className="bg-gray-fontSecondary sm:py-20 py-10 text-white"
    >
      <Container className="flex sm:flex-row flex-col sm:gap-20 gap-10">
        <FAQQuestion
          title="Laudantium eaque et est
          doloribus perspiciatis nisi numquam provident repellat dignissimos
          praesentium facilis rem esse"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          eligendi, totam officiis laboriosam illum esse consequuntur corporis
          possimus provident, quis sint omnis impedit error consequatur
          inventore aut reprehenderit? Culpa, nostrum.Alias, suscipit dicta
          autem eligendi mollitia harum deleniti at. Nesciunt ipsa quas magni
          eos deserunt.
        </FAQQuestion>
        <FAQQuestion
          title="Laudantium eaque et est
          doloribus perspiciatis nisi numquam provident repellat dignissimos
          praesentium facilis rem esse"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          eligendi, totam officiis laboriosam illum esse consequuntur corporis
          possimus provident, quis sint omnis impedit error consequatur
          inventore aut reprehenderit? Culpa, nostrum.Alias, suscipit dicta
          autem eligendi mollitia harum deleniti at. Nesciunt ipsa quas magni
          eos deserunt.
        </FAQQuestion>
      </Container>
    </section>
  );
}

export default FAQSection;
