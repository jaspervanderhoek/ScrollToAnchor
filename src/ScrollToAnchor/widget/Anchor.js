/*jslint white:true, nomen: true, plusplus: true */
/*global mx, define, require, browser, devel, console, document, jQuery */
/*mendix */
/*
    Anchor
    ========================

    @file      : Anchor.js
    @version   : 1.0
    @author    : Christopher James Hodges
    @date      : 10/08/2015
    @copyright : 
    @license   : Apache2

    Documentation
    ========================
    This widget creates a simple div for anchoring
*/

// Required module list. Remove unnecessary modules, you can always get them back from the boilerplate.
require([
    "dojo/_base/declare",
    "mxui/widget/_WidgetBase",

    "dojo/dom-class",

    "ScrollToAnchor/lib/jquery-1.11.2"
], function(declare, _WidgetBase, dojoClass, _jQuery) {
    "use strict";

    var $ = _jQuery.noConflict(true);

    // Declare widget's prototype.
    var widget = {

        // _TemplatedMixin will create our dom node using this HTML template.

        // Parameters configured in the Modeler.
        anchorClass: "",

        // dojo.declare.constructor is called to construct the widget instance. Implement to initialize non-primitive properties.
        constructor: function () {

        },

        // dijit._WidgetBase.postCreate is called after constructing the widget. Implement to do extra setup work.
        postCreate: function () {
            console.log(this.id + '.postCreate');
            this._updateRendering();
            this._setupEvents();
        },

        // mxui.widget._WidgetBase.update is called when context is changed or initialized. Implement to re-render and / or fetch data.
        update: function (obj, callback) {
            console.log(this.id + '.update');

            callback();
        },
     
        // Attach events to HTML dom elements
        _setupEvents: function () {

        },

        evaluateAnchorName: function(anchorName) {
            if( anchorName == null )
                return "";
            
            return anchorName.replace(/[^\w\s]/gi, '');
        },
        
        // Rerender the interface.
        _updateRendering: function () {
            dojoClass.add(this.domNode, this.evaluateAnchorName(this.anchorClass));
        }
    };
    
    declare("ScrollToAnchor.widget.Anchor", [ _WidgetBase, _jQuery], widget);
    declare("ScrollToAnchor.widget.AnchorWithContext", [ _WidgetBase, _jQuery], widget);
});