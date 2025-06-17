export function titleCase(name) {
    const removeHypen = name.replace(/-/g, " "); // succulents-and-cacti (removing hypens)
    const splitName = removeHypen.split(" "); // succulents and cacti (spliting it and it becomes this ["succulents", "and", "cacti"])
    let titleCase = "";

    for (let i = 0; i < splitName.length; i++) {
        let charArray = splitName[i].split(""); // ["s","u","c","c","u","l","e","n","t","s"] (on first loop)
        charArray[0] = charArray[0].toUpperCase(); // cpitalizing the first letter from the above array
        // now we will convert the array into string and replacing "," with nothing (removing comma)
        if (i > 0) {
            titleCase += ` ${charArray.toString().replaceAll(",", "").replace("Tillandsia", "(Tillandsia)")}`;
        } else {
            titleCase += charArray.toString().replaceAll(",", "");
        }
    }
    return titleCase;
}

// Ball Moss
export function slugify(string) {
    let result = "";
    result = string.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "-");
    return result;
}

// calculates discount to show "45% off"
export function discountCalculator(mrp, sp) {
    // Discount Percentage = (Discount / Original Price) * 100 
    return Math.round(((mrp - sp) / mrp) * 100);
}

// for putting commas in currency like "3,999"
export function price(amount) {
    return amount.toLocaleString("en-IN", { minimumFractionDigits: 0 });
}

// for filtering products by category
// export function getProductByCategroy(allProducts, slug) {
//     let convertedSlug = titleCase(slug[[slug.length - 1]]).replace("And", "&");
//     return allProducts.filter(p => p.category === convertedSlug);
// }

export function sortingProducts(sortType) {
    return function (a, b) {
        if (sortType === "Price, Low to High") {
            return a.price - b.price;
        } else if (sortType === "Price, High to Low") {
            return b.price - a.price;
        } else {
            return 0;
        }
    }
}

// export function getProductByCategroy(allProducts, slug, filter){
//     let convertedSlug = titleCase(slug[[slug.length-1]]).replace("And", "&");
//     let filtered = allProducts.filter(p=> p.category === convertedSlug);

//     if(filter === "Price, Low to High"){
//         return filtered.sort((a,b)=>{return a.price - b.price});
//     }else if(filter === "Price, High to Low"){
//         return filtered.sort((a,b)=>{return b.price - a.price});
//     }else{
//         return allProducts.filter(p=> p.category === convertedSlug);
//     }
// }