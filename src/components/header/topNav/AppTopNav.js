import React from 'react';
import './AppTopNav.css';

function AppTopNav() {
    return (
        <div class="page-header">
            <div class="btn-group btn-group-lg top-nav" role="group">
                <a alt="" href="/content" class="btn-who btn lg" role="button">!who:</a>
                <a alt="" href="/what" class="btn-what btn lg" role="button">!what:</a>
                <a alt="" href="/why" class="btn-why btn lg" role="button">!why:</a>
                <a alt="" href="/how" class="btn-how btn lg" role="button">!how:</a>
                <a alt="" href="/where" class="btn-where btn lg" role="button">!where:</a>
            </div>
        </div>
    );
};

export default AppTopNav;