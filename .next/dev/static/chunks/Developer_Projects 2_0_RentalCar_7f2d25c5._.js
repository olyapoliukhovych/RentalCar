(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carsList": "CarList-module__7yQoGG__carsList",
  "loadMoreBtn": "CarList-module__7yQoGG__loadMoreBtn",
});
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomTextOne": "CarListItem-module__fZFi2q__bottomTextOne",
  "bottomTextTwo": "CarListItem-module__fZFi2q__bottomTextTwo",
  "carImg": "CarListItem-module__fZFi2q__carImg",
  "carsLiButton": "CarListItem-module__fZFi2q__carsLiButton",
  "detailsSpanOne": "CarListItem-module__fZFi2q__detailsSpanOne",
  "detailsSpanTwo": "CarListItem-module__fZFi2q__detailsSpanTwo",
  "model": "CarListItem-module__fZFi2q__model",
  "topText": "CarListItem-module__fZFi2q__topText",
  "topTextPosition": "CarListItem-module__fZFi2q__topTextPosition",
});
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.module.css [app-client] (css module)");
;
;
;
;
const CarListItem = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(47);
    if ($[0] !== "7e1f229a2c55dd2b6133e511df56e9de388a15f26ab57150851f69acb7fee324") {
        for(let $i = 0; $i < 47; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7e1f229a2c55dd2b6133e511df56e9de388a15f26ab57150851f69acb7fee324";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.address) {
        t1 = item.address.split(", ");
        $[1] = item.address;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const splitAddress = t1;
    const city = splitAddress[1];
    const country = splitAddress[2];
    let t2;
    if ($[3] !== item.description || $[4] !== item.img) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carImg,
            src: item.img,
            width: 276,
            height: 268,
            alt: item.description
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = item.description;
        $[4] = item.img;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const t3 = `${item.brand} ${item.model}, ${item.year}`;
    let t4;
    if ($[6] !== item.model) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].model,
            children: item.model
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = item.model;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== item.brand || $[9] !== item.year || $[10] !== t3 || $[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topText,
            title: t3,
            children: [
                item.brand,
                " ",
                t4,
                ", ",
                item.year
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = item.brand;
        $[9] = item.year;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== item.rentalPrice) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topText,
            children: [
                "$",
                item.rentalPrice
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 61,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = item.rentalPrice;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] !== t5 || $[16] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topTextPosition,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 69,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t5;
        $[16] = t6;
        $[17] = t7;
    } else {
        t7 = $[17];
    }
    let t8;
    if ($[18] !== city) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsSpanOne,
            children: city
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = city;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== country) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsSpanOne,
            children: country
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 86,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = country;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] !== item.rentalCompany) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsSpanOne,
            children: item.rentalCompany
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 94,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = item.rentalCompany;
        $[23] = t10;
    } else {
        t10 = $[23];
    }
    let t11;
    if ($[24] !== t10 || $[25] !== t8 || $[26] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomTextOne,
            children: [
                t8,
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 102,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = t10;
        $[25] = t8;
        $[26] = t9;
        $[27] = t11;
    } else {
        t11 = $[27];
    }
    let t12;
    if ($[28] !== item.type) {
        t12 = item.type.charAt(0).toUpperCase();
        $[28] = item.type;
        $[29] = t12;
    } else {
        t12 = $[29];
    }
    let t13;
    if ($[30] !== item.type) {
        t13 = item.type.slice(1).toLowerCase();
        $[30] = item.type;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    const t14 = t12 + t13;
    let t15;
    if ($[32] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsSpanTwo,
            children: t14
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 129,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = t14;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== item.mileage) {
        t16 = item.mileage.toLocaleString("uk-UA");
        $[34] = item.mileage;
        $[35] = t16;
    } else {
        t16 = $[35];
    }
    let t17;
    if ($[36] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].detailsSpanTwo,
            children: [
                t16,
                " km"
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 145,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t16;
        $[37] = t17;
    } else {
        t17 = $[37];
    }
    let t18;
    if ($[38] !== t15 || $[39] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomTextTwo,
            children: [
                t15,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 153,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t15;
        $[39] = t17;
        $[40] = t18;
    } else {
        t18 = $[40];
    }
    let t19;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carsLiButton,
            children: "Read more"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t19;
    } else {
        t19 = $[41];
    }
    let t20;
    if ($[42] !== t11 || $[43] !== t18 || $[44] !== t2 || $[45] !== t7) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carsLi,
            children: [
                t2,
                t7,
                t11,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[42] = t11;
        $[43] = t18;
        $[44] = t2;
        $[45] = t7;
        $[46] = t20;
    } else {
        t20 = $[46];
    }
    return t20;
};
_c = CarListItem;
const __TURBOPACK__default__export__ = CarListItem;
var _c;
__turbopack_context__.k.register(_c, "CarListItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects 2.0/RentalCar/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBrands",
    ()=>getBrands,
    "getCars",
    ()=>getCars,
    "getSingleCar",
    ()=>getSingleCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const apiNext = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: 'https://car-rental-api.goit.global'
});
const getCars = async (page = 1, limit = 12, filters = {})=>{
    const res = await apiNext.get('/cars', {
        params: {
            page,
            limit,
            ...filters
        }
    });
    return res.data;
};
const getBrands = async ()=>{
    const res = await apiNext.get('/brands');
    return res.data;
};
const getSingleCar = async (id)=>{
    const res = await apiNext.get(`/cars/${id}`);
    return res.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects 2.0/RentalCar/store/useCarListStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarListStore",
    ()=>useCarListStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/lib/api.ts [app-client] (ecmascript)");
;
;
const useCarListStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((set, get)=>({
        cars: [],
        page: 1,
        totalPages: 1,
        isLoading: false,
        filters: {
            brand: '',
            rentalPrice: '',
            minMileage: '',
            maxMileage: ''
        },
        setBrand: (brand)=>{
            set((state)=>({
                    filters: {
                        ...state.filters,
                        brand
                    }
                }));
        },
        setPrice: (price)=>{
            set((state)=>({
                    filters: {
                        ...state.filters,
                        rentalPrice: price
                    }
                }));
        },
        setMileage: (min, max)=>set((state)=>({
                    filters: {
                        ...state.filters,
                        minMileage: min,
                        maxMileage: max
                    }
                })),
        resetFilters: ()=>{
            set({
                filters: {
                    brand: '',
                    rentalPrice: '',
                    minMileage: '',
                    maxMileage: ''
                }
            });
            get().fetchCars(true);
        },
        fetchCars: async (isNewSearch = false)=>{
            set({
                isLoading: true
            });
            const currentPage = isNewSearch ? 1 : get().page;
            const currentFilters = get().filters;
            try {
                const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCars"])(currentPage, 12, currentFilters);
                set((state)=>({
                        cars: isNewSearch ? data.cars : [
                            ...state.cars,
                            ...data.cars
                        ],
                        page: state.page + 1,
                        // page: data.page + 1,
                        totalPages: data.totalPages
                    }));
            } catch (error) {
                console.error('Error:', error);
            } finally{
                set({
                    isLoading: false
                });
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ListItemSkeleton",
    ()=>ListItemSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/@mui/material/esm/Skeleton/Skeleton.js [app-client] (ecmascript) <export default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
;
;
const ListItemSkeleton = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "d8b863be36f4b9a22e38505d72f1b12368acac2b331c0799659bbbb51e682a3c") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "d8b863be36f4b9a22e38505d72f1b12368acac2b331c0799659bbbb51e682a3c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            mb: 2
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: t0,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                variant: "rectangular",
                width: 276,
                height: 268,
                sx: {
                    borderRadius: "12px"
                }
            }, void 0, false, {
                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
                lineNumber: 22,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: 1,
                borderRadius: "12px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                variant: "text",
                width: "100%",
                height: 20
            }, void 0, false, {
                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
                lineNumber: 34,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
            lineNumber: 31,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                mb: 3.5,
                borderRadius: "12px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                variant: "text",
                width: "100%",
                height: 40
            }, void 0, false, {
                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
                lineNumber: 44,
                columnNumber: 8
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            children: [
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Skeleton$2f$Skeleton$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Skeleton$3e$__["Skeleton"], {
                    variant: "rectangular",
                    width: "100%",
                    height: 44,
                    sx: {
                        borderRadius: "12px"
                    }
                }, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
                    lineNumber: 51,
                    columnNumber: 27
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx",
            lineNumber: 51,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
};
_c = ListItemSkeleton;
var _c;
__turbopack_context__.k.register(_c, "ListItemSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/store/useCarListStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$ListItemSkeleton$2f$ListItemSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/ListItemSkeleton/ListItemSkeleton.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const CarList = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "bada24b0422f780740b4e0c31ab1e3d6407f396e0e16d6ae589035532af9363e") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bada24b0422f780740b4e0c31ab1e3d6407f396e0e16d6ae589035532af9363e";
    }
    const { cars, page, totalPages, isLoading, fetchCars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"])();
    let t0;
    let t1;
    if ($[1] !== cars.length || $[2] !== fetchCars) {
        t0 = ()=>{
            if (cars.length === 0) {
                fetchCars(true);
            }
        };
        t1 = [
            fetchCars,
            cars.length
        ];
        $[1] = cars.length;
        $[2] = fetchCars;
        $[3] = t0;
        $[4] = t1;
    } else {
        t0 = $[3];
        t1 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[5] !== fetchCars) {
        t2 = ()=>fetchCars(false);
        $[5] = fetchCars;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    const handleClick = t2;
    let t3;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = Array.from({
            length: 12
        });
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const skeletons = t3;
    let t4;
    if ($[8] !== cars || $[9] !== isLoading) {
        t4 = isLoading && cars.length === 0 ? skeletons.map(_temp) : cars.map(_temp2);
        $[8] = cars;
        $[9] = isLoading;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carsList,
            children: t4
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
            lineNumber: 72,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t4;
        $[12] = t5;
    } else {
        t5 = $[12];
    }
    let t6;
    if ($[13] !== cars.length || $[14] !== handleClick || $[15] !== isLoading || $[16] !== page || $[17] !== totalPages) {
        t6 = page <= totalPages && cars.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreBtn,
            onClick: handleClick,
            disabled: isLoading,
            type: "button",
            children: isLoading ? "Loading..." : "Load more"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
            lineNumber: 80,
            columnNumber: 51
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = cars.length;
        $[14] = handleClick;
        $[15] = isLoading;
        $[16] = page;
        $[17] = totalPages;
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== t5 || $[20] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true);
        $[19] = t5;
        $[20] = t6;
        $[21] = t7;
    } else {
        t7 = $[21];
    }
    return t7;
};
_s(CarList, "MYIeL+3VhjVLlKAA5By7A6ekaHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"]
    ];
});
_c = CarList;
const __TURBOPACK__default__export__ = CarList;
function _temp(_, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$ListItemSkeleton$2f$ListItemSkeleton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItemSkeleton"], {}, index, false, {
        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
        lineNumber: 103,
        columnNumber: 10
    }, this);
}
function _temp2(car) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        item: car
    }, car.id, false, {
        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "CarList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "allFilters": "FilterBar-module__iZLo1q__allFilters",
  "carMileageFirstInput": "FilterBar-module__iZLo1q__carMileageFirstInput",
  "carMileageInputL": "FilterBar-module__iZLo1q__carMileageInputL",
  "carMileageInputR": "FilterBar-module__iZLo1q__carMileageInputR",
  "carMileageInputs": "FilterBar-module__iZLo1q__carMileageInputs",
  "label": "FilterBar-module__iZLo1q__label",
  "searchBtn": "FilterBar-module__iZLo1q__searchBtn",
});
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/store/useCarListStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$number$2d$format$2f$dist$2f$react$2d$number$2d$format$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/react-number-format/dist/react-number-format.es.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
const customBrandStyles = {
    control: (base)=>({
            ...base,
            backgroundColor: 'var(--inputs)',
            borderRadius: '12px',
            border: 'none',
            paddingLeft: '6px',
            paddingRight: '6px',
            // the rest comes from default paddings and margins
            width: '204px',
            height: '44px',
            boxShadow: 'none',
            fontSize: '16px',
            fontFamily: 'var(--font-family)',
            fontWeight: '500',
            marginTop: '8px',
            cursor: 'pointer'
        }),
    placeholder: (base)=>({
            ...base,
            color: 'var(--main)'
        }),
    singleValue: (base)=>({
            ...base,
            color: 'var(--main)'
        }),
    option: (base, { isFocused, isSelected })=>({
            ...base,
            paddingTop: '4px',
            paddingBottom: '4px',
            backgroundColor: isFocused ? 'var(--inputs)' : 'transparent',
            color: isSelected ? 'var(--main)' : 'var(--gray)',
            fontSize: '16px',
            cursor: 'pointer',
            margin: 0,
            width: '100%',
            ':hover': {
                backgroundColor: 'var(--inputs)'
            },
            ':active': {
                backgroundColor: 'var(--inputs)'
            }
        }),
    menu: (base)=>({
            ...base,
            borderRadius: '12px',
            border: '1px solid var(--inputs)',
            boxShadow: 'none',
            paddingRight: '8px',
            paddingLeft: '6px',
            paddingTop: '4px',
            paddingBottom: '4px'
        }),
    menuList: (base)=>({
            ...base,
            maxHeight: '272px',
            overflowY: 'auto',
            '::-webkit-scrollbar': {
                width: '8px'
            },
            '::-webkit-scrollbar-track': {
                background: 'transparent',
                marginTop: '4px',
                marginBottom: '4px'
            },
            '::-webkit-scrollbar-thumb': {
                background: 'var(--gray-light)',
                borderRadius: '10px'
            },
            '::-webkit-scrollbar-thumb:hover': {
                background: 'var(--gray)'
            }
        })
};
const customPriceStyles = {
    control: (base)=>({
            ...base,
            backgroundColor: 'var(--inputs)',
            borderRadius: '12px',
            border: 'none',
            paddingLeft: '6px',
            paddingRight: '6px',
            // the rest comes from default paddings and margins
            width: '204px',
            height: '44px',
            boxShadow: 'none',
            fontSize: '16px',
            fontFamily: 'var(--font-family)',
            fontWeight: '500',
            marginTop: '8px',
            cursor: 'pointer'
        }),
    placeholder: (base)=>({
            ...base,
            color: 'var(--main)'
        }),
    singleValue: (base)=>({
            ...base,
            color: 'var(--main)',
            display: 'flex',
            '&:before': {
                content: '"To $"'
            }
        }),
    option: (base, { isFocused, isSelected })=>({
            ...base,
            paddingTop: '4px',
            paddingBottom: '4px',
            backgroundColor: isFocused ? 'var(--inputs)' : 'transparent',
            color: isSelected ? 'var(--main)' : 'var(--gray)',
            fontSize: '16px',
            cursor: 'pointer',
            margin: 0,
            width: '100%',
            ':hover': {
                backgroundColor: 'var(--inputs)'
            },
            ':active': {
                backgroundColor: 'var(--inputs)'
            }
        }),
    menu: (base)=>({
            ...base,
            borderRadius: '12px',
            border: '1px solid var(--inputs)',
            boxShadow: 'none',
            paddingRight: '8px',
            paddingLeft: '6px',
            paddingTop: '4px',
            paddingBottom: '4px'
        }),
    menuList: (base)=>({
            ...base,
            maxHeight: '188px',
            overflowY: 'auto',
            '::-webkit-scrollbar': {
                width: '8px'
            },
            '::-webkit-scrollbar-track': {
                background: 'transparent',
                marginTop: '4px',
                marginBottom: '4px'
            },
            '::-webkit-scrollbar-thumb': {
                background: 'var(--gray-light)',
                borderRadius: '10px'
            },
            '::-webkit-scrollbar-thumb:hover': {
                background: 'var(--gray)'
            }
        })
};
// interface FilterBarProps {
//   onChange: (value: string) => void;
// }
const priceOptions = [];
for(let i = 30; i <= 200; i += 10){
    priceOptions.push({
        value: i.toString(),
        label: i.toString()
    });
}
const FilterBar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(39);
    if ($[0] !== "1fc51b74e3eae094f1a115eb0a0f0758823da917e04af2cbe8c6b51e2fa094fc") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1fc51b74e3eae094f1a115eb0a0f0758823da917e04af2cbe8c6b51e2fa094fc";
    }
    const { setBrand, setPrice, setMileage, filters, fetchCars, resetFilters } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [brandOptions, setBrandOptions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const fetchOptions = async ()=>{
                ;
                try {
                    const brands = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrands"])();
                    const formattedBrands = brands.map(_temp);
                    setBrandOptions(formattedBrands);
                } catch (t3) {
                    const error = t3;
                    console.error("Failed to fetch brands", error);
                }
            };
            fetchOptions();
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== resetFilters || $[5] !== setBrand) {
        t3 = (selectedBrand)=>{
            if (selectedBrand) {
                setBrand(selectedBrand.value);
            } else {
                resetFilters();
            }
        };
        $[4] = resetFilters;
        $[5] = setBrand;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleBrandChange = t3;
    let t4;
    if ($[7] !== setPrice) {
        t4 = (selectedPrice)=>{
            const value = selectedPrice ? selectedPrice.value : "";
            setPrice(value);
        };
        $[7] = setPrice;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    const handlePriceChange = t4;
    let t5;
    if ($[9] !== filters.maxMileage || $[10] !== setMileage) {
        t5 = (vals)=>setMileage(vals.value, filters.maxMileage);
        $[9] = filters.maxMileage;
        $[10] = setMileage;
        $[11] = t5;
    } else {
        t5 = $[11];
    }
    const handleFromChange = t5;
    let t6;
    if ($[12] !== filters.minMileage || $[13] !== setMileage) {
        t6 = (vals_0)=>setMileage(filters.minMileage, vals_0.value);
        $[12] = filters.minMileage;
        $[13] = setMileage;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    const handleToChange = t6;
    let t7;
    if ($[15] !== fetchCars) {
        t7 = ()=>{
            fetchCars(true);
        };
        $[15] = fetchCars;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    const handleSearch = t7;
    let t8;
    if ($[17] !== brandOptions || $[18] !== handleBrandChange) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: [
                "Car brand",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    options: brandOptions,
                    styles: customBrandStyles,
                    placeholder: "Choose a brand",
                    onChange: handleBrandChange,
                    isSearchable: true,
                    isClearable: true,
                    instanceId: "brand-select"
                }, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
                    lineNumber: 298,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 298,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = brandOptions;
        $[18] = handleBrandChange;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== handlePriceChange) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            children: [
                "Price / 1 hour",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                    options: priceOptions,
                    styles: customPriceStyles,
                    placeholder: "Choose a price",
                    onChange: handlePriceChange,
                    isSearchable: true,
                    isClearable: true,
                    instanceId: "brand-select"
                }, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
                    lineNumber: 307,
                    columnNumber: 53
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 307,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = handlePriceChange;
        $[21] = t9;
    } else {
        t9 = $[21];
    }
    let t10;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].label,
            htmlFor: "from",
            children: "Car mileage / km"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 315,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[22] = t10;
    } else {
        t10 = $[22];
    }
    let t11;
    if ($[23] !== filters.minMileage || $[24] !== handleFromChange) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carMileageFirstInput,
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$number$2d$format$2f$dist$2f$react$2d$number$2d$format$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumericFormat"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carMileageInputL,
                    placeholder: "From",
                    prefix: "From ",
                    thousandSeparator: ",",
                    allowNegative: false,
                    decimalScale: 0,
                    value: filters.minMileage,
                    onValueChange: handleFromChange,
                    title: "Only positive integers allowed"
                }, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
                    lineNumber: 322,
                    columnNumber: 58
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 322,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[23] = filters.minMileage;
        $[24] = handleFromChange;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== filters.maxMileage || $[27] !== handleToChange) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$number$2d$format$2f$dist$2f$react$2d$number$2d$format$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumericFormat"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carMileageInputR,
            placeholder: "To",
            prefix: "To ",
            thousandSeparator: ",",
            allowNegative: false,
            decimalScale: 0,
            value: filters.maxMileage,
            onValueChange: handleToChange,
            title: "Only positive integers allowed"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 331,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = filters.maxMileage;
        $[27] = handleToChange;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t11 || $[30] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carMileageInputs,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 340,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = t11;
        $[30] = t12;
        $[31] = t13;
    } else {
        t13 = $[31];
    }
    let t14;
    if ($[32] !== handleSearch) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBtn,
            onClick: handleSearch,
            children: "Search"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[32] = handleSearch;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    let t15;
    if ($[34] !== t13 || $[35] !== t14 || $[36] !== t8 || $[37] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].allFilters,
            children: [
                t8,
                t9,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 357,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t13;
        $[35] = t14;
        $[36] = t8;
        $[37] = t9;
        $[38] = t15;
    } else {
        t15 = $[38];
    }
    return t15;
};
_s(FilterBar, "pGtKFVT0Yjc9+kbdUe/G97t92Cg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"]
    ];
});
_c = FilterBar;
const __TURBOPACK__default__export__ = FilterBar;
function _temp(brand) {
    return {
        value: brand,
        label: brand
    };
}
var _c;
__turbopack_context__.k.register(_c, "FilterBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "container": "page-module__yGTRfa__container",
});
}),
"[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.module.css [app-client] (css module)");
'use client';
;
;
;
;
;
const Catalog = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "40978604e3a3c6ae042f92152bc1705908d60538ac13b0570e918395b97a4b2f") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "40978604e3a3c6ae042f92152bc1705908d60538ac13b0570e918395b97a4b2f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
                    lineNumber: 17,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
                    lineNumber: 17,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
            lineNumber: 17,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
};
_c = Catalog;
const __TURBOPACK__default__export__ = Catalog;
var _c;
__turbopack_context__.k.register(_c, "Catalog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_Projects%202_0_RentalCar_7f2d25c5._.js.map