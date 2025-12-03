export const formatPrice = (price: number): string => {
    if (price === undefined || price === null) return '0.00';

    if (price < 1) {
        return price.toLocaleString(undefined, { minimumFractionDigits: 5, maximumFractionDigits: 5 });
    } else if (price < 10) {
        return price.toLocaleString(undefined, { minimumFractionDigits: 4, maximumFractionDigits: 4 });
    } else {
        return price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
};
