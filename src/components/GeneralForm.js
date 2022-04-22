import React from 'react';
import './GeneralForm.css'

export default function GeneralForm(props) {
    return (
        <div>
            <form>
                <div className="general-card">
                    Name
                    <input className="general-input"/>
                    Email
                    <input className="general-input"/>
                    Address
                    <input className="general-input"/>
                    Phone Number
                    <input className="general-input"/>
                </div>
            </form>
        </div>
    )
}