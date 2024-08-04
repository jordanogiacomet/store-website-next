import React from "react";
import waves from "../../../public/waves.svg";
import Image from "next/image";


const Divider: React.FC = () => {
    return (
        <div className="relative h-20 z-10"> {/* Set a fixed height and higher z-index */}
            <Image 
                className='absolute z-[-1] top-0 left-0 w-full h-full' 
                src={waves} 
                alt="Waves divider" 
                width={0} 
                height={0}
            />
        </div>
    );
};

export default Divider;