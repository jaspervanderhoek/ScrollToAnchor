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
        classAssigned: false,

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
            this._contextObj = obj;
            
            this._updateRendering();
            
            callback();
        },
     
        // Attach events to HTML dom elements
        _setupEvents: function () {

        },

        evaluateAnchorName: function(anchorName) {
            if( anchorName == null )
                return "";
            
            return anchorName.replace(/[^\w]/gi, '');
        },
        
        // Rerender the interface.
        _updateRendering: function () {
            if( this._contextObj != null ) {
                var currentClass = this.anchorClass;
                
                if( this.anchorClassAttr != null ) 
                    this.anchorClass = this._contextObj.get(this.anchorClassAttr);
                
                if( this.classAssigned == true ) {
                    dojoClass.remove( this.domNode, currentClass );
                }
            }
            this.anchorClass = this.evaluateAnchorName(this.anchorClass)
            
            if( this.anchorClass != null && this.anchorClass != "" ) {
                dojoClass.add(this.domNode, this.anchorClass);
                this.classAssigned = true;
            }
            else 
                this.classAssigned = false;
        }
    };
    
    declare("ScrollToAnchor.widget.Anchor", [ _WidgetBase, _jQuery], widget);
    declare("ScrollToAnchor.widget.AnchorWithContext", [ _WidgetBase, _jQuery], widget);
});