import CardWebDesign from "./CardWebDesign"
import web1 from '../../../assets/web-design/desktop/image-express.jpg'
import web2 from '../../../assets/web-design/desktop/image-transfer.jpg'
import web3 from '../../../assets/web-design/desktop/image-photon.jpg'
import web4 from '../../../assets/web-design/desktop/image-builder.jpg'
import web5 from '../../../assets/web-design/desktop/image-blogr.jpg'
import web6 from '../../../assets/web-design/desktop/image-camp.jpg'

const GridWebDesign = () => {
  return (
    <div className="flex flex-wrap xl:w-[71rem] md:w-[49rem] xl:mx-auto md:mx-5 mt-36 xl:gap-y-28 md:gap-y-56 xl:gap-x-7 gap-y-16">
        <CardWebDesign src={web1} title="EXPRESS" description="Un sitio web de envíos de varios transportistas para empresas de comercio electrónico"/>
        <CardWebDesign src={web2} title="TRANSFER" description="Sitio para transferencias de dinero de bajo costo y envío de dinero en segundos" />
        <CardWebDesign src={web3} title="PHOTON" description="Un reproductor de música de última generación con audio de alta resolución y efectos DSP" />
        <CardWebDesign src={web4} title="BUILDER" description="Conecta a los usuarios con contratistas locales según su ubicación" />
        <CardWebDesign src={web5} title="BLOGR" description="Blogr es una plataforma para crear un blog o publicación en línea" />
        <CardWebDesign src={web6} title="CAMP" description="Obtenga capacitación experta en codificación, datos, diseño y marketing digital" />
    </div>
  )
}

export default GridWebDesign