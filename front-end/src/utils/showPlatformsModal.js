let expandedPlatform = true;

export default function showPlatforms(boolean) {
    let checkPlatforms;

    if(boolean) {
        checkPlatforms = document.getElementById("platforms-select-game");
    } else {
        checkPlatforms = document.getElementById("platforms-select-edit-game");
    }

    if (!expandedPlatform) {
        checkPlatforms.style.display = "block";
        expandedPlatform = true;
    } else {
        checkPlatforms.style.display = "none";
        expandedPlatform = false;
    }
}