(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Kinderland_20Animation_atlas_P_", frames: [[5533,0,1922,1080],[0,0,5531,401],[7457,552,526,333],[0,403,739,501],[7457,0,625,550],[741,403,1582,232]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.background = function() {
	this.spriteSheet = ss["Kinderland_20Animation_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.clouds = function() {
	this.spriteSheet = ss["Kinderland_20Animation_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.hello_friends = function() {
	this.spriteSheet = ss["Kinderland_20Animation_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.house = function() {
	this.spriteSheet = ss["Kinderland_20Animation_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.kids = function() {
	this.spriteSheet = ss["Kinderland_20Animation_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.kinderland = function() {
	this.spriteSheet = ss["Kinderland_20Animation_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kids();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.042,0.042);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,26.3,23.1), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hello_friends();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.126,0.126);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,66.3,42), null);


(lib.kl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.kinderland();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kl, new cjs.Rectangle(0,0,379.8,55.7), null);


(lib.Housecopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.house();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.32,0.32);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Housecopy, new cjs.Rectangle(0,0,236.7,160.5), null);


(lib.Clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.clouds();
	this.instance.parent = this;
	this.instance.setTransform(0,-19,0.231,0.325);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clouds, new cjs.Rectangle(0,-19,1275.9,130.2), null);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.287,0.371);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_1, new cjs.Rectangle(0,0,551.6,401.1), null);


(lib.kinderhouse = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Housecopy();
	this.instance.parent = this;
	this.instance.setTransform(118.4,80.3,1,1,0,0,0,118.4,80.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.kinderhouse, new cjs.Rectangle(0,0,236.7,160.5), null);


// stage content:
(lib.Kinderland = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		playSound("Dancing_on_Green_Grass");
	}
	this.frame_186 = function() {
		playSound("Goofy_Spring_Bounces");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(186).call(this.frame_186).wait(20));

	// Kinderland
	this.instance = new lib.kl();
	this.instance.parent = this;
	this.instance.setTransform(275.9,-29.1,1,1,0,0,0,189.9,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:27.8,y:-27.2},0).wait(1).to({y:-25.3},0).wait(1).to({y:-23.4},0).wait(1).to({y:-21.5},0).wait(1).to({y:-19.6},0).wait(1).to({y:-17.7},0).wait(1).to({y:-15.8},0).wait(1).to({y:-13.8},0).wait(1).to({y:-11.9},0).wait(1).to({y:-10},0).wait(1).to({y:-8.1},0).wait(1).to({y:-6.2},0).wait(1).to({y:-4.3},0).wait(1).to({y:-2.4},0).wait(1).to({y:-0.5},0).wait(1).to({y:1.5},0).wait(1).to({y:3.4},0).wait(1).to({y:5.3},0).wait(1).to({y:7.2},0).wait(1).to({y:9.1},0).wait(1).to({y:11},0).wait(1).to({y:12.9},0).wait(1).to({y:14.8},0).wait(1).to({y:16.8},0).wait(1).to({y:18.7},0).wait(1).to({y:20.6},0).wait(1).to({y:22.5},0).wait(1).to({y:24.4},0).wait(1).to({y:26.3},0).wait(1).to({y:28.2},0).wait(1).to({y:30.1},0).wait(1).to({y:32},0).wait(1).to({y:33.9},0).wait(1).to({y:35.8},0).wait(1).to({y:37.8},0).wait(1).to({y:39.7},0).wait(1).to({y:41.6},0).wait(1).to({y:43.5},0).wait(1).to({y:45.4},0).wait(1).to({y:47.3},0).wait(1).to({y:49.2},0).wait(1).to({y:51.1},0).wait(1).to({y:53.1},0).wait(1).to({y:55},0).wait(1).to({y:56.9},0).wait(1).to({y:58.8},0).wait(160));

	// Kids
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(195.1,308.6,1,1,0,0,0,13.1,11.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80).to({_off:false},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:194.2,y:308.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:193.3,y:309.1},0).wait(1).to({scaleX:1.14,scaleY:1.14,x:192.4,y:309.4},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:191.5,y:309.7},0).wait(1).to({scaleX:1.24,scaleY:1.24,x:190.6,y:310},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:189.7,y:310.3},0).wait(1).to({scaleX:1.34,scaleY:1.34,x:188.7,y:310.5},0).wait(1).to({scaleX:1.39,scaleY:1.39,x:187.9,y:310.8},0).wait(1).to({scaleX:1.43,scaleY:1.43,x:186.9,y:311.1},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:186,y:311.4},0).wait(1).to({scaleX:1.53,scaleY:1.53,x:185.1,y:311.7},0).wait(1).to({scaleX:1.58,scaleY:1.58,x:184.2,y:311.9},0).wait(1).to({scaleX:1.63,scaleY:1.63,x:183.3,y:312.2},0).wait(1).to({scaleX:1.67,scaleY:1.67,x:182.4,y:312.5},0).wait(1).to({scaleX:1.72,scaleY:1.72,x:181.5,y:312.8},0).wait(1).to({scaleX:1.77,scaleY:1.77,x:180.6,y:313.1},0).wait(1).to({scaleX:1.82,scaleY:1.82,x:179.7,y:313.4},0).wait(1).to({scaleX:1.87,scaleY:1.87,x:178.8,y:313.6},0).wait(1).to({scaleX:1.91,scaleY:1.91,x:177.9,y:313.9},0).wait(1).to({scaleX:1.96,scaleY:1.96,x:177,y:314.2},0).wait(1).to({scaleX:2.01,scaleY:2.01,x:176.1,y:314.4},0).wait(1).to({scaleX:2.06,scaleY:2.06,x:175.1,y:314.8},0).wait(1).to({scaleX:2.11,scaleY:2.11,x:174.3,y:315},0).wait(1).to({scaleX:2.15,scaleY:2.15,x:173.4,y:315.3},0).wait(1).to({scaleX:2.2,scaleY:2.2,x:172.4,y:315.6},0).wait(1).to({scaleX:2.25,scaleY:2.25,x:171.5,y:315.8},0).wait(1).to({scaleX:2.3,scaleY:2.3,x:170.6,y:316.1},0).wait(1).to({scaleX:2.35,scaleY:2.35,x:169.7,y:316.4},0).wait(1).to({scaleX:2.4,scaleY:2.4,x:168.8,y:316.7},0).wait(1).to({scaleX:2.44,scaleY:2.44,x:167.9,y:317},0).wait(1).to({scaleX:2.49,scaleY:2.49,x:167,y:317.2},0).wait(1).to({scaleX:2.54,scaleY:2.54,x:166.1,y:317.5},0).wait(1).to({scaleX:2.59,scaleY:2.59,x:165.2,y:317.8},0).wait(1).to({scaleX:2.64,scaleY:2.64,x:164.3,y:318.1},0).wait(1).to({scaleX:2.68,scaleY:2.68,x:163.4,y:318.4},0).wait(1).to({scaleX:2.73,scaleY:2.73,x:162.5,y:318.6},0).wait(1).to({scaleX:2.78,scaleY:2.78,x:161.5,y:318.9},0).wait(1).to({scaleX:2.83,scaleY:2.83,x:160.7,y:319.2},0).wait(1).to({scaleX:2.88,scaleY:2.88,x:159.8,y:319.5},0).wait(1).to({scaleX:2.93,scaleY:2.93,x:158.8,y:319.8},0).wait(1).to({scaleX:2.97,scaleY:2.97,x:158,y:320.1},0).wait(1).to({scaleX:3.02,scaleY:3.02,x:157,y:320.3},0).wait(1).to({scaleX:3.07,scaleY:3.07,x:156.1,y:320.6},0).wait(1).to({scaleX:3.12,scaleY:3.12,x:155.2,y:320.9},0).wait(1).to({scaleX:3.17,scaleY:3.17,x:154.3,y:321.1},0).wait(1).to({scaleX:3.21,scaleY:3.21,x:153.4,y:321.4},0).wait(1).to({scaleX:3.26,scaleY:3.26,x:152.5,y:321.7},0).wait(1).to({scaleX:3.31,scaleY:3.31,x:151.6,y:322},0).wait(1).to({scaleX:3.36,scaleY:3.36,x:150.7,y:322.3},0).wait(1).to({scaleX:3.41,scaleY:3.41,x:149.8,y:322.5},0).wait(1).to({scaleX:3.45,scaleY:3.45,x:148.9,y:322.8},0).wait(1).to({scaleX:3.5,scaleY:3.5,x:148,y:323.1},0).wait(1).to({scaleX:3.55,scaleY:3.55,x:147.1,y:323.4},0).wait(1).to({scaleX:3.6,scaleY:3.6,x:146.2,y:323.7},0).wait(1).to({scaleX:3.65,scaleY:3.65,x:145.2,y:323.9},0).wait(1).to({scaleX:3.69,scaleY:3.69,x:144.4,y:324.2},0).wait(1).to({scaleX:3.74,scaleY:3.74,x:143.5,y:324.5},0).wait(1).to({scaleX:3.79,scaleY:3.79,x:142.5,y:324.8},0).wait(1).to({scaleX:3.84,scaleY:3.84,x:141.6,y:325.1},0).wait(1).to({scaleX:3.89,scaleY:3.89,x:140.7,y:325.3},0).wait(1).to({scaleX:3.94,scaleY:3.94,x:139.8,y:325.6},0).wait(1).to({scaleX:3.98,scaleY:3.98,x:138.9,y:325.9},0).wait(1).to({scaleX:4.03,scaleY:4.03,x:138,y:326.2},0).wait(1).to({scaleX:4.08,scaleY:4.08,x:137.1,y:326.4},0).wait(1).to({scaleX:4.13,scaleY:4.13,x:136.2,y:326.8},0).wait(1).to({scaleX:4.18,scaleY:4.18,x:135.3,y:327},0).wait(1).to({scaleX:4.22,scaleY:4.22,x:134.4,y:327.3},0).wait(1).to({scaleX:4.27,scaleY:4.27,x:133.5,y:327.6},0).wait(1).to({scaleX:4.32,scaleY:4.32,x:132.6,y:327.8},0).wait(1).to({scaleX:4.37,scaleY:4.37,x:131.6,y:328.1},0).wait(1).to({scaleX:4.42,scaleY:4.42,x:130.8,y:328.4},0).wait(1).to({scaleX:4.46,scaleY:4.46,x:129.9,y:328.7},0).wait(1).to({scaleX:4.51,scaleY:4.51,x:128.9,y:329},0).wait(1).to({scaleX:4.56,scaleY:4.56,x:128,y:329.2},0).wait(1).to({scaleX:4.61,scaleY:4.61,x:127.1,y:329.5},0).wait(1).to({scaleX:4.66,scaleY:4.66,x:126.2,y:329.8},0).wait(1).to({scaleX:4.71,scaleY:4.71,x:125.3,y:330.1},0).wait(1).to({scaleX:4.75,scaleY:4.75,x:124.4,y:330.4},0).wait(1).to({scaleX:4.8,scaleY:4.8,x:123.5,y:330.6},0).wait(1).to({scaleX:4.85,scaleY:4.85,x:122.6,y:330.9},0).wait(1).to({scaleX:4.9,scaleY:4.9,x:121.7,y:331.2},0).wait(1).to({scaleX:4.95,scaleY:4.95,x:120.8,y:331.5},0).wait(1).to({scaleX:4.99,scaleY:4.99,x:119.9,y:331.8},0).wait(1).to({scaleX:5.04,scaleY:5.04,x:119,y:332},0).wait(1).to({scaleX:5.09,scaleY:5.09,x:118.1,y:332.3},0).wait(1).to({scaleX:5.14,scaleY:5.14,x:117.2,y:332.6},0).wait(1).to({scaleX:5.19,scaleY:5.19,x:116.3,y:332.9},0).wait(1).to({scaleX:5.23,scaleY:5.23,x:115.3,y:333.1},0).wait(1).to({scaleX:5.28,scaleY:5.28,x:114.4,y:333.4},0).wait(1).to({scaleX:5.33,scaleY:5.33,x:113.6,y:333.7},0).wait(1).to({scaleX:5.38,scaleY:5.38,x:112.6,y:334},0).wait(1).to({scaleX:5.43,scaleY:5.43,x:111.7,y:334.3},0).wait(1).to({scaleX:5.48,scaleY:5.48,x:110.8,y:334.5},0).wait(1).to({scaleX:5.52,scaleY:5.52,x:109.9,y:334.8},0).wait(1).to({scaleX:5.57,scaleY:5.57,x:109,y:335.1},0).wait(1).to({scaleX:5.62,scaleY:5.62,x:108.1,y:335.4},0).wait(30));

	// Hello
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(444.1,336,0.1,0.109,0,0,0,31.1,20.6);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({_off:false},0).wait(1).to({regX:33.1,regY:21,scaleY:0.11,x:444.3},0).wait(139).to({scaleX:0.42,scaleY:0.46,x:444.9,y:336.1},0).wait(1).to({scaleX:0.73,scaleY:0.81,x:445.6,y:336.3},0).wait(1).to({scaleX:2.26,scaleY:2.48,x:448.6,y:337.1},0).wait(1).to({scaleX:1.97,scaleY:2.17,x:448,y:336.9},0).wait(1).to({scaleX:1.68,scaleY:1.85,x:447.5,y:336.8},0).wait(1).to({scaleX:1.4,scaleY:1.53,x:446.9,y:336.6},0).wait(1).to({scaleX:1.52,scaleY:1.67,x:447.1,y:336.7},0).wait(1).to({scaleX:1.65,scaleY:1.82,x:447.4,y:336.8},0).wait(12));

	// House
	this.instance_3 = new lib.kinderhouse();
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.9,239.6,1,1,0,0,0,118.4,80.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(206));

	// Clouds
	this.instance_4 = new lib.Clouds();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-112,104.3,1,1,0,0,0,638,46.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regY:46.1,x:-108.2,y:104.1},0).wait(1).to({x:-104.4},0).wait(1).to({x:-100.6},0).wait(1).to({x:-96.9},0).wait(1).to({x:-93.1},0).wait(1).to({x:-89.3},0).wait(1).to({x:-85.6},0).wait(1).to({x:-81.8},0).wait(1).to({x:-78},0).wait(1).to({x:-74.3},0).wait(1).to({x:-70.5},0).wait(1).to({x:-66.7},0).wait(1).to({x:-63},0).wait(1).to({x:-59.2},0).wait(1).to({x:-55.4},0).wait(1).to({x:-51.6},0).wait(1).to({x:-47.9},0).wait(1).to({x:-44.1},0).wait(1).to({x:-40.3},0).wait(1).to({x:-36.6},0).wait(1).to({x:-32.8},0).wait(1).to({x:-29},0).wait(1).to({x:-25.3},0).wait(1).to({x:-21.5},0).wait(1).to({x:-17.7},0).wait(1).to({x:-14},0).wait(1).to({x:-10.2},0).wait(1).to({x:-6.4},0).wait(1).to({x:-2.7},0).wait(1).to({x:1.1},0).wait(1).to({x:4.9},0).wait(1).to({x:8.7},0).wait(1).to({x:12.4},0).wait(1).to({x:16.2},0).wait(1).to({x:20},0).wait(1).to({x:23.7},0).wait(1).to({x:27.5},0).wait(1).to({x:31.3},0).wait(1).to({x:35},0).wait(1).to({x:38.8},0).wait(1).to({x:42.6},0).wait(1).to({x:46.3},0).wait(1).to({x:50.1},0).wait(1).to({x:53.9},0).wait(1).to({x:57.6},0).wait(1).to({x:61.4},0).wait(1).to({x:65.2},0).wait(1).to({x:69},0).wait(1).to({x:72.7},0).wait(1).to({x:76.5},0).wait(1).to({x:80.3},0).wait(1).to({x:84},0).wait(1).to({x:87.8},0).wait(1).to({x:91.6},0).wait(1).to({x:95.3},0).wait(1).to({x:99.1},0).wait(1).to({x:102.9},0).wait(1).to({x:106.6},0).wait(1).to({x:110.4},0).wait(1).to({x:114.2},0).wait(1).to({x:117.9},0).wait(1).to({x:121.7},0).wait(1).to({x:125.5},0).wait(1).to({x:129.3},0).wait(1).to({x:133},0).wait(1).to({x:136.8},0).wait(1).to({x:140.6},0).wait(1).to({x:144.3},0).wait(1).to({x:148.1},0).wait(1).to({x:151.9},0).wait(1).to({x:155.6},0).wait(1).to({x:159.4},0).wait(1).to({x:163.2},0).wait(1).to({x:166.9},0).wait(1).to({x:170.7},0).wait(1).to({x:174.5},0).wait(1).to({x:178.3},0).wait(1).to({x:182},0).wait(1).to({x:185.8},0).wait(1).to({x:189.6},0).wait(1).to({x:193.3},0).wait(1).to({x:197.1},0).wait(1).to({x:200.9},0).wait(1).to({x:204.6},0).wait(1).to({x:208.4},0).wait(1).to({x:212.2},0).wait(1).to({x:215.9},0).wait(1).to({x:219.7},0).wait(1).to({x:223.5},0).wait(1).to({x:227.2},0).wait(1).to({x:231},0).wait(1).to({x:234.8},0).wait(1).to({x:238.6},0).wait(1).to({x:242.3},0).wait(1).to({x:246.1},0).wait(1).to({x:249.9},0).wait(1).to({x:253.6},0).wait(1).to({x:257.4},0).wait(1).to({x:261.2},0).wait(1).to({x:264.9},0).wait(1).to({x:268.7},0).wait(1).to({x:272.5},0).wait(1).to({x:276.2},0).wait(1).to({x:280},0).wait(1).to({x:283.8},0).wait(1).to({x:287.5},0).wait(1).to({x:291.3},0).wait(1).to({x:295.1},0).wait(1).to({x:298.9},0).wait(1).to({x:302.6},0).wait(1).to({x:306.4},0).wait(1).to({x:310.2},0).wait(1).to({x:313.9},0).wait(1).to({x:317.7},0).wait(1).to({x:321.5},0).wait(1).to({x:325.2},0).wait(1).to({x:329},0).wait(1).to({x:332.8},0).wait(1).to({x:336.5},0).wait(1).to({x:340.3},0).wait(1).to({x:344.1},0).wait(1).to({x:347.8},0).wait(1).to({x:351.6},0).wait(1).to({x:355.4},0).wait(1).to({x:359.2},0).wait(1).to({x:362.9},0).wait(1).to({x:366.7},0).wait(1).to({x:370.5},0).wait(1).to({x:374.2},0).wait(1).to({x:378},0).wait(1).to({x:381.8},0).wait(1).to({x:385.5},0).wait(1).to({x:389.3},0).wait(1).to({x:393.1},0).wait(1).to({x:396.8},0).wait(1).to({x:400.6},0).wait(1).to({x:404.4},0).wait(1).to({x:408.2},0).wait(1).to({x:411.9},0).wait(1).to({x:415.7},0).wait(1).to({x:419.5},0).wait(1).to({x:423.2},0).wait(1).to({x:427},0).wait(1).to({x:430.8},0).wait(1).to({x:434.5},0).wait(1).to({x:438.3},0).wait(1).to({x:442.1},0).wait(1).to({x:445.8},0).wait(1).to({x:449.6},0).wait(1).to({x:453.4},0).wait(1).to({x:457.1},0).wait(1).to({x:460.9},0).wait(1).to({x:464.7},0).wait(1).to({x:468.5},0).wait(1).to({x:472.2},0).wait(1).to({x:476},0).wait(1).to({x:479.8},0).wait(1).to({x:483.5},0).wait(1).to({x:487.3},0).wait(1).to({x:491.1},0).wait(1).to({x:494.8},0).wait(1).to({x:498.6},0).wait(1).to({x:502.4},0).wait(1).to({x:506.1},0).wait(1).to({x:509.9},0).wait(1).to({x:513.7},0).wait(1).to({x:517.4},0).wait(1).to({x:521.2},0).wait(1).to({x:525},0).wait(1).to({x:528.8},0).wait(1).to({x:532.5},0).wait(1).to({x:536.3},0).wait(1).to({x:540.1},0).wait(1).to({x:543.8},0).wait(1).to({x:547.6},0).wait(1).to({x:551.4},0).wait(1).to({x:555.1},0).wait(1).to({x:558.9},0).wait(1).to({x:562.7},0).wait(1).to({x:566.4},0).wait(1).to({x:570.2},0).wait(1).to({x:574},0).wait(1).to({x:577.7},0).wait(1).to({x:581.5},0).wait(1).to({x:585.3},0).wait(1).to({x:589.1},0).wait(1).to({x:592.8},0).wait(1).to({x:596.6},0).wait(1).to({x:600.4},0).wait(1).to({x:604.1},0).wait(1).to({x:607.9},0).wait(1).to({x:611.7},0).wait(1).to({x:615.4},0).wait(1).to({x:619.2},0).wait(1).to({x:623},0).wait(1).to({x:626.7},0).wait(1).to({x:630.5},0).wait(1).to({x:634.3},0).wait(1).to({x:638},0).wait(7));

	// Background
	this.instance_5 = new lib.background_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(274.8,199.5,1,1,0,0,0,275.8,200.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(206));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-475,143,1300.6,457.1);
// library properties:
lib.properties = {
	id: '98E0C6A672DC6C40A48983558EC3FD3A',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"static/images/Kinderland_20Animation_atlas_P_.png", id:"Kinderland_20Animation_atlas_P_"},
		{src:"static/sounds/Dancing_on_Green_Grass.mp3", id:"Dancing_on_Green_Grass"},
		{src:"static/sounds/Goofy_Spring_Bounces.mp3", id:"Goofy_Spring_Bounces"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['98E0C6A672DC6C40A48983558EC3FD3A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;