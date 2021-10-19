import { useEffect } from "react";

const useOutsideClose = (outside, obj) => {
    useEffect(() => {
        const OutsideClick = (e) => {
            if (obj.current.contains(e.target)){
                e.stopPropagation()
            }else{
                outside()
                console.log('qwe');
            }
        };
        window.addEventListener('click', OutsideClick);

        return () => {
            window.removeEventListener('click', OutsideClick);
        };
    }, [outside,obj]);
}

export default useOutsideClose