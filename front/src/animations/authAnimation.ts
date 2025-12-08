import { Flip } from "gsap/all";


const addHiddenScroll = () => document.body.classList.add("no-scroll")
const rmHiddenScroll = () => document.body.classList.remove("no-scroll")

export const authAnimation = (container: HTMLElement) => {
    const elems = container.children;
    const state = Flip.getState(elems)
    if (container.classList.contains("flex-row")) {
        container.classList.replace("flex-row", "flex-row-reverse");
    }
    Flip.from(state, {
        duration: 1.2,
        ease: "power1.inOut",
        // scale: true,
        // stagger: 0.1,
        onStart: addHiddenScroll,
        onComplete: rmHiddenScroll
    });
};
