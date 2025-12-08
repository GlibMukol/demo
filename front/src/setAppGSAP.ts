import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { GSDevTools } from "gsap/GSDevTools";
import { Flip } from "gsap/all";


const DEV_MODE = import.meta.env.MODE;

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);


// GSDevTools.create()

DEV_MODE === "development"
    && (
        gsap.registerPlugin(useGSAP, GSDevTools),
        GSDevTools.create()
    );