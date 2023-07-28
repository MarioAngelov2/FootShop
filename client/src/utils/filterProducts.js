export function filterProducts(products, filteredData) {
    return products.filter((product) => {
        if (!filteredData.selectPriceRange) {
            return true;
        }

        if (filteredData.selectPriceRange.lowerRange) {
            return (
                parseInt(product.price) >= 0 && parseInt(product.price) <= 50
            );
        } else if (filteredData.selectPriceRange.lowerMidRange) {
            return (
                parseInt(product.price) >= 50 && parseInt(product.price) <= 100
            )
        } else if (filteredData.selectPriceRange.midHighRange) {
            return (
                parseInt(product.price) >= 150 && parseInt(product.price) <= 250
            ) 
        } else if (filteredData.selectPriceRange.all) {
            return (
                parseInt(product.price) > 250 
            ) 
        }

        return false
    });
}
