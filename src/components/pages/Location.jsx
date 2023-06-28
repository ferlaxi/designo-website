import Header from '../sections/Header'
import HomeFourthSection from '../sections/Home/HomeFourthSection'
import Footer from '../sections/Footer'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { ScrollRestoration } from 'react-router-dom'

const Location = () => {
    return (
        <>
            <Header />
            <div className='relative'>
                {/* first square */}
                <div id='1' className="flex xl:flex-row md:flex-col-reverse 2xl:mx-auto flex-col-reverse items-center xl:w-[71rem] md:w-[49rem] xl:h-[25rem] xl:mx-[150px] md:mx-5 md:mt-[50px] xl:rounded-2xl xl:gap-x-7 md:gap-y-7 overflow-hidden ">
                    <div className='overflow-hidden md:w-[40rem] w-[26rem] h-[22rem] absolute'>
                        <svg className='absolute mt-10 ml-5' width="584" height="292" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle transform="matrix(1 0 0 -1 0 292)" cx="146" cy="146" r="146" /><circle transform="matrix(0 1 1 0 292 -292)" cx="438" cy="146" r="146" /></g></svg>
                    </div>
                    <div className='flex items-center bg-dmp-grid xl:w-2/3 md:w-[49rem] xl:h-[25rem] md:h-[25rem] md:rounded-2xl md:mt-[0rem]'>
                        <div className='md:ml-24 flex md:flex-col flex-col xl:items-start md:mt-20 md:items-start items-center md:text-left text-center gap-y-8 md:w-[40rem] w-[26rem] h-[22rem] pt-10'>
                            <div className='text-dmp-peach text-[48px] font-medium leading-[50px]'>Canada</div>
                            <div className='flex md:flex-row flex-col gap-x-28 gap-y-7'>
                                <div>
                                    <div className='font-medium'>Designo Central Office</div>
                                    <div>3886 Wellington Street</div>
                                    <div>Toronto, Ontario M9C 3J5</div>
                                </div>
                                <div>
                                    <div className='font-medium'>Contact</div>
                                    <div>P : +1 253-863-8967</div>
                                    <div>M : contact@designo.co</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MapContainer className='xl:h-[25rem] md:h-[25rem] xl:w-1/3 md:w-[49rem] w-[26rem] h-[24rem] md:rounded-2xl -z-0' center={[43.64539538572998, -79.3942865099739]} zoom={13}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[43.64539538572998, -79.3942865099739]}>
                        </Marker>
                    </MapContainer>
                </div>

                {/* second square */}
                <div id='2' className="flex xl:flex-row md:flex-col 2xl:mx-auto flex-col items-center xl:w-[71rem] md:w-[49rem] xl:h-[25rem] xl:mx-[150px] md:mx-5 xl:mt-[50px] md:mt-[70px] md:rounded-2xl xl:gap-x-7 mt-[50px] md:gap-y-7 overflow-hidden">
                    <div className='overflow-hidden xl:w-[71rem] md:w-[64rem] xl:mt-0 md:mt-[500px] w-[26rem] h-[22rem] absolute'>
                        <svg className='absolute xl:mt-10 xl:ml-[420px] md:ml-[100px]' width="584" height="292" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stopColor="#5D0202" stopOpacity="0" offset="0%" /><stop stopColor="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle transform="matrix(1 0 0 -1 0 292)" cx="146" cy="146" r="146" /><circle transform="matrix(0 1 1 0 292 -292)" cx="438" cy="146" r="146" /></g></svg>
                    </div>
                    <MapContainer className='md:h-[25rem] xl:w-1/3 md:w-[49rem] md:rounded-2xl w-[26rem] h-[24rem] -z-0' center={[-31.719949201839654, 152.68318368874083]} zoom={11}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[-31.719949201839654, 152.68318368874083]}>
                        </Marker>
                    </MapContainer>

                    <div className='flex items-center justify-center md:text-left xl:justify-center md:justify-start xl:text-left text-center bg-dmp-grid xl:w-2/3 md:w-[49rem] w-[26rem] md:h-[25rem] h-[22rem] md:rounded-2xl'>
                        <div className='md:ml-24 xl:ml-0 flex flex-col gap-y-8'>
                            <div className='text-dmp-peach text-[48px] font-medium leading-[50px]'>Australia</div>
                            <div className='flex md:flex-row flex-col gap-x-28 gap-y-7'>
                                <div>
                                    <div className='font-medium'>Designo AU Office</div>
                                    <div>19 Balonne Street</div>
                                    <div>New South Wales 2443</div>
                                </div>
                                <div>
                                    <div className='font-medium'>Contact</div>
                                    <div>P : (02) 6720 9092</div>
                                    <div>M : contact@designo.au</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* third square */}
                <div id='3' className="flex xl:flex-row md:flex-col-reverse 2xl:mx-auto flex-col-reverse items-center xl:w-[71rem] md:w-[49rem] xl:h-[25rem] xl:mx-[150px] md:mx-5 xl:mt-[50px] md:mt-[70px] md:rounded-2xl xl:gap-x-7 md:gap-y-7 mt-[50px] overflow-hidden">
                    <div className='overflow-hidden md:w-[40rem] w-[26rem] h-[22rem] absolute'>
                        <svg className='absolute mt-10 ml-5' width="584" height="292" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="50%" x2="100%" y2="50%" id="a"><stop stop-color="#5D0202" stopOpacity="0" offset="0%" /><stop stop-color="#5D0202" stopOpacity=".498" offset="100%" /></linearGradient></defs><g fill="url(#a)" fillRule="evenodd" opacity=".06"><circle transform="matrix(1 0 0 -1 0 292)" cx="146" cy="146" r="146" /><circle transform="matrix(0 1 1 0 292 -292)" cx="438" cy="146" r="146" /></g></svg>
                    </div>
                    <div className='flex items-center md:justify-start justify-center md:text-left text-center bg-dmp-grid xl:w-2/3 md:w-[49rem] w-[26rem] h-[25rem] md:rounded-2xl'>
                        <div className='md:ml-24 flex flex-col gap-y-8'>
                            <div className='text-dmp-peach text-[48px] font-medium leading-[50px]'>Reino Unido</div>
                            <div className='flex md:flex-row flex-col gap-y-7 gap-x-28'>
                                <div>
                                    <div className='font-medium'>Designo UK Office</div>
                                    <div>13 Colorado Way</div>
                                    <div>Rhyd-y-fro SA8 9GA</div>
                                </div>
                                <div>
                                    <div className='font-medium'>Contact</div>
                                    <div>P : 078 3115 1400</div>
                                    <div>M : contact@designo.uk</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <MapContainer className='md:h-[25rem] xl:w-1/3 md:w-[49rem] md:rounded-2xl w-[26rem] h-[24rem] -z-0' center={[51.939527984813985, -3.88140769903196]} zoom={14}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.939527984813985, -3.88140769903196]}>
                        </Marker>
                    </MapContainer>
                </div>
            </div>

            <HomeFourthSection />
            <Footer />
            <ScrollRestoration />
        </>
    )
}

export default Location