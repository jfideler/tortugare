import React from 'react';
import './appTopNav.css';
import { Link } from 'react-router-dom'

const tortugaUrl = 'http://www.tortugadesign.com/#/';
function AppTopNav() {
    return (
        <div class="page-header">
            <div class="btn-group btn-group-lg top-nav" role="group">
                <Link to="/content" class="btn-who btn lg" role="button">!who:</Link>
                <a class="btn-what btn lg" role="button" href = {`${tortugaUrl}what`}>!what:</a>
                <a class="btn-why btn lg" role="button" href={`${tortugaUrl}why`}>!why:</a>
                <a class="btn-how btn lg" role="button" href={`${tortugaUrl}how`}>!how:</a>
                <Link to="/where" class="btn-where btn lg" role="button">!where:</Link>
            </div>
        </div>
    );
};

export default AppTopNav;