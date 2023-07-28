export function sortFilteredProducts(filteredProducts, sortOption) {
    switch (sortOption) {
        case "alphabeticalAZ":
            return [...filteredProducts].sort((a, b) =>
                a.title.localeCompare(b.title)
            );
        case "alphabeticalZA":
            return [...filteredProducts].sort((a, b) =>
                b.title.localeCompare(a.title)
            );
        case "lowestPrice":
            return [...filteredProducts].sort((a, b) => a.price - b.price);
        case "highestPrice":
            return [...filteredProducts].sort((a, b) => b.price - a.price);
        default:
            return filteredProducts;
    }
}
