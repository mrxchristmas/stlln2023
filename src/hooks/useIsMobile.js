import { useEffect, useState } from "react";



export const useIsMobile = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [isMobile, setIsMobile] = useState(false);


    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    useEffect(() => {
        if(width <= 768){
            setIsMobile(true)
        }else{
            setIsMobile(false)
        }
    }, [width]);

    return { isMobile } 

    
}