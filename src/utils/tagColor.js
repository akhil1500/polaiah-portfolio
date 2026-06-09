export const getTagColor = (totalCards = 0) => {
    const colors = ["blue", "orange", "green", "purple"]
    if (totalCards <= 0) return [];

    // Rule 1: <= 3 cards -> use 2 colors
    if (totalCards <= 3) {
        const selectedColors = colors.slice(0,2);

        if (totalCards === 1) {
            return [selectedColors[0]];
        }

        if (totalCards === 2) {
            return selectedColors;
        }

        return [
            selectedColors[0],
            ...selectedColors
        ]
    }

    // Rule 2: 4-5 cards -> use all 4 colors
    if (totalCards <= 5) {
        const result = [...colors];

        // Rule 3: duplicate colors must be consecutive
        while (result.length < totalCards) {
            result.push(result[result.length - 1]);
        }

        return result;
    }
    // More than 5 cards (optional extension)
    const result = [...colors];

    while (result.length < totalCards) {
        result.push(result[result.length - 1]);
    }
    return result;
}