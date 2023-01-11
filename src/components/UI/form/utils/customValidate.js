export const validateSeries = (series) => {
    return !((series > 0) && (series < 10000))
        ? "Серия должна быть не менее 1 и не более 10000" : ""
}

export const validateCount = (count) => {
    return !((count > 0) && (count < 10))
 ?"Количество не может быть менее 1 и не более 10": ""
}


