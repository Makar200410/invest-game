export const formatPrice = (price: number): string => {
    if (price === undefined || price === null) return '0.00';

    if (price >= 1) {
        return price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    } else {
        return price.toLocaleString(undefined, { minimumFractionDigits: 3, maximumFractionDigits: 3 });
    }
};
