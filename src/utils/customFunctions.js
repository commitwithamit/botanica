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
