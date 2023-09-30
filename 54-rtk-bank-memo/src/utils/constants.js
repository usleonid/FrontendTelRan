export const names = ['Braavos', 'Riverlands', 'Westerlads', 'Crowlands']
export const getRandomIndex = (bound) => {
    return Math.trunc(Math.random() * bound);
}

export const getBank = (index) => ({
    name: names[index]
})