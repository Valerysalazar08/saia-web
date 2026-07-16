import Hero from '@/components/organisms/Hero';
import Caracteristicas from '@/components/organisms/Caracteristicas';
import ComoFunciona from '@/components/organisms/ComoFunciona';
import ListoParaEmpezar from '@/components/organisms/ListoParaEmpezar';
import Beneficios from '@/components/organisms/Beneficios';
import Testimonios from '@/components/organisms/Testimonios';
import Contactanos from '@/components/organisms/Contactanos';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Caracteristicas />
      <ComoFunciona />
      <ListoParaEmpezar />
      <Beneficios />
      <Testimonios />
      <Contactanos />
    </>
  );
}
