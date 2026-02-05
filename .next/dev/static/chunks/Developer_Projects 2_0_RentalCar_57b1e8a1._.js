(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/Developer/Projects 2.0/RentalCar/app/components/CarList/CarList.tsx'\n\nExpected '</', got '}'");
e.code = 'MODULE_UNPARSABLE';
throw e;
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
    if ($[0] !== "992ec742b72465994609d4bac548661247046963e62ed9873be6fb383fc1a6cd") {
        for(let $i = 0; $i < 39; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "992ec742b72465994609d4bac548661247046963e62ed9873be6fb383fc1a6cd";
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
                    thousandSeparator: " ",
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
            thousandSeparator: " ",
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
// import { useCarListStore } from '@/store/useCarListStore';
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
// import { useEffect } from 'react';
// import { getCars } from '@/lib/api';
const Catalog = ()=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "effb4cf7eed8e859766bc9069246c035b1678c91c95670df93ece89f25123d77") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "effb4cf7eed8e859766bc9069246c035b1678c91c95670df93ece89f25123d77";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$catalog$2f$page$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].container,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$FilterBar$2f$FilterBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
                    lineNumber: 21,
                    columnNumber: 41
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Developer$2f$Projects__2$2e$0$2f$RentalCar$2f$app$2f$components$2f$CarList$2f$CarList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
                    lineNumber: 21,
                    columnNumber: 54
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Developer/Projects 2.0/RentalCar/app/catalog/page.tsx",
            lineNumber: 21,
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

//# sourceMappingURL=Developer_Projects%202_0_RentalCar_57b1e8a1._.js.map