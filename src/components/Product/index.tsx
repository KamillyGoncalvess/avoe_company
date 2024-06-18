import { Container, Title, Products, StepText, StepContainer } from './styles';
import { FaPlaneDeparture, FaHotel, FaCarSide } from 'react-icons/fa';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

const steps = [
  "Explore as Opções: Navegue pelo nosso site e inspire-se com os destinos e pacotes que oferecemos.",
  "Seja Flexível: Lembre-se, quanto mais flexibilidade você tiver com suas datas e destinos, maiores serão suas chances de conseguir um valor ainda mais vantajoso.",
  "Solicite Sua Cotação: Encontrou o que procura ou precisa de algo personalizado? Clique no botão Contato em nosso site.",
  "Converse Conosco: Após clicar em Contato, você será direcionado para conversar conosco via WhatsApp. É por lá que entenderemos suas preferências e buscaremos as melhores ofertas para você.",
  "Receba Sua Proposta: Nossa equipe especializada irá elaborar uma proposta que atenda às suas necessidades e ofereça o melhor preço possível.",
  "Confirme Sua Viagem: Gostou da proposta? Confirme sua viagem conosco e prepare-se para embarcar em uma experiência inesquecível!"
];

interface StepProps {
  text: string;
}

const Step: React.FC<StepProps> = ({ text }) => (
  <StepContainer>
    <MdKeyboardArrowRight />
    <StepText>{text}</StepText>
  </StepContainer>
);

const Steps = () => (
  <>
    {steps.map((step, index) => (
      <Step key={index} text={step} />
    ))}
  </>
);

export function Product() {
  return (
    <Container>
      <Title>Como Comprar Sua Viagem com a Avoe</Title>
      <Steps />
      <Products>
        <div><FaPlaneDeparture /> Passagens </div>
        <div><FaHotel /> Hotel </div>
        <div><FaCarSide /> Aluguel de carro </div>
        <div><FaCartFlatbedSuitcase /> Pacotes </div>
      </Products>
    </Container>
  )
}