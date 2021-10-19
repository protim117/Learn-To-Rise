import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="row row-cols-lg-2 row-cols-1 g-5">
                <div className="col">
                    <img src="https://cdn01.alison-static.net/careers/career/psychiatrist.jpg" style={{width:'100%'}} alt="" />
                </div>
                <div className="col py-5">
                    <h5 className="text-success">WHO WE ARE</h5>
                    <h1 className="text-secondary">Tell us and we shall find you a way.</h1>
                    <div className="row row-cols-lg-2 row-cols-1 g-4">
                        <div className="col"><ul>
                        <li>Anxiety and Depression</li>
                        <li>Relationships Issues</li>
                        <li>Relationships Substance Abuse</li>
                    </ul></div>
                        <div className="col"><ul>
                        <li>Trauma/Abuse/PTSD</li>
                        <li>Phase of Life Transitions</li>
                        <li>Parenting Issues</li>
                    </ul></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;