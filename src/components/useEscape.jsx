import { useEffect } from "react";

const useEscape = (escape) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) 
                escape();
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [escape]);
}

export default useEscape