webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-item-container>\n</app-item-container>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__item_item_component__ = __webpack_require__("../../../../../src/app/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__item_container_item_container_component__ = __webpack_require__("../../../../../src/app/item-container/item-container.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_7__item_container_item_container_component__["a" /* ItemContainerComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/item-container/item-container.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" novalidate>\n\n    <div formArrayName=\"items\" class=\"row\">\n\n        <div\n            *ngFor=\"let item of form.controls.items.controls; let i=index\"\n            [formGroupName]=\"i\" \n            class=\"col-xs\"\n        >\n            <app-item formControlName=\"value\"></app-item>\n        </div>\n\n    </div>\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/item-container/item-container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item-container/item-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemContainerComponent = (function () {
    function ItemContainerComponent(fb) {
        this.fb = fb;
        this.createForm();
    }
    ItemContainerComponent.prototype.createForm = function () {
        var fb = this.fb;
        this.form = fb.group({
            items: fb.array([])
        });
    };
    ItemContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this, form = _a.form, fb = _a.fb;
        var items = fb.array([13, 27, 44, 0, 26]
            .map(function (v) { return _this.fb.group({ value: v }); }));
        form.setControl('items', items);
        var itemsChange = items.controls.map(function (ctrl, index) { return ctrl.valueChanges.map(function (value) { return ({ value: value, index: index }); }); });
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"]
            .merge.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"], itemsChange).subscribe(function (_a) {
            var value = _a.value, index = _a.index;
            var v = value.value;
            var leftOver = 100 - v;
            var newValue = leftOver / 4;
            items.controls
                .filter(function (_, i) { return i !== index; })
                .map(function (c) {
                return c.patchValue({ value: newValue }, { emitEvent: false });
            });
        });
    };
    return ItemContainerComponent;
}());
ItemContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item-container',
        template: __webpack_require__("../../../../../src/app/item-container/item-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/item-container/item-container.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object])
], ItemContainerComponent);

var _a;
//# sourceMappingURL=item-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"item\">\n    <input\n        type=\"number\"\n        (ngModelChange)=\"onInputChange($event)\"\n        [ngModel]=\"value\"\n        [disabled]=\"disabled\"\n    />\n\n    <nouislider\n        [connect]=\"[true,false]\"\n        [min]=\"0\"\n        [max]=\"100\"\n        [step]=\"1\"\n        [config]=\"sliderConfig\"\n        [ngModel]=\"sliderValue\"\n        (slide)=\"onSliderChange($event)\"\n        [disabled]=\"disabled\"\n    ></nouislider>\n\n    <label>\n    <input\n        type=\"checkbox\"\n        [(ngModel)]=\"disabled\"\n    />\n    Disabled\n    </label>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/item/item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\n  padding: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ItemComponent = ItemComponent_1 = (function () {
    function ItemComponent() {
        this.disabled = false;
        this.value = 0;
        this.slide$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](0);
        this.input$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](0);
        this.value$ = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["BehaviorSubject"](0);
        this.onChange = function () { };
        this.onTouched = function () { };
        this.sliderValue = 0;
        this.sliderConfig = { start: 0, animate: false, range: { 'min': 0, 'max': 100 } };
    }
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        var _a = this, slide$ = _a.slide$, input$ = _a.input$, value$ = _a.value$;
        input$
            .distinctUntilChanged()
            .subscribe(function (v) {
            value$.next(v);
            _this.sliderValue = v;
        });
        slide$
            .distinctUntilChanged()
            .subscribe(function (v) { return value$.next(v); });
        value$
            .distinctUntilChanged()
            .subscribe(function (value) {
            _this.value = value;
            _this.onChange(value);
            _this.onTouched();
        });
    };
    ItemComponent.prototype.onInputChange = function (value) {
        this.input$.next(value);
    };
    ItemComponent.prototype.onSliderChange = function (value) {
        this.slide$.next(value);
    };
    ItemComponent.prototype.writeValue = function (value) {
        this.value = value;
        this.sliderValue = value;
    };
    ItemComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    ItemComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ItemComponent;
}());
ItemComponent = ItemComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/item/item.component.scss")],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
                useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ItemComponent_1; }),
                multi: true
            }
        ]
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);

var ItemComponent_1;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map