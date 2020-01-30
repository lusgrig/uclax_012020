import React, {useState} from 'react';
import './Tabbed.scss';

const tabItems = [
    {
        image:'../img/MissionVision/about.jpg',
        title: 'about',
        text: 'This is about'
    },
    {
        image:'../img/MissionVision/mission.jpg',
        title: 'mission',
        text: 'This is our mission'
    },
    {
        image:'../img/MissionVision/vision.jpg',
        title: 'vision',
        text: 'This is out vision'
    },
];


const Tabbed = () => {
    const [currentTab, setCurrentTab] = useState(tabItems[0]);

    const isAbout = (currentTab.title === 'about') ?'tab active':'tab';
    const isMission = (currentTab.title === 'mission') ?'tab active':'tab';
    const isVision = (currentTab.title === 'vision') ?'tab active':'tab';


    return(
        <div className={'Tabbed'}>
            <div className="tabs">
                <div onClick={()=> {setCurrentTab(tabItems[0])}} className = {isAbout}>About </div>
                <div onClick={()=> {setCurrentTab(tabItems[1])}} className = {isMission}>Mission</div>
                <div onClick={()=> {setCurrentTab(tabItems[2])}} className = {isVision}>Vision</div>
            </div>
            <div className="content">
                <img src={currentTab.image} alt=""/>
                <h2>{currentTab.title}</h2>
                <p>{currentTab.text}</p>
                
             </div>
        </div>
    )
}

export default Tabbed;
