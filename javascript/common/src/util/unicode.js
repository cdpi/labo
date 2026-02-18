//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function getCodePoints(text) {
    const codePoints = new Array();
    for (const character of text) {
        const codePoint = character.codePointAt(0);
        if (codePoint) {
            codePoints.push(codePoint);
        }
    }
    return codePoints;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VARIATION SELECTOR-16 (0xFE0F) = Emoji Variation Selector
// https://www.unicode.org/charts/PDF/UFE00.pdf
const TEXT_VARIATION_SELECTOR = 0xFE0E;
const EMOJI_VARIATION_SELECTOR = 0xFE0F;
const notTextVariationSelector = (codePoint) => {
    return (codePoint !== TEXT_VARIATION_SELECTOR);
};
const notEmojiVariationSelector = (codePoint) => {
    return (codePoint !== EMOJI_VARIATION_SELECTOR);
};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
export { TEXT_VARIATION_SELECTOR, EMOJI_VARIATION_SELECTOR, getCodePoints, notTextVariationSelector, notEmojiVariationSelector };
