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
                texto="Trabajos Realizados"
                colorFondo="#FF621E"
            />
            <WorkImages isMobile={isMobile} />
        </section>
    )
}
