function pyramid(character, height, inverted) {
    const rows = [];

    for (let i = 0; i < height; i++) {
        const spaces = inverted ? 2 * i : 2 * (height - i) - 1;
        const count = inverted ? 2 * (height - i) - 1 : 2 * i + 1;

        rows.push(" ".repeat(spaces) + character.repeat(count));
    }

    return rows.join("\n");
}
