import img1desk from '../../../assets/home/desktop/image-web-design-large.jpg'
import img2desk from '../../../assets/home/desktop/image-app-design.jpg'
import img3desk from '../../../assets/home/desktop/image-graphic-design.jpg'
import img1Tab from '../../../assets/home/tablet/image-web-design.jpg'
import img2Tab from '../../../assets/home/tablet/image-app-design.jpg'
import img3Tab from '../../../assets/home/tablet/image-graphic-design.jpg'
import img1Mob from '../../../assets/home/mobile/image-web-design.jpg'
import img2Mob from '../../../assets/home/mobile/image-app-design.jpg'
import img3Mob from '../../../assets/home/mobile/image-graphic-design.jpg'
import { Link } from 'react-router-dom'


const HomeSecondSection = () => {
    return (
        <div className="flex xl:flex-row md:flex-col flex-col justify-between xl:w-[71rem] h-[40rem] xl:mx-auto md:mx-5 md:mt-[100px] mt-[100px] md:gap-y-5 mx-12 gap-y-7">
            <Link to={'/webdesign'} className='relative cursor-pointer'>
                {/* sombra 1 */}
                <div className='absolute bg-black/60 hover:bg-dmp-peach/80 transition-all duration-300 xl:h-[40rem] md:h-[14.2rem] xl:w-[33.8rem] md:w-[48.9rem] rounded-2xl text-white flex flex-col justify-center items-center gap-y-4 w-[19.8rem] h-[15.1rem]'>
                    <div className='md:text-[48px] text-[32px]'>DISEÑO WEB</div>
                    <div className='flex items-center gap-x-4'>
                        <div className='tracking-[5px]'>VER PROYECTOS</div>
                        <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                    </div>
                </div>

                <img className='xl:block md:hidden hidden rounded-2xl' src={img1desk} alt="img1" />
                <img className='md:w-[49rem] md:block xl:hidden hidden rounded-2xl' src={img1Tab} alt="img1" />
                <img className='md:hidden rounded-2xl' src={img1Mob} alt="img1" />
            </Link>

            <div className='flex flex-col justify-between md:gap-y-5 gap-y-7'>
                <Link to={'/appdesign'} className='relative cursor-pointer'>
                    {/* sombra 2 */}
                    <div className='absolute xl:h-[19.2rem] md:h-[14.2rem] md:w-[49rem] xl:w-[33.8rem] bg-black/60 hover:bg-dmp-peach/70 transition-all duration-300 rounded-2xl text-white flex flex-col justify-center items-center gap-y-4 w-[19.8rem] h-[15.1rem]'>
                        <div className='md:text-[48px] text-[32px]'>DISEÑO DE APP</div>
                        <div className='flex items-center gap-x-4'>
                            <div className='tracking-[5px]'>VER PROYECTOS</div>
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        </div>
                    </div>
                    <img className='xl:block md:hidden rounded-2xl hidden' src={img2desk} alt="img2" />
                    <img className='md:w-[49rem] md:block xl:hidden rounded-2xl hidden' src={img2Tab} alt="img2" />
                    <img className='md:hidden rounded-2xl' src={img2Mob} alt="img2" />

                </Link>
                <Link to={'/graphicdesign'} className='relative cursor-pointer'>
                    {/* sombra 3 */}
                    <div className='absolute xl:h-[19.2rem] md:h-[14.2rem] xl:w-[33.8rem] md:w-[49rem] bg-black/60 hover:bg-dmp-peach/70 transition-all duration-300 rounded-2xl text-white flex flex-col justify-center items-center gap-y-4 w-[19.8rem] h-[15.1rem]'>
                        <div className='md:text-[48px] text-[32px]'>DISEÑO GRAFICO</div>
                        <div className='flex items-center gap-x-4'>
                            <div className='tracking-[5px]'>VER PROYECTOS</div>
                            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 1l4 4-4 4" stroke="#E7816B" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                        </div>
                    </div>
                    <img className='xl:block md:hidden rounded-2xl hidden' src={img3desk} alt="img3" />
                    <img className='md:w-[49rem] md:block xl:hidden rounded-2xl hidden' src={img3Tab} alt="img1" />
                    <img className='md:hidden rounded-2xl' src={img3Mob} alt="img3" />

                </Link>
            </div>
        </div>
    )
}

export default HomeSecondSection