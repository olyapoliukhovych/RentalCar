(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/Projects 2.0/RentalCar/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBrands",
    ()=>getBrands,
    "getCars",
    ()=>getCars
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
            brand: ''
        },
        setBrand: (brand)=>{
            set((state)=>({
                    filters: {
                        ...state.filters,
                        brand
                    }
                }));
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
                        page: data.page + 1,
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
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carsList": "CarList-module__7yQoGG__carsList",
});
}),
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomText": "CarListItem-module__fZFi2q__bottomText",
  "carImg": "CarListItem-module__fZFi2q__carImg",
  "carsLiButton": "CarListItem-module__fZFi2q__carsLiButton",
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
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    if ($[0] !== "7d57c0be890f1a92651b934e31b4afb4f2c85029bcaf429ee42262d9fb8e3214") {
        for(let $i = 0; $i < 23; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7d57c0be890f1a92651b934e31b4afb4f2c85029bcaf429ee42262d9fb8e3214";
    }
    const { item } = t0;
    let t1;
    if ($[1] !== item.description || $[2] !== item.img) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carImg,
            src: item.img,
            width: 276,
            height: 268,
            alt: item.description
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 21,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = item.description;
        $[2] = item.img;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== item.brand || $[5] !== item.model || $[6] !== item.year) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topText,
            children: [
                item.brand,
                " ",
                item.model,
                ", ",
                item.year
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = item.brand;
        $[5] = item.model;
        $[6] = item.year;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[8] !== item.rentalPrice) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topText,
            children: [
                "$ ",
                item.rentalPrice
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = item.rentalPrice;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    let t4;
    if ($[10] !== t2 || $[11] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].topTextPosition,
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 48,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t2;
        $[11] = t3;
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    let t5;
    if ($[13] !== item.address || $[14] !== item.mileage || $[15] !== item.rentalCompany || $[16] !== item.type) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bottomText,
            children: [
                item.address,
                " | ",
                item.rentalCompany,
                " | ",
                item.type,
                " | ",
                item.mileage
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = item.address;
        $[14] = item.mileage;
        $[15] = item.rentalCompany;
        $[16] = item.type;
        $[17] = t5;
    } else {
        t5 = $[17];
    }
    let t6;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carsLiButton,
            children: "Read more"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = t6;
    } else {
        t6 = $[18];
    }
    let t7;
    if ($[19] !== t1 || $[20] !== t4 || $[21] !== t5) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carsLi,
            children: [
                t1,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx",
            lineNumber: 75,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[19] = t1;
        $[20] = t4;
        $[21] = t5;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    return t7;
};
_c = CarListItem;
const __TURBOPACK__default__export__ = CarListItem;
var _c;
__turbopack_context__.k.register(_c, "CarListItem");
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
// import { Car } from '@/lib/api';
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/CarListItem/CarListItem.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/store/useCarListStore.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// type CarListProps = {
//   cars: Car[];
// };
const CarList = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(15);
    if ($[0] !== "9f7be3b396f54d65a519e5857e2d3400bc1ae7edf2afe797cf292685121b34aa") {
        for(let $i = 0; $i < 15; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9f7be3b396f54d65a519e5857e2d3400bc1ae7edf2afe797cf292685121b34aa";
    }
    const { cars, page, totalPages, isLoading, fetchCars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"])();
    let t0;
    if ($[1] !== fetchCars) {
        t0 = ()=>fetchCars(false);
        $[1] = fetchCars;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    const handleClick = t0;
    let t1;
    if ($[3] !== cars) {
        t1 = cars.map(_temp);
        $[3] = cars;
        $[4] = t1;
    } else {
        t1 = $[4];
    }
    let t2;
    if ($[5] !== t1) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carsList,
            children: t1
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== handleClick || $[8] !== isLoading || $[9] !== page || $[10] !== totalPages) {
        t3 = page <= totalPages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].loadMoreBtn,
            onClick: handleClick,
            disabled: isLoading,
            children: isLoading ? "Loading..." : " Load more"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
            lineNumber: 55,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = handleClick;
        $[8] = isLoading;
        $[9] = page;
        $[10] = totalPages;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== t2 || $[13] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t2,
                t3
            ]
        }, void 0, true);
        $[12] = t2;
        $[13] = t3;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    return t4;
};
_s(CarList, "7YDefshOyqCwAW4j/IhiJMTWQRg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"]
    ];
});
_c = CarList;
const __TURBOPACK__default__export__ = CarList;
function _temp(car) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarListItem$2f$CarListItem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        item: car
    }, car.id, false, {
        fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx",
        lineNumber: 77,
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
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const customStyles = {
    control: (base)=>({
            ...base,
            backgroundColor: 'var(--inputs)',
            borderRadius: '12px',
            border: 'none',
            padding: '6px 6px',
            width: '204px',
            fontFamily: 'var(--font-family)'
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
            // backgroundColor: isSelected ? '#fff' : isFocused ? '#f2f2f2' : '#fff',
            color: isSelected ? 'var(--main)' : 'var(--gray)',
            cursor: 'pointer'
        })
};
// interface FilterBarProps {
//   onChange: (value: string) => void;
// }
const FilterBar = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16);
    if ($[0] !== "7a325b3756eb17702d14124dce0cf4e8024e8d42ccceb74b15928ac6b28325dc") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7a325b3756eb17702d14124dce0cf4e8024e8d42ccceb74b15928ac6b28325dc";
    }
    const { setBrand, fetchCars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"])();
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
    if ($[4] !== fetchCars) {
        t3 = ()=>{
            fetchCars(true);
        };
        $[4] = fetchCars;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleSearch = t3;
    let t4;
    if ($[6] !== setBrand) {
        t4 = (option)=>{
            if (option) {
                setBrand(option.value);
            }
        };
        $[6] = setBrand;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== brandOptions || $[9] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
            options: brandOptions,
            styles: customStyles,
            placeholder: "Choose a brand",
            onChange: t4,
            isSearchable: true,
            isClearable: true,
            instanceId: "brand-select"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = brandOptions;
        $[9] = t4;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== handleSearch) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].searchBtn,
            onClick: handleSearch,
            children: "Search"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 126,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = handleSearch;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    let t7;
    if ($[13] !== t5 || $[14] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].allFilters,
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 134,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t5;
        $[14] = t6;
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    return t7;
};
_s(FilterBar, "Vz26k/Da0VcAYTcyugpUXb8ftU8=", false, function() {
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
  "loadMoreBtn": "page-module__yGTRfa__loadMoreBtn",
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/store/useCarListStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Developer/Projects 2.0/RentalCar/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// import { getCars } from '@/lib/api';
const Catalog = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "b9aedad5864eb55db74953701a2d4a8c25dfade02380cae48db5216bf8b024c5") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9aedad5864eb55db74953701a2d4a8c25dfade02380cae48db5216bf8b024c5";
    }
    const { cars, fetchCars } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"])();
    let t0;
    let t1;
    if ($[1] !== fetchCars) {
        t0 = ()=>{
            fetchCars(true);
        };
        t1 = [
            fetchCars
        ];
        $[1] = fetchCars;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
            lineNumber: 40,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== cars) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    cars: cars
                }, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
                    lineNumber: 47,
                    columnNumber: 45
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
            lineNumber: 47,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = cars;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    return t3;
};
_s(Catalog, "cFahxpY0fEtAThPv7UNHxPIPsE0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$store$2f$useCarListStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarListStore"]
    ];
});
_c = Catalog;
const __TURBOPACK__default__export__ = Catalog;
var _c;
__turbopack_context__.k.register(_c, "Catalog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Developer_Projects%202_0_RentalCar_a0cf187c._.js.map