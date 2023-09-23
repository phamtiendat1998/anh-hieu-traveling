import { Variants } from "framer-motion";

export const opacityVariants: Variants = {
    hide: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            duration: 2,
        },
    },
};