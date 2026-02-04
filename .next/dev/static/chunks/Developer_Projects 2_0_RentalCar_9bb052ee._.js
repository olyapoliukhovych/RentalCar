(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "allFilters": "FilterBar-module__iZLo1q__allFilters",
});
}),
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
            // const { page, filters, cars } = get();
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
    if ($[0] !== "2376894012fb48334bdb4245867582c592cfa457e7fdc66ea692689230cad01e") {
        for(let $i = 0; $i < 16; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2376894012fb48334bdb4245867582c592cfa457e7fdc66ea692689230cad01e";
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
        t4 = (option)=>setBrand("brand", option?.value);
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
            instanceId: "brand-select"
        }, void 0, false, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/components/FilterBar/FilterBar.tsx",
            lineNumber: 113,
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
            lineNumber: 122,
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
            lineNumber: 130,
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
]);

//# sourceMappingURL=Developer_Projects%202_0_RentalCar_9bb052ee._.js.map