import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Wrapper() {
    const data = [
        {
            cover: <FontAwesomeIcon class='fa-solid fa-truck-fast' />,
            title: "Worldwide Delivery",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-id-card'></i>,
            title: "Safe Payment",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-shield'></i>,
            title: "Shop With Confidence ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
        {
            cover: <i class='fa-solid fa-headset'></i>,
            title: "24/7 Support ",
            decs: "We offer competitive prices on our 100 million plus product any range.",
        },
    ]
    return (

        <>

            <section className='flash wrapper bg-grayy'>
                <div className='container'>
                    <div className='heading f_flex'>
                        <h1>Features</h1>
                    </div>
                    <div className="grid2">
                        {data.map((val, index) => {
                            return (
                                <div className='product' key={index}>
                                    <div className='img icon-circle'>
                                        <i>{val.cover}</i>
                                    </div>
                                    <h3>{val.title}</h3>
                                    <p>{val.decs}</p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </section>
        </>





    );
}

export default Wrapper;
