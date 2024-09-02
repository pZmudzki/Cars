import Container from "./ui/Container";
import FAQQuestion from "./faq/FAQQuestion";

function FAQSection() {
  return (
    <section className="bg-gray-fontSecondary py-20 text-white">
      <Container className="flex gap-20">
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
