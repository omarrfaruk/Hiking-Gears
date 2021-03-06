import React from 'react';
import banner1 from '../../img/hiking5.png';
const Banner = () => {
    return (
        <>
            <div style=
                {{
                    backgroundImage: `url(${banner1})`,
                    height: '80vh',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',

                }}
            >
                <div
                    style={{ marginLeft: '15%', paddingTop: '3%' }}
                    className='style'
                >
                    <h1
                        style={{ color: 'gray' }}
                    >Never Stop</h1>
                    <h1
                        style={{ fontWeight: 'bold', color: 'rgb(5, 51, 83)' }}
                        className='display-2'>Exploring
                    </h1>
                    <p className='w-50 mt-4 text-black'>Stock the latest lightweight backpacking equipment and hiking gear from top brands like Western Mountaineering, MSR, Therm-a-Rest, Osprey, and Hilleberg to make your next backcountry trip easier and faster. Not quite looking to hike the PCT? Shop our huge selection of luxury car camping gear to outfit </p>
                </div>
            </div>

        </>
    );
};

export default Banner;