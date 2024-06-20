import { Container, Title, Products, StepText, StepContainer } from './styles';
import { FaPlaneDeparture, FaHotel, FaCarSide } from 'react-icons/fa';
import { FaCartFlatbedSuitcase } from "react-icons/fa6";

type StepProps = {
  title: string;
  children: React.ReactNode;
};

const Step: React.FC<StepProps> = ({ title, children }) => {
  return (
    <>
      <h4>{title}</h4>
      <p style={{ marginBottom: '1em' }}>{children}</p>
    </>
  );
}

export function Product() {
  return (
    <Container>
      <Title>Como Comprar Sua Viagem com a Avoe</Title>
      <StepContainer>
        <StepText>
          <Step title="Explore as Opções:">
            Navegue pelo nosso site e inspire-se com os destinos e pacotes que oferecemos.
          </Step>
          <Step title="Seja Flexível:">
            Lembre-se, quanto mais flexibilidade você tiver com suas datas e destinos, maiores serão suas chances de conseguir um valor ainda mais vantajoso.
          </Step>
          <Step title="Solicite Sua Cotação:">
            Encontrou o que procura ou precisa de algo personalizado? Clique no botão Contato em nosso site.
          </Step>
          <Step title="Converse Conosco:">
            Após clicar em Contato, você será direcionado para conversar conosco via WhatsApp. É por lá que entenderemos suas preferências e buscaremos as melhores ofertas para você.
          </Step>
          <Step title="Receba Sua Proposta:">
            Nossa equipe especializada irá elaborar uma proposta que atenda às suas necessidades e ofereça o melhor preço possível.
          </Step>
          <Step title="Confirme Sua Viagem:">
            Gostou da proposta? Confirme sua viagem conosco e prepare-se para embarcar em uma experiência inesquecível!
          </Step>
        </StepText>
      </StepContainer>
      <Products>
        <div><FaPlaneDeparture /> Passagens </div>
        <div><FaHotel /> Hotel </div>
        <div><FaCarSide /> Aluguel de carro </div>
        <div><FaCartFlatbedSuitcase /> Pacotes </div>
      </Products>
    </Container>
  )
}