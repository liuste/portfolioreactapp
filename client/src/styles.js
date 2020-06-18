export const setFlex = ({x = "center", y = "center" } = {} ) => {
    return `display:flex; align-items:${y}; justify-content:${x}`;
}

export const setGridItem = ({x = "center", y = "center" } = {} ) => {
    return `display:grid; align-self:${y}; justify-self:${x}`;
}