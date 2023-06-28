import Header from '../sections/Header'
import Footer from '../sections/Footer'
import HomeFourthSection from '../sections/Home/HomeFourthSection'
import imgabout1Desk from '../../assets/about/desktop/image-about-hero.jpg'
import imgabout2Desk from '../../assets/about/desktop/image-world-class-talent.jpg'
import imgabout3Desk from '../../assets/about/desktop/image-real-deal.jpg'
import svgbg from '../../assets/about/desktop/bg-pattern-hero-about-desktop.svg'
import svg1 from '../../assets/shared/desktop/illustration-canada.svg'
import svg2 from '../../assets/shared/desktop/illustration-australia.svg'
import svg3 from '../../assets/shared/desktop/illustration-united-kingdom.svg'
import { Link, ScrollRestoration } from 'react-router-dom'
import imgabout1Tab from '../../assets/about/tablet/image-about-hero.jpg'
import imgabout2Tab from '../../assets/about/tablet/image-world-class-talent.jpg'
import imgabout3Tab from '../../assets/about/tablet/image-real-deal.jpg'
import imgabout1Mob from '../../assets/about/mobile/image-about-hero.jpg'
import imgabout2Mob from '../../assets/about/mobile/image-world-class-talent.jpg'
import imgabout3Mob from '../../assets/about/mobile/image-real-deal.jpg'


const OurCompany = () => {
    return (
        <>
            <Header />
            <div className="flex xl:flex-row md:flex-col-reverse flex-col-reverse relative xl:w-[71rem] md:w-[49rem] xl:h-[34rem] bg-dmp-peach mx-auto md:mt-8 md:rounded-2xl overflow-hidden">
                <div className="-mt-24 absolute"><svg width="640" height="640" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><circle fill="url(#a)" transform="matrix(1 0 0 -1 0 640)" cx="320" cy="320" r="320" fillRule="evenodd" opacity=".309" /></svg></div>
                <div className='flex flex-col xl:justify-center xl:items-start md:items-center md:text-center xl:gap-y-11 md:gap-y-5 xl:ml-24 xl:mt-20 md:mt-7 h-[24rem] items-center justify-center gap-y-5 xl:text-left text-center'>
                    <h1 className='text-white text-[48px] font-medium md:w-[535px] w-[350px] leading-[50px] z-10'>Sobre nosotros</h1>
                    <div className='text-white md:w-[450px] w-[350px] md:pb-10 z-10'>Fundada en 2010, somos una agencia creativa que produce resultados duraderos para nuestros clientes. Nos hemos asociado con muchas nuevas empresas, corporaciones y organizaciones sin fines de lucro para crear diseños que tengan un impacto real. Siempre estamos ansiosos por crear marcas, productos y experiencias digitales que se conecten con las audiencias de nuestros clientes.</div>
                </div>
                <img className='xl:block md:hidden w-1/2 hidden' src={imgabout1Desk} alt="imgabout1Desk" />
                <img className='xl:hidden md:block xl:w-1/2 z-10 hidden' src={imgabout1Tab} alt="imgabout1Tab" />
                <img className='md:hidden' src={imgabout1Mob} alt="imgabout1Mob" />
            </div>


            <div className="relative -mt-44 w-[71rem] -z-10">
                <svg className='xl:block md:hidden hidden absolute' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fillRule="evenodd" opacity=".502" /></svg>
            </div>

            <div className="flex xl:flex-row md:flex-col flex-col relative xl:w-[71rem] xl:mx-auto md:w-[49rem] md:mx-5 xl:h-[40rem] bg-dmp-grid mx-auto md:mt-80 mt-[175px] md:rounded-2xl overflow-hidden">
                <svg className='absolute md:ml-[350px] md:mt-[60px]' xmlns="http://www.w3.org/2000/svg" width="584" height="584"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0" /><stop offset="100%" stopColor="#5D0202" stopOpacity=".498" /></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle cx="146" cy="438" r="146" transform="matrix(1 0 0 -1 0 876)" /><circle cx="146" cy="146" r="146" transform="matrix(-1 0 0 1 292 0)" /><circle cx="438" cy="438" r="146" transform="matrix(0 1 1 0 0 0)" /></g></svg>
                <img className='xl:block md:hidden rounded-tl-2xl rounded-bl-2xl z-10 hidden' src={imgabout2Desk} alt="imgabout2Desk" />
                <img className='xl:hidden md:block xl:w-1/2 z-10 md:rounded-t-2xl hidden' src={imgabout2Tab} alt="imgabout2Tab" />
                <img className='md:hidden' src={imgabout2Mob} alt="imgabout2Mob" />

                <div className='flex flex-col xl:justify-center xl:items-start items-center justify-center xl:text-left text-center md:items-center md:text-center md:gap-y-11 xl:ml-24 xl:mt-20 md:mt-7 gap-y-7 h-[31rem]'>
                    <h1 className='text-dmp-peach md:text-[48px] text-[30px] font-medium wmd:-[535px] leading-[50px] z-10'>Talento clase mundial</h1>
                    <div className='text-dmp-dark-gray md:w-[450px]'>Somos un equipo de estrategas, solucionadores de problemas y tecnólogos. Cada diseño se elabora cuidadosamente desde el concepto hasta el lanzamiento, lo que garantiza el éxito en su mercado determinado. Estamos constantemente actualizando nuestras habilidades en una gran variedad de plataformas.</div>
                    <div className='text-dmp-dark-gray md:w-[450px] -mt-5 md:pb-10'>Nuestro equipo es multidisciplinario y no nos interesa solo la forma: el contenido y el significado son igual de importantes. Damos gran importancia a la artesanía, el servicio y la entrega rápida. Los clientes siempre han quedado impresionados con nuestros resultados de alta calidad que resumen la historia y la misión de su marca.</div>
                </div>
            </div>


            <div className="flex xl:flex-row md:flex-col flex-col md:gap-y-32 relative justify-between xl:w-[71rem] md:w-[49rem] h-[22rem] mx-auto mt-32 gap-y-16">
                <div className="flex flex-col justify-center items-center gap-y-7 gap-x-7">
                    <div className="relative">
                        <div><img className="absolute -z-10 opacity-80 -rotate-90" src={svgbg} alt="bg" /></div>
                        <img src={svg1} alt="" />
                    </div>
                    <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">CANADA</div>
                    <Link to={'/location#1'} className='bg-dmp-peach text-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light transition-all duration-200'>VER UBICACION</Link>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-7 gap-x-7">
                    <div className="relative">
                        <div><img className="absolute -z-10 opacity-80 rotate-180" src={svgbg} alt="bg" /></div>
                        <img src={svg2} alt="" />
                    </div>
                    <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">AUSTRALIA</div>
                    <Link to={'/location#2'} className='bg-dmp-peach text-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light transition-all duration-200'>VER UBICACION</Link>
                </div>

                <div className="flex flex-col justify-center items-center gap-y-7 gap-x-7">
                    <div className="relative">
                        <div><img className="absolute -z-10 opacity-80 rotate-90" src={svgbg} alt="bg" /></div>
                        <img src={svg3} alt="" />
                    </div>
                    <div className="text-[20px] font-medium text-dmp-black tracking-[6px]">REINO UNIDO</div>
                    <Link to={'/location#3'} className='bg-dmp-peach text-white px-5 py-4 rounded-lg font-medium tracking-[1px] hover:bg-dmp-peach-light transition-all duration-200'>VER UBICACION</Link>
                </div>
            </div>
            <svg className='xl:block md:hidden absolute ml-[900px] -z-20 rotate-180 -mt-[170px]' width="1006" height="594" xmlns="http://www.w3.org/2000/svg"><path d="M297 0h412c164.029 0 297 132.971 297 297S873.029 594 709 594H0V297C0 132.971 132.971 0 297 0z" fill="#F1F3F5" fill-rule="evenodd" opacity=".502" /></svg>


            <div className="flex xl:flex-row md:flex-col-reverse flex-col-reverse relative xl:w-[71rem] md:w-[49rem] md:h-[40rem] bg-dmp-grid mx-auto xl:mt-44 md:mt-[67rem] mt-[55rem] md:rounded-2xl overflow-hidden">
                <svg className='absolute md:mt-[350px] -rotate-180' xmlns="http://www.w3.org/2000/svg" width="584" height="584"><defs><linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%"><stop offset="0%" stopColor="#5D0202" stopOpacity="0" /><stop offset="100%" stopColor="#5D0202" stopOpacity=".498" /></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle cx="146" cy="438" r="146" transform="matrix(1 0 0 -1 0 876)" /><circle cx="146" cy="146" r="146" transform="matrix(-1 0 0 1 292 0)" /><circle cx="438" cy="438" r="146" transform="matrix(0 1 1 0 0 0)" /></g></svg>
                <div className='flex flex-col xl:justify-center md:items-center xl:text-left md:text-center items-center justify-center text-center xl:items-start gap-y-9 xl:ml-24 xl:mt-20 md:mt-7 h-[30rem]'>
                    <h1 className='text-dmp-peach md:text-[48px] text-[30px] font-medium md:w-[565px] leading-[50px] z-10'>El verdadero negocio</h1>
                    <div className='text-dmp-dark-gray md:w-[450px]'>Como socios estratégicos en los negocios de nuestros clientes, estamos preparados para asumir cualquier desafío como propio. Resolver problemas reales requiere empatía y colaboración, y nos esforzamos por brindar una nueva perspectiva a cada oportunidad. Hacemos que el diseño y la tecnología sean más accesibles y le brindamos herramientas para medir el éxito.</div>
                    <div className='text-dmp-dark-gray md:w-[450px] -mt-5 md:pb-7'>Somos narradores visuales de formas atractivas y cautivadoras. Al combinar estrategias comerciales y de marketing, inspiramos a las audiencias a tomar medidas y generar resultados reales.</div>
                </div>
                <img className='xl:block md:hidden z-10 rounded-tr-2xl rounded-br-2xl hidden' src={imgabout3Desk} alt="imgabout3Desk" />
                <img className='xl:hidden md:block xl:w-1/2 z-10 md:rounded-t-2xl hidden' src={imgabout3Tab} alt="imgabout3Tab" />
                <img className='md:hidden' src={imgabout3Mob} alt="imgabout3Mob" />

            </div>

            <HomeFourthSection />
            <Footer />
            <ScrollRestoration/>
        </>
    )
}

export default OurCompany