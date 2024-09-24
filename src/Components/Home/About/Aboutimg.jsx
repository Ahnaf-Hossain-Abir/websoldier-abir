import Image from 'next/image';
import React from 'react';
import abir from "../../../../public/abir.jpg"
const Aboutimg = () => {
    return (
        <div>
            <Image
            src={abir}
            alt='abir'
            width={400}
            height={400}
            className='rounded-3xl'
            />
        </div>
    );
};

export default Aboutimg;