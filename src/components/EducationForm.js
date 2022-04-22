import React from 'react';
import './EducationFrom.css'

export default function EducationForm(props) {
    return (
        <div>
            <form>
                <div className="education-card">
                    Institution
                    <input className="education-input"/>
                    Year Started
                    <input className="education-input"/>
                    Certification
                    <input className="education-input"/>
                    Completion Date
                    <input className="education-input"/>
                </div>
            </form>
        </div>
    )
}