import CardWebDesign from "../WebDesign/CardWebDesign"
import app1 from '../../../assets/app-design/desktop/image-airfilter.jpg'
import app2 from '../../../assets/app-design/desktop/image-eyecam.jpg'
import app3 from '../../../assets/app-design/desktop/image-faceit.jpg'
import app4 from '../../../assets/app-design/desktop/image-todo.jpg'
import app5 from '../../../assets/app-design/desktop/image-loopstudios.jpg'

const   GridAppDesign = () => {
  return (
    <div className="flex flex-wrap xl:w-[71rem] xl:mx-auto md:w-[49rem] md:mx-5 mt-32 xl:gap-y-28 xl:gap-x-7 md:gap-y-56 gap-y-16">
        <CardWebDesign src={app1} title="AIRFILTER" description="Resolviendo el problema de la mala calidad del aire interior filtrando el aire"/>
        <CardWebDesign src={app2} title="EYECAM" description="Producto que te permite editar tus fotos y videos favoritos en cualquier momento"/>
        <CardWebDesign src={app3}  title="FACEIT" description="Conozca a su superestrella favorita de Internet con la aplicación faceit"/>
        <CardWebDesign src={app4} title="TODO" description="A todo app that features cloud sync with light and dark mode"/>
        <CardWebDesign src={app5} title="LOOPSTUDIOS" description="A VR experience app made for Loopstudios" />
    </div>
  )
}

export default GridAppDesign