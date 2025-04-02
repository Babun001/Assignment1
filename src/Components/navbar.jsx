import React, { useState } from "react";
import tabsData from "../Data/amenitiesConfig";
import icon1 from '../Icons/icon1.webp';
import icon2 from '../Icons/icon2.webp';
import icon3 from '../Icons/icon2.webp';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Patio");


    const tabIcons = {
        Patio: icon1,
        Azura: icon2,
        Panorama: icon3
    };



    return (
        <div className="max-w-4xl mx-auto p-6">

            <div className="flex justify-center space-x-4 border-b pb-2" style={{ margin: "0px 50px" }}>
                {Object.keys(tabsData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${activeTab === tab ? "text-blue-600" : "text-gray-600"
                            }`}
                        style={{
                            margin: "5px",
                            border: "none",
                            borderRadius: "15px",
                            cursor: "pointer",
                            position: "relative",
                            boxShadow: activeTab === tab ? "0px 2px 2px rgba(0, 0, 0, 0.8)" : "none",
                            transition: "box-shadow 0.3s ease-in-out",
                        }}
                    >
                        <img
                            src={tabIcons[tab]}
                            alt="icons"
                            style={{
                                width: "120px",
                                height: "50px",
                            }}
                        />
                    </button>
                ))}
            </div>

            <div className="mt-6 transition-opacity duration-500 ease-in-out opacity-100"
                style={{ display: "flex", margin: "25px" }}>

                <img
                    src={tabsData[activeTab].image}
                    alt={activeTab}
                    className="w-full h-60 object-cover rounded-lg mt-4"
                    style={{
                        width: "70vh",
                        // transition: "opacity 0.5s ease-in-out",
                    }}
                />

                <div style={{ margin: "20px" }}>
                    <h2 className="text-2xl font-light"
                        style={{
                            fontWeight: "400",
                            fontFamily: "Khand, Sans-serif",
                            color: "#54595f",
                            margin:"30px 0px"
                        }}
                    >
                        {tabsData[activeTab].title}
                    </h2>

                    <p className="mt-2 text-gray-700"
                        style={{
                            color: "#7a7a7a",
                            lineHeight: "25px",
                            fontSize: "1rem",
                            margin:"30px 0px"
                        }}
                    >
                        {tabsData[activeTab].description}
                    </p>

                    <div className="row gx-2" >
                        {tabsData[activeTab].amenities.map((amenity, index) => (
                            <div className="col-md-3 col-6 text-center" style={{border:"0.5px solid #204a63"}} key={index} >
                                <img
                                    src={amenity.image}
                                    alt={`${amenity.name} Icon`}
                                    className="nv-tx-mg"
                                    style={{
                                        width:"45px",
                                        margin:"20px"
                                    }}
                                />
                                <p style={{color:"#204a63",fontFamily: "Khand, Sans-serif",fontSize:"0.8rem",display:"flex", justifyContent:"center", alignContent:"center"}} className="man-tx">{amenity.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
