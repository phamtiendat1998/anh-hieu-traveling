import { Variants } from "framer-motion";

export const translateYVariants: Variants = {
    hide: {
        opacity: 0,
        transform: "translateY(40px)"
    },
    show: {
        opacity: 1,
        transform: "translateY(0px)",
        transition: {
            duration: 1,
            staggerChildren: 0.2,
            // delay: 0.3
        },
    },
};

export const translateYVariantsItem = {
    hide: { opacity: 0, transform: "translateY(25px)" },
    show: { opacity: 1, transform: "translateY(0px)" }
}