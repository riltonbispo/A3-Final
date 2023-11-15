let expandedCategory = true;

export default function showCategories(boolean) {
    let checkCategories;

    if(boolean) {
        checkCategories = document.getElementById("categories-select-game");
    } else {
        checkCategories = document.getElementById("categories-select-edit-game");
    }

    if (!expandedCategory) {
        checkCategories.style.display = "block";
        expandedCategory = true;
    } else {
        checkCategories.style.display = "none";
        expandedCategory = false;
    }
}