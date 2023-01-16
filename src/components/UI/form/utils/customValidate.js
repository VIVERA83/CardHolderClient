export const validateSeries = (series) => {
    return !((series > 0) && (series < 10000))
        ? "Серия должна быть не менее 1 и не более 10000" : ""
}

export const validateCount = (count) => {
    return !((count > 0) && (count < 10))
        ? "Количество не может быть менее 1 и не более 10" : ""
}


export const validateFormData = (formData, setFormError) => {
    setFormError({
        series: validateSeries(formData.series),
        count: validateCount(formData.count),
        isError: Boolean(validateSeries(formData.series) || validateCount(formData.count))
    })
}