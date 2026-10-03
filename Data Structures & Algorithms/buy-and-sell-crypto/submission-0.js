class Solution {
    maxProfit(prices) {
        let minPrice = prices[0];
        let maxProfit = 0;

        for (const price of prices) {
            if (price < minPrice) {
                minPrice = price;
            } else {
                let profit = price - minPrice;
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }
        return maxProfit;
    }
}
