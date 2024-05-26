import { Carrousel } from "./Carrousel"
import { Section } from "./Section"

export const WorkDone = () => {
    return (
        <>
            <Section
                key='trabajos'
                texto='Trabajos Realizados'
                colorFondo="#FF621E"
            />
            <Carrousel/>
        </>
    )
}
