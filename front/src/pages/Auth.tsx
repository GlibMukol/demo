import { useRef } from "react"
import SignIn from "../components/auth/signin/SignIn"
import HDirection from "../components/ui/containers/HDirection"
import VDirection from "../components/ui/containers/VDirection"
import { useGSAP } from "@gsap/react"
import { authAnimation } from "../animations/authAnimation"
import { useOnWindowLoad } from "../common/hooks/onWindowLoad"

const Auth = () => {
    const container = useRef<HTMLDivElement>(null);
    const { contextSafe } = useGSAP({ scope: container })
    const startAnimation = contextSafe(() => {
        container && authAnimation(container.current as HTMLElement)
    })
    useOnWindowLoad(startAnimation);


    return (
        <>
            <HDirection ref={container}>
                <VDirection styles="bg-red-700 z-1">
                    <></>
                </VDirection>
                <VDirection >
                    <SignIn />
                </VDirection>
            </HDirection>
        </>
    )
}

export default Auth