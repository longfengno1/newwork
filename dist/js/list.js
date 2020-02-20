/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		40: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([134,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(135);


/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _js_common2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_slick_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _js_slick_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_slick_min__WEBPACK_IMPORTED_MODULE_2__);




(function () {
  var expand = false;
  var showPlace = false;

  function init() {
    $('#travel_calendar').hide();
    $('#calendar-icon').addClass('icon-arrowdown');
    $('#calendar-icon').removeClass('icon-arrowup');
    $('#select-place-row').hide();
  }

  init();
  $('#show-calendar').click(function () {
    if (expand) {
      $('#travel_calendar').hide();
      $('#calendar-icon').addClass('icon-arrowdown');
      $('#calendar-icon').removeClass('icon-arrowup');
      expand = false;
    } else {
      $('#travel_calendar').show();
      $('#calendar-icon').removeClass('icon-arrowdown');
      $('#calendar-icon').addClass('icon-arrowup');
      expand = true;
    }
  });
  $(".a_available").mouseover(function () {
    $(".a_available").removeClass("hover");
    $(this).addClass("hover");
    $(this).parent().find(".t2_td_schedule_more").show();
  });
  $(".a_available").mouseleave(function () {
    $(this).removeClass("hover");
    $(this).parent().find(".t2_td_schedule_more").hide();
  });
  $(".t2_td_schedule_more").mouseover(function () {
    $(this).show();
  });
  $(".t2_td_schedule_more").mouseleave(function () {
    $(this).hide();
  });
  $('#select-place').click(function () {
    if (showPlace) {
      $('#select-place-row').hide();
    } else {
      $('#select-place-row').show();
    }

    showPlace = !showPlace;
  });
  $('.route-line-more').click(function (e) {
    var $this = $(this);
    var $em = $this.find("em");
    $this.parent().toggleClass("showmore");

    if ($em.text() == "更多") {
      $em.html("隐藏");
    } else {
      $em.html("更多");
    }
  });
  $('.route-line').each(function (i, v) {
    var $this = $(v);

    if ($this.height() > 26) {
      $this.removeClass('showmore');
    } else {
      $this.removeClass('showmore');
      $this.find(".route-line-more").hide();
    }
  });
  $('.date-list-item-more').click(function (e) {
    var $this = $(this);
    var $em = $this.find("em");
    $this.parent().toggleClass("showmore");

    if ($em.text() == "更多") {
      $em.html("隐藏");
      $this.find(".icon-arrowdown").addClass("icon-arrowup");
    } else {
      $em.html("更多");
      $this.find(".icon-arrowdown").removeClass("icon-arrowup");
    }
  });
  $('.date-list').each(function (i, v) {
    var $this = $(v);

    if ($this.height() > 28) {
      $this.removeClass('showmore');
    } else {
      $this.removeClass('showmore');
      $this.find(".date-list-item-more").hide();
    }
  });
  $(".tags .hot-tag").mouseover(function () {
    var $this = $(this);
    $this.parents(".boat-card").find(".description").show();
  });
  $(".intro").click(function () {
    var $this = $(this);
    $this.parents(".buttons").find(".opener").show();
  });
  $(".opener .opener-close").click(function () {
    $(".opener").hide();
  });
  var TabBarBox = $(".left-container");
  var TBBWrap = $(".right-container");
  $(window).bind("scroll", function () {
    var st = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
    if (!TBBWrap.offset()) return;

    if (st > TBBWrap.offset().top && st < $(".right-container").offset().top + $(".right-container").height() - TabBarBox.height()) {
      TabBarBox.addClass("boxfixed");
      TabBarBox.removeClass("boxbottom");
    } else if (st < TBBWrap.offset().top) {
      TabBarBox.removeClass("boxfixed");
      TabBarBox.removeClass("boxbottom");
    } else {
      TabBarBox.removeClass("boxfixed");
      TabBarBox.addClass("boxbottom");
    }
  });
  var slickobj;
  $(".filter-sm .filter-item").click(function (e) {
    $(".markop0").show();
    var $this = $(this);
    $(".filter-sm .filter-item").removeClass("current");
    $this.addClass("current");
    $(".filter-sm-opener").hide();
    $(".filter-sm-opener").eq($this.index()).show();

    if ($this.index() == 1 && !slickobj) {
      slickobj = $(".xslider").slick({
        infinite: false,
        arrows: false
      });
    }
  });
  $(".markop0").click(function () {
    $(".filter-sm-opener").hide();
    $(".markop0").hide();
  });
  $(".city_item_txt").click(function () {
    $(".city_item_txt").removeClass("current");
    $(this).addClass("current");
  });
  $(".price-desc-txt").click(function () {
    $(".fullmark").show();
  });
  $(".price-desc-opener-close").click(function () {
    $(this).parent().parent().parent().hide();
  });
  $(".price-desc-panel-close").click(function () {
    $(this).parent().hide();
  });
  $(".bottom-btn-search").click(function () {
    $(".queryfitler").show();
    $(".price-desc").hide();
    $(".markop0").hide();
    $(this).parent().parent().hide();
  });
  $(".item").click(function () {
    //$(this).parent().find(".item").re
    if ($(this).parent().hasClass("inner-list")) {
      $(this).toggleClass("current");
    }
  });
  $(".sortitem").click(function () {
    $(".sortitem").removeClass("current");
    $(this).addClass("current");
  });
  $(".conti-close").click(function () {
    $(this).parent().hide();
  });
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });