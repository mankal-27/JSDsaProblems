function calculatePercentageValue(percentage, total) {
    return (percentage * total) / 100;
}
function calculateTotalSalesWithTax(products, taxRate) {
    const totalSale = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
    const totalValueWithTax = calculatePercentageValue(taxRate,totalSale)
    const result = totalSale + totalValueWithTax
    return result
}

module.exports = calculateTotalSalesWithTax;
