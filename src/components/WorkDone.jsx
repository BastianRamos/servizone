import {
    WorkImages,
    Section
} from "../components"


export const WorkDone = ({ isMobile }) => {
    return (
        <section
            aria-label="Imagenes de trabajos realizados"
            id="trabajos"
            style={{ paddingTop: 10 }}
        >
            <Section
                key="trabajos"
                texto="Algunos Trabajos"
                colorFondo="#FF621E"
                linkTo='trabajos'
            />
            <WorkImages isMobile={isMobile} />
        </section>
    )
}
