
import { spline } from '../helper/helper';
import SimplexNoise from 'simplex-noise'

import { useEffect, useMemo, useState } from 'react';


const root = document.documentElement;


export const useSlime =()=>{

    const [path_d, setPath_d] = useState("")
    // let path_d = ""
    
    const [isAnimating, setIsAnimating] = useState(true)
    const simplex = new SimplexNoise()
    const [noiseStep, setNoiseStep] = useState(0.001);
    // const [hueNoiseOffset, setHueNoiseOffset] = useState(0)

    let hueNoiseOffset = 0;

    // const setNoiseStep =(step)=>{
    //     return step
    // }

    // const noiseStep = useMemo(() => setNoiseStep(0.001), []);
    const points = useMemo(() => createPoints(), [noiseStep]);


    function animate() {
        if(isAnimating){
            
            // console.log(spline(points, 1, true));
            setPath_d(spline(points, 1, true))
            // path_d = spline(points, 1, true)

            for (let i = 0; i < points.length; i++) {
                const point = points[i];

                // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
                const nX = simplex.noise2D(point.noiseOffsetX, point.noiseOffsetX);
                const nY = simplex.noise2D(point.noiseOffsetY, point.noiseOffsetY);
                // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
                const x = map(nX, -1, 1, point.originX - 20, point.originX + 20);
                const y = map(nY, -1, 1, point.originY - 20, point.originY + 20);

                // update the point's current coordinates
                point.x = x;
                point.y = y;

                // progress the point's x, y values through "time"
                point.noiseOffsetX += noiseStep;
                point.noiseOffsetY += noiseStep;

            }

            // const hueNoise = noise(hueNoiseOffset, hueNoiseOffset);
            const hueNoise = simplex.noise2D(hueNoiseOffset, hueNoiseOffset);

            const hue = map(hueNoise, -1, 1, 0, 360);


            root.style.setProperty("--startColor", `hsl(${hue}, 100%, 75%)`);
            root.style.setProperty("--stopColor", `hsl(${hue + 60}, 100%, 75%)`);
            

            hueNoiseOffset += noiseStep / 6

            if(isAnimating){
                requestAnimationFrame(animate);
            }
        }
    }

    useEffect(() => {
        if(isAnimating){
            animate(noiseStep)
        }

        return ()=> setIsAnimating(false)
        
    }, [isAnimating]);
    

    function map(n, start1, end1, start2, end2) {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    
    function createPoints() {
        const points = [];
        // how many points do we need
        const numPoints = 8;
        // used to equally space each point around the circle
        const angleStep = (Math.PI * 2) / numPoints;
        // the radius of the circle
        const rad = 75;

        for (let i = 1; i <= numPoints; i++) {
            // x & y coordinates of the current point
            const theta = i * angleStep;

            const x = 100 + Math.cos(theta) * rad;
            const y = 100 + Math.sin(theta) * rad;

            // store the point's position
            points.push({
            x: x,
            y: y,
            // we need to keep a reference to the point's original point for when we modulate the values later
            originX: x,
            originY: y,
            // more on this in a moment!
            noiseOffsetX: Math.random() * 1000,
            noiseOffsetY: Math.random() * 1000
            });
        }

        return points;
    }


   

 
    const addNoise =()=>{
        setNoiseStep(0.01)
        // console.log('BBBBB');
    }
    const resetNoise =()=>{
        setNoiseStep(0.001)
        // console.log('AAAAA');
    }

    const slime = (
        <div className="svgContainer flex-row-center-center">
            {isAnimating && 
                <svg id="slime_svg" onMouseOver={addNoise} onMouseLeave={resetNoise} viewBox="0 0 200 200">
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop id="gradientStop1" offset="0%" stopColor="var(--startColor)" />
                            <stop id="gradientStop2 " offset="100%" stopColor="var(--stopColor)" />
                        </linearGradient>
                    </defs>
                    <path d={path_d} fill="url('#gradient')"></path>
                  
                </svg>
            }
        </div>
    )

    return { slime }
}