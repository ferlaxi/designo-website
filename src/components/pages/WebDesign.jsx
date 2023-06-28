import Header from '../sections/Header'
import CardTitle from '../sections/CardTitle'
import GridWebDesign from '../sections/WebDesign/GridWebDesign'
import Footer from '../sections/Footer'
import HomeFourthSection from '../sections/Home/HomeFourthSection'
import img2Desk from '../../assets/home/desktop/image-app-design.jpg'
import img3Desk from '../../assets/home/desktop/image-graphic-design.jpg'
import img2Tab from '../../assets/home/tablet/image-app-design.jpg'
import img3Tab from '../../assets/home/tablet/image-graphic-design.jpg'
import img2Mob from '../../assets/home/mobile/image-app-design.jpg'
import img3Mob from '../../assets/home/mobile/image-graphic-design.jpg'
import { Link } from 'react-router-dom'
import { ScrollRestoration } from 'react-router-dom'

const WebDesign = () => {
  return (
    <>
      <Header />
      <CardTitle title="Diseño Web" description="Construimos sitios web que sirven como poderosas herramientas de marketing.
y traer experiencias de marca memorables." imageFormat="ml-[260px]" svg={<svg width="876" height="584" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><g transform="matrix(1 0 0 -1 0 584)" fill="url(#a)" fillRule="evenodd" opacity=".309"><circle transform="matrix(0 -1 -1 0 1168 1168)" cx="730" cy="438" r="146" /><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="438" r="146" /><circle transform="matrix(0 1 1 0 -292 292)" cx="146" cy="438" r="146" /><circle transform="matrix(0 -1 -1 0 876 876)" cx="730" cy="146" r="146" /><circle transform="matrix(-1 0 0 1 876 0)" cx="438" cy="146" r="146" /></g></svg>} />
      <GridWebDesign />

      <div className='xl:w-[71rem] xl:mx-auto md:mx-5 flex md:flex-col flex-col xl:flex-row xl:mt-56 md:mt-72 mt-20 items-center gap-y-7 justify-between md:gap-y-6'>
        <Link to={'/appdesign'} className='relative cursor-pointer'>
          {/* sombra 2 */}
          <div className='absolute xl:h-[19.2rem] md:h-[14.2rem] xl:w-[33.8rem] md:w-[49rem] w-[20.5rem] bg-black/60 hover:bg-dmp-peach/70 transition-all duration-300 rounded-2xl text-white flex flex-col justify-center items-center gap-y-4 h-[15.7rem]'>
            <div className='md:text-[48px] text-[30px]'>DISEÑO DE APP</div>
            <div className='flex items-center gap-x-4'>
              <div className='tracking-[5px]'>VER PROYECTOS</div>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
            </div>
          </div>
          <img className='xl:block md:hidden rounded-2xl hidden' src={img2Desk} alt="img2" />
          <img className='md:w-[49rem] md:block xl:hidden rounded-2xl hidden' src={img2Tab} alt="img2" />
          <img className='md:hidden rounded-2xl' src={img2Mob} alt="img2" />

        </Link>

        <Link to={'/graphicdesign'} className='relative cursor-pointer'>
          {/* sombra 3 */}
          <div className='absolute xl:h-[19.2rem] md:h-[14.2rem] xl:w-[33.8rem] md:w-[49rem] w-[20.5rem] h-[15.7rem] bg-black/60 hover:bg-dmp-peach/70 transition-all duration-300 rounded-2xl text-white flex flex-col justify-center items-center gap-y-4'>
            <div className='md:text-[48px] text-[30px]'>DISEÑO GRAFICO</div>
            <div className='flex items-center gap-x-4'>
              <div className='tracking-[5px]'>VER PROYECTOS</div>
              <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" stroke-width="2" fill="none" fill-rule="evenodd" /></svg>
            </div>
          </div>
          <img className='xl:block md:hidden rounded-2xl hidden' src={img3Desk} alt="img3" />
          <img className='md:w-[49rem] md:block xl:hidden rounded-2xl hidden' src={img3Tab} alt="img3" />
          <img className='md:hidden rounded-2xl' src={img3Mob} alt="img3" />

        </Link>
      </div>
      <HomeFourthSection />
      <Footer />
      <ScrollRestoration/>
    </>
  )
}

export default WebDesign