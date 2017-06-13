// ==UserScript==
// @name         AntiPageFair
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  I said "No Ads"
// @author       Daragh
// @match        http://*.wikia.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setTimeout(function(){
        
        var pageElement = $('.WikiaSiteWrapper').parent();
        var targetClass = pageElement.attr('class');

        if (pageElement && targetClass) {
            console.log('Content found! Protecting desired content.')
            pageElement.removeClass(targetClass);
            var ads = $('.'+targetClass);
            console.log('Nuking ' + ads.length + ' unwanted ads.');
            var r = ads.remove();
        }
        else {
            console.log('Could not indentify desired content.');
        }
        
        $('body>script').last().html('/*Suck it, PageFair!*/');
    }, 2000);

})();