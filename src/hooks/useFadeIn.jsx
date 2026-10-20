import { useEffect, useRef, useState } from "react";

function useFadeIn(threshold = 0.2) {
    const ref = useRef(null);
    const [visivel, setVisivel] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisivel(entry.isIntersecting);
        }, { threshold });

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [threshold]);

    const classes = `transition-all duration-700 ease-out motion-reduce:transition-none ${
        visivel ? "opacity-100 translate-y-0" : "opacity-0 translate-y-s30"
    }`;

    return [ref, classes];
}

export default useFadeIn;