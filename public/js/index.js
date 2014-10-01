$( document ).ready(function() {
	/*
	var btn1 = document.getElementById('btnNavigate1');
	btn1.onclick = btnNavigate1Click;

	var btn2 = document.getElementById('btnNavigate2');
	btn2.onclick = btnNavigate2Click;

	var btn3 = document.getElementById('btnNavigate3');
	btn3.onclick = btnNavigate3Click;
	*/
	
	ko.applyBindings(Policy);
});

function btnNavigate1Click(event) {
	var frame = document.getElementById('iframe1');
	frame.src = "http://teched-lunchtime.azurewebsites.net";
};

function btnNavigate2Click(event) {
	var frame = document.getElementById('iframe1');
	frame.src = "http://www.wikipedia.org";
};

function btnNavigate3Click(event) {
	var frame = document.getElementById('iframe1');
	frame.src = "http://msgnotify.azurewebsites.net/sitea.html";
};

function btnChangeCSP(policy){

}

var CSPOneModel = function(directives) {
	var self = this;

	self.directives = ko.observableArray(directives);

	self._version = '1.0';

	self.defaultSrc = 'default-src ';
	self.scriptSrc = 'script-src ';
	self.objectSrc = 'object-src ';
	self.styleSrc = 'style-src ';
	self.imgSrc = 'img-src ';
	self.mediaSrc = 'media-src ';
	self.frameSrc = 'frame-src ';
	self.fontSrc = 'font-src ';
	self.connectSrc = 'connect-src ';
	self.sandbox = 'sandbox ';
	self.reportUri = 'report-uri ';

	self.removeDirective = function(directive) {
		self.directives.remove(directive);
	}

	self.addDirective = function(directive) {
		self.directives.push(directive);
	}

	self.saveCurrentPolicyLocal = function() {
		//TODO: save in local storage
	}

	self.addUnsafeEval = function(directive) {
		directive.value += "'unsafe-eval'";
	}
}

var Directive = function(name,value){
	var self = this;

	self.directiveName = ko.observable();
	self.directiveValue = ko.observable();
	self.allowUnsafeEval = false;


	self.checkDirective = function(name, version) {

		if(version === 1) {
			return CSPOneDirectives.indexOf(name);
		}
	}
}

var Policy = function(){
	var self = this;

	self.directives = ko.observableArray([new Directive()]);
	self.directiveListCSPOne = ko.observableArray(CSP)

	self.allowUnsafeEval = function(directive) {
		directive.allowUnsafeEval = true;
	}
}