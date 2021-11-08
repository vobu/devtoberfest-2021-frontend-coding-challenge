/*!
 * OpenUI5
 * (c) Copyright 2009-2021 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BlockLayerUtils"],function(a){"use strict";var i=function(){};i.getElement=function(i){var t="sapUiLocalBusyIndicatorSizeMedium";if(i==="Large"){t="sapUiLocalBusyIndicatorSizeBig"}var c=document.createElement("div");c.className="sapUiLocalBusyIndicator "+t+" sapUiLocalBusyIndicatorFade";a.addAriaAttributes(c);e(c);return c};function e(a,i){i=i||"sapUiLocalBusyIndicatorAnimStandard";var e=document.createElement("div");e.className="sapUiLocalBusyIndicatorAnimation "+i;e.appendChild(document.createElement("div"));e.appendChild(document.createElement("div"));e.appendChild(document.createElement("div"));a.appendChild(e)}function t(a,i){var e=a.$parent.get(0),t=a.$blockLayer.get(0);var c=t.children[0],n=c.offsetWidth;if(e.offsetWidth<n){c.className="sapUiLocalBusyIndicatorAnimation sapUiLocalBusyIndicatorAnimSmall"}}i.addHTML=function(a,i){var c=sap.ui.require("sap/ui/core/library").BusyIndicatorSize,n="sapUiLocalBusyIndicatorSizeMedium",r;switch(i){case c.Small:n="sapUiLocalBusyIndicatorSizeMedium";r="sapUiLocalBusyIndicatorAnimSmall";break;case c.Large:n="sapUiLocalBusyIndicatorSizeBig";r="sapUiLocalBusyIndicatorAnimStandard";break;case c.Auto:n="sapUiLocalBusyIndicatorSizeMedium";r="sapUiLocalBusyIndicatorAnimStandard";break;default:n="sapUiLocalBusyIndicatorSizeMedium";r="sapUiLocalBusyIndicatorAnimStandard";break}if(!a){return}var s=a.$parent.get(0),d=a.$blockLayer.get(0);s.className+=" sapUiLocalBusy";d.className+=" sapUiLocalBusyIndicator "+n+" sapUiLocalBusyIndicatorFade";e(d,r);if(i===c.Auto){t(a)}};return i},true);