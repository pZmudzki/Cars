import Container from "./ui/Container";

function Footer() {
  return (
    <footer className="text-white bg-gray-fontSecondary py-6 border-t sm:text-base text-sm">
      <Container className="flex justify-between">
        <h3 className="font-bold font-primary">Cars Spot</h3>
        <a className="underline font-primary" href="#privacy_policy">
          Polityka prywatności
        </a>
      </Container>
    </footer>
  );
}

export default Footer;
