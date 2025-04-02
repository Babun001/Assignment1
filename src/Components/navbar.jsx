import React, { useState } from "react";
import img1 from '../Icons/img1.webp';
import img2 from '../Icons/img2.webp';
import img3 from '../Icons/img3.webp';
import icon1 from '../Icons/icon1.webp';
import icon2 from '../Icons/icon2.webp';
import icon3 from '../Icons/icon2.webp';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("Patio");

    const tabsData = {
        Patio: {
            title: "PATIO (GROUND FLOOR)",
            description: "Patio is designed for tranquility and leisure with natural landscapes, wellness areas, and various activity zones for all ages.",
            amenities: ["Mandir", "Kids' Play Area", "Jogging Track", "Yoga Deck", "Natural Water Body", "Elevated Walking Area", "Adda Zone", "Fishing Deck"],
            image: img1,
        },
        Azura: {
            title: "AZURA",
            description: "Azura offers a luxurious experience with premium facilities and modern amenities.",
            amenities: ["Infinity Pool", "Clubhouse", "Sky Lounge", "Fitness Center"],
            image: img2,
        },
        Panorama: {
            title: "PANORAMA",
            description: "Panorama provides breathtaking views with high-rise living and exclusive services.",
            amenities: ["Rooftop Garden", "Panoramic View", "Private Dining", "Business Lounge"],
            image: img3,
        },
    };

    const tabIcons = {
        Patio: icon1,
        Azura: icon2,
        Panorama: icon3
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Tab Buttons */}
            <div className="flex justify-center space-x-4 border-b pb-2" style={{ margin: "0px 50px" }}>
                {Object.keys(tabsData).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
                            activeTab === tab ? "text-blue-600" : "text-gray-600"
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



            {/* Tab Content */}
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
                        }}
                    >
                        {tabsData[activeTab].title}
                    </h2>

                    <p className="mt-2 text-gray-700"
                        style={{
                            color: "#7a7a7a",
                            lineHeight: "25px",
                            fontSize: "1rem",
                        }}
                    >
                        {tabsData[activeTab].description}
                    </p>

                    {/* Amenities List */}
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        {tabsData[activeTab].amenities.map((item, index) => (
                            <div key={index} className="flex items-center space-x-2 text-gray-800">
                                <span>✅</span> <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tabs;
