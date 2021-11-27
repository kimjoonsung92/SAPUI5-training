sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("KJS.zjs00018.controller.View1", {
			onInit: function () {
                let oModel= new JSONModel;
                oModel.loadData("../model/data.json");
                this.getView().setModel(oModel);
			},

            onSelectionChange:function(oEvent){
                let oListItem = oEvent.getParameter("listItem").getBindingContext().getPath();
                // let sPath = oListItem.getBindingContext().getPath();
                let oTableData = this.byId("idConnTable");
                oTableData.bindElement(oListItem);
            },

            onSelect:function(oEvent){             
                let sPath = oEvent.getParameter("listItem").getBindingContext().getPath();
                let oPanel = this.getView().byId("idPanel");
                oPanel.bindElement(sPath);
            },

            onComboSelection:function(oEvent){
                let oCombo = oEvent.getParameter("selectedItem").getBindingContext().getPath();
                let oComboTable = this.getView().byId("idConnTable");
                oComboTable.bindElement(oCombo);
            }
		});
	});
