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
            );
        } else if (filteredData.selectPriceRange.midHighRange) {
            return (
                parseInt(product.price) >= 150 && parseInt(product.price) <= 250
            );
        } else if (filteredData.selectPriceRange.all) {
            return parseInt(product.price) > 250;
        }

        if (!filteredData.selectColor) {
            return true;
        }

        if (filteredData.selectColor.red) {
            return product.color === "red";
        } else if (filteredData.selectColor.white) {
            return product.color === "white";
        } else if (filteredData.selectColor.pink) {
            return product.color === "pink";
        } else if (filteredData.selectColor.yellow) {
            return product.color === "yellow";
        } else if (filteredData.selectColor.brown) {
            return product.color === "brown";
        } else if (filteredData.selectColor.black) {
            return product.color === "black";
        } else if (filteredData.selectColor.olive) {
            return product.color === "olive";
        } else if (filteredData.selectColor.blue) {
            return product.color === "blue";
        }

        return false;
    });
}
