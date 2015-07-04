define(["require", "constants", "angular", "jquery", "app", "routes"], function (rq, con, ng) {
	"use strict";
	rq(['domReady!'], function (doc) {
		ng.bootstrap(doc, [con.namespace]);
	});
});