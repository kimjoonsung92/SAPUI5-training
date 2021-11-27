/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"KJS/zjs00018/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
