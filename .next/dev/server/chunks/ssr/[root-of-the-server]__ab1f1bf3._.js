module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Developer/Projects 2.0/RentalCar/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/Projects 2.0/RentalCar/app/not-found.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/not-found.tsx [app-rsc] (ecmascript)"));
}),
"[project]/Developer/Projects 2.0/RentalCar/app/catalog/loading.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/catalog/loading.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Developer/Projects 2.0/RentalCar/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBrands",
    ()=>getBrands,
    "getCars",
    ()=>getCars,
    "getSingleCar",
    ()=>getSingleCar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const apiNext = __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
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
}),
"[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/CarDetails.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carDetailsList": "CarDetails-module__sk-neG__carDetailsList",
  "container": "CarDetails-module__sk-neG__container",
  "description": "CarDetails-module__sk-neG__description",
  "detailsCarImg": "CarDetails-module__sk-neG__detailsCarImg",
  "id": "CarDetails-module__sk-neG__id",
  "listItem": "CarDetails-module__sk-neG__listItem",
  "listTitle": "CarDetails-module__sk-neG__listTitle",
  "location": "CarDetails-module__sk-neG__location",
  "mainDescription": "CarDetails-module__sk-neG__mainDescription",
  "mainTitle": "CarDetails-module__sk-neG__mainTitle",
  "price": "CarDetails-module__sk-neG__price",
});
}),
"[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/CarDetails.module.css [app-rsc] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
const CarDetails = async ({ params })=>{
    const { id } = await params;
    const car = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSingleCar"])(id);
    const splitAddress = car.address.split(', ');
    //   const address = splitAddress[0]; // no need now
    const city = splitAddress[1];
    const country = splitAddress[2];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].contentL,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: car.img,
                    width: 640,
                    height: 512,
                    alt: car.description,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].detailsCarImg
                }, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                    lineNumber: 21,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].contentR,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mainDescription,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].mainTitle,
                                children: [
                                    car.brand,
                                    " ",
                                    car.model,
                                    ", ",
                                    car.year
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].id,
                                children: "Id: 2983"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].location,
                                children: [
                                    city,
                                    ", ",
                                    country,
                                    "     Mileage: ",
                                    car.mileage.toLocaleString('uk-UA'),
                                    " km"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].price,
                                children: [
                                    "$",
                                    car.rentalPrice
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 40,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].description,
                                children: car.description
                            }, void 0, false, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].otherCarDetails,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listTitle,
                                children: "Rental Conditions:"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].carDetailsList,
                                children: car.rentalConditions.map((con, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                        children: con
                                    }, index, false, {
                                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 46,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listTitle,
                                children: "Car Specifications:"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].carDetailsList,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                        children: [
                                            "Year: ",
                                            car.year
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                        children: [
                                            "Type: ",
                                            car.type.charAt(0).toUpperCase() + car.type.slice(1).toLowerCase()
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                        children: [
                                            "Fuel Consumption: ",
                                            car.fuelConsumption
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                        children: [
                                            "Engine Size: ",
                                            car.engineSize
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listTitle,
                                children: "Accessories and functionalities:"
                            }, void 0, false, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].carDetailsList,
                                children: [
                                    car.accessories.map((acc, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                            children: acc
                                        }, index, false, {
                                            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    car.functionalities.map((fun, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f5b$id$5d2f$CarDetails$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].listItem,
                                            children: fun
                                        }, index, false, {
                                            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CarDetails;
}),
"[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/catalog/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ab1f1bf3._.js.map