import { useState } from "react";

export const Tabs = ({ tabs }) => {
    // const tabs = ["Description", "Reviews"];
    const [active, setActiveTab] = useState(0);
    const handleClick = (index) => {
        setActiveTab(index);
    }
    return (
        <div className="tabs-container">
            <div className="tabs-header">
                {
                    tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`tab ${active === index ? 'active' : ''}`}
                            onClick={()=>handleClick(index)}
                        >
                            <h6>{tab.label}</h6>
                        </div>
                    ))
                }
            </div>
            <div className="tabs-content">
                {tabs[active].content}
            </div>
        </div>
    )
}
