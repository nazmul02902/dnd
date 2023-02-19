const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "cyan",
    "purple",
    "pink"
];
const randomColorGenerate = (variant = "") => {
    const color = colors[Math.floor(Math.random()*colors.length)];
    return color + variant
}

export default randomColorGenerate;