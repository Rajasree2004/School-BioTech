import React from 'react';
import './Marquee.css';
import cognizantImage from '../Assets/agshealth.png';
import wiproImage from '../Assets/wipropng.png';
import mindtreeImage from '../Assets/biocon.png';
import ciscoImage from '../Assets/lifecell.png';
import zohoImage from '../Assets/omics.png';
import accentureImage from '../Assets/pulses.png';
import adobeImage from '../Assets/saksin.png';
import avasoftImage from '../Assets/tcs.png';
import goldImage from '../Assets/gold.png';
import NGImage from '../Assets/newgenesis.png';
import NewGImage from '../Assets/newgen.png';
import kaarImage from '../Assets/kaar.png';
import kaniniImage from '../Assets/kanini.png';
import intellectImage from '../Assets/intellect.png';
import lucidImage from '../Assets/lucid.png';
import euroImage from '../Assets/eurofins.png';
import multicorewareImage from '../Assets/multicoreware.png';
import peninsularresearchoperationImage from '../Assets/peninsularresearchoperation.png';
import presidioImage from '../Assets/presidio.png';
import prodaptImage from '../Assets/prodapt.png';
import saskenImage from '../Assets/sasken.png';
import siriusImage from '../Assets/sirius.png';
import softuraImage from '../Assets/softura.png';
import tataelxsiImage from '../Assets/tataelxsi.png';
import thoughtworksImage from '../Assets/thoughtworks.png';
import tigeranalyticsImage from '../Assets/tigeranalytics.png';
import zelfstudieImage from '../Assets/zelfstudie.png';
import foodhubImage from '../Assets/foodhub.png';

const MarqueeComponent = () => {
    return (
        <div className="marquee-container">
            <h2 className="marquee-heading" style={{fontSize:'3rem'}}>Our Reputable Recruiters</h2>
            <div className="marquee-content">
                <div className="marquee-item">
                    <img src={cognizantImage} alt="Cognizant" />
                </div>
                <div className="marquee-item">
                    <img src={wiproImage} alt="Wipro" />
                </div>
                <div className="marquee-item">
                    <img src={mindtreeImage} alt="Mindtree" />
                </div>
                <div className="marquee-item">
                    <img src={ciscoImage} alt="Cisco" />
                </div>
                <div className="marquee-item">
                    <img src={zohoImage} alt="Zoho" />
                </div>
                <div className="marquee-item">
                    <img src={accentureImage} alt="Accenture" />
                </div>
                <div className="marquee-item">
                    <img src={adobeImage} alt="Adobe" />
                </div>
                <div className="marquee-item">
                    <img src={goldImage} alt="Goldman Sachs" />
                </div>
                <div className="marquee-item">
                    <img src={NGImage} alt="New Genesis" />
                </div>
                <div className="marquee-item">
                    <img src={NewGImage} alt="NewGen" />
                </div>
                <div className="marquee-item">
                    <img src={kaarImage} alt="Laar" />
                </div>
                <div className="marquee-item">
                    <img src={kaniniImage} alt="Kanini" />
                </div>
                <div className="marquee-item">
                    <img src={intellectImage} alt="Intellect" />
                </div>
                <div className="marquee-item">
                    <img src={lucidImage} alt="Lucid" />
                </div>
                <div className="marquee-item">
                    <img src={euroImage} alt="Eurofins" />
                </div>
                <div className="marquee-item">
                    <img src={multicorewareImage} alt="Multicoreware" />
                </div>
                <div className="marquee-item">
                    <img src={peninsularresearchoperationImage} alt="Peninsular Research Operation" />
                </div>
                <div className="marquee-item">
                    <img src={presidioImage} alt="Presidio" />
                </div>
                <div className="marquee-item">
                    <img src={prodaptImage} alt="Prodapt" />
                </div>
                <div className="marquee-item">
                    <img src={saskenImage} alt="Sasken" />
                </div>
                <div className="marquee-item">
                    <img src={siriusImage} alt="Sirius" />
                </div>
                <div className="marquee-item">
                    <img src={softuraImage} alt="Softura" />
                </div>
                <div className="marquee-item">
                    <img src={tataelxsiImage} alt="Tata Elxsi" />
                </div>
                <div className="marquee-item">
                    <img src={thoughtworksImage} alt="Thoughtworks" />
                </div>
                <div className="marquee-item">
                    <img src={tigeranalyticsImage} alt="Tiger Analytics" />
                </div>
                <div className="marquee-item">
                    <img src={zelfstudieImage} alt="Zelfstudie" />
                </div>
                <div className="marquee-item">
                    <img src={foodhubImage} alt="Foodhub" />
                </div>
                <div className="marquee-item">
                    <img src={avasoftImage} alt="Avasoft" />
                </div>
            </div>
        </div>
    );
};

export default MarqueeComponent;
