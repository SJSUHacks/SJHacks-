
"use client"
{/** This is a placeholder component for any sections we haven't completed. Yes it's kind of overkill, but its cute! */}

import {useState, useEffect, useRef} from 'react'
import Image from "next/image"

type Particle = {
    id: number
    x: number
    y: number
    size: number
    color: string
    delay: number
}
export default function Placeholder() {
    const [particles, setParticles] = useState<Particle[]>([]); 
    const idRef = useRef(0)

    {/** Emits particles every 100ms */} 
    useEffect(() => {

        const interval = setInterval(() => {
            {/** Generating an array of 5 particles */}

            const newParticles: Particle[] = Array.from({ length: 5 }).map(() => {             
            const randomDistance = Math.random() * 100 + 50
           
            const randomSize = Math.random() * 20 + 10
            const randomAngleY = -(Math.random() * 20 + 80)
            const randomAngleX = Math.random() * 360

     
            const x = randomDistance * Math.cos((randomAngleX * Math.PI) / 180)
            const y = randomDistance * Math.sin((randomAngleY * Math.PI) / 180)

            const color = Math.random() > 0.5 ? "#303fdb" : "#7a85f5";
            const delay = Math.random() * 0.5

            return {
                id: idRef.current++,
                x,
                y,
                size: randomSize,
                color,
                delay,
            }
        })
        
        {/** Saving generated array */}
        setParticles((prev) => [...prev, ...newParticles])

        }, 1000)

        {/** Clearing  */}
        return () => clearInterval(interval)

    }, []);

    useEffect(() => {
        const cleanup = setInterval(() => {
            setParticles((prev) =>
                prev.filter((p) => p.id > idRef.current - 200))

        }, 1000)
        return () => clearInterval(cleanup); 
    });
    return(
       
        <div className="relative w-full h-auto overflow-visible flex items-center justify-center">
             <div className="absolute z-10">
                 <Image 
                    src="/assets/mascot_placeholder.png" 
                    alt="sjhacks mascot" 
                    width={100} 
                    height={50}
                    className="object-contain animate-mascot"
                    />
           </div>
             {particles.map((p) => {
                return (    
                <div
                    key={p.id}
                    className={`absolute rounded-full animate-particle z-0`}
                    style={{
                    
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    left: `calc(50% - ${p.size / 2}px)`, 
                    top: `calc(50% - ${p.size / 2}px)`,
                    
                    backgroundColor: p.color,
                    animationDelay: `${p.delay}s`,
                    "--x": `${p.x}px`,
                    "--y": `${p.y}px`
                    } as React.CSSProperties}
                />
                );
            })}
           
    </div>
    
    );
}