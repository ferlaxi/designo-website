import HomeCard from "./HomeCard"
import svgCard1 from '../../../assets/home/desktop/illustration-passionate.svg'
import svgCard2 from '../../../assets/home/desktop/illustration-resourceful.svg'
import svgCard3 from '../../../assets/home/desktop/illustration-friendly.svg'
import svgbg from '../../../assets/home/desktop/bg-pattern-hero-home.svg'

const HomeThirdSection = () => {
    return (
        <div className="flex xl:flex-row md:flex-col flex-col relative xl:justify-between xl:w-[71rem] xl:h-[22rem] xl:mx-auto md:mt-32 md:mx-5 md:gap-y-7 mt-72 gap-y-16">

            <svg className='xl:block md:hidden hidden absolute ml-[280px] -z-20 rotate-180 mt-[100px]' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502" /></svg>

            <HomeCard svgCard={svgCard1} title="APASIONADO" svgbg={svgbg} rotate="-rotate-90" description="Cada proyecto comienza con una investigación de marca en profundidad para garantizar que solo creamos productos que tengan un propósito. Fusionamos arte, diseño y tecnología en nuevas y emocionantes soluciones." />
            <HomeCard svgCard={svgCard2} title="INGENIOSO" svgbg={svgbg} rotate="rotate-180" description="Todo lo que hacemos tiene un propósito estratégico. Utilizamos un enfoque ágil en todos nuestros proyectos y valoramos la colaboración del cliente. Garantiza resultados superiores que satisfacen las necesidades de nuestros clientes." />
            <HomeCard svgCard={svgCard3} title="AMIGABLE" svgbg={svgbg} description="Somos un grupo de personas entusiastas que saben cómo poner a las personas primero. Nuestro éxito depende de nuestros clientes, y nos esforzamos por brindarles la mejor experiencia que una empresa puede brindar." />
        </div>
    )
}

export default HomeThirdSection