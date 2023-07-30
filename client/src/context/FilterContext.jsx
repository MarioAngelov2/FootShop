import { createContext, useContext, useState } from "react";

const FilteringContext = createContext();

export const FilteringProvider = ({ children }) => {
    const [filteredData, setFilteredData] = useState({
        selectPriceRange: {
            all: false,
            lowerRange: false,
            lowerMidRange: false,
            midHighRange: false,
            aboveAll: false,
        },
        selectColor: {
            red: false,
            white: false,
            pink: false,
            yellow: false,
            brown: false,
            black: false,
            olive: false,
            blue: false,
        },
    });

    return (
        <FilteringContext.Provider
            value={{
                filteredData,
                setFilteredData,
            }}
        >
            {children}
        </FilteringContext.Provider>
    );
};

export function useFilter() {
    return useContext(FilteringContext);
}
