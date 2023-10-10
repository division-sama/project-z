import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SketchPicker } from 'react-color';
import './CustomizePage2.css';

function CustomizePage2(props) {
    const Location = useLocation();

    useEffect(() => {
        if (props.clickhandler) {
            const str = Location.pathname.replace(/^\/+/, "");
            props.clickhandler(str);
        }
    }, [Location.pathname]);

    const [buttons, setButtons] = useState([
        { id: 0, bgcolor: '#0000B7', color:'#ffffff', label: 'Header BG' },
        { id: 1, bgcolor: '#0000B7', color:'#ffffff', label: 'Header Text' },
        { id: 2, bgcolor: '#0000B7', color:'#ffffff', label: 'Main BG' },    
        { id: 3, bgcolor: '#0000B7', color:'#ffffff', label: 'Main Text' },
    ]); 
    const [activeButtonIndex, setActiveButtonIndex] = useState(null);
    const [showPicker, setShowPicker] = useState(false);
    const [tempBgColor, setTempBgColor] = useState();
    const [tempTextColor, setTempTextColor] = useState();

    const handleButtonClick = async (index) => {
        setActiveButtonIndex(index);
        setShowPicker(true);
        const updatedButtons = [...buttons];
        setTempBgColor(updatedButtons[index].bgcolor);
        setTempTextColor(updatedButtons[index].color);
    };

    const handleColorChange = (newColor) => {
        if (activeButtonIndex !== null) {
            const updatedButtons = [...buttons];
            updatedButtons[activeButtonIndex].bgcolor = newColor.hex;
            var r = newColor.rgb.r;
            var g = newColor.rgb.g;
            var b = newColor.rgb.b;
            var color = Math.round(((parseInt(r) * 299) + (parseInt(g) * 587) + (parseInt(b) * 114)) / 1000); 
            var textColor = (color > 125) ? '#000' : '#fff';
            console.log(newColor.hex+textColor)
            updatedButtons[activeButtonIndex].color = textColor;
            setButtons(updatedButtons);
        }
    };

    const handleCancel = () => {
        if (activeButtonIndex !== null) {
            const updatedButtons = [...buttons];
            updatedButtons[activeButtonIndex].bgcolor = tempBgColor;
            updatedButtons[activeButtonIndex].color = tempTextColor;
            setButtons(updatedButtons);
        }
        setShowPicker(false);
        setActiveButtonIndex(null);
    };
    
    const handleSave = () => {
        setShowPicker(false);
    };

    return (
        <div className="container">
            {buttons.map((button, index) => (
                <button key={button.id}
                    style={{
                        backgroundColor: button.bgcolor,
                        color: button.color,
                        padding: '0px 20px',
                        border: 'none',
                    }}
                    onClick={() => handleButtonClick(index)}
                >
                    {button.label}
                </button>
            ))}
            {showPicker && (
                <div>
                    <SketchPicker color={buttons[activeButtonIndex].color} onChange={handleColorChange} />
                    <button id="cancelBtn" onClick={handleCancel}>Cancel</button>
                    <button id="saveBtn" onClick={handleSave}>Save</button>
                </div>
            )}
        </div>
    )
}

export default CustomizePage2;