// Sell-or-Rent Calculator logic (SRS: FR-SR-02..05). All outputs are ESTIMATES.

export const PLATFORM_FEE_PERCENT = 10; // assumption, to be confirmed with the business model
export const DEFAULT_DEPRECIATION_PERCENT = 12; // assumed yearly drop in resale value
const RENT_THRESHOLD = 5; // % of sale value per year
const SELL_THRESHOLD = -5;

// input = { salePrice, dailyRate, rentedDaysPerMonth, monthlyCosts, annualDepreciationPercent }
export function calculateSellOrRent(input) {
  const grossMonthly = input.dailyRate * input.rentedDaysPerMonth;
  const platformFee = (grossMonthly * PLATFORM_FEE_PERCENT) / 100;
  const netMonthly = grossMonthly - platformFee - input.monthlyCosts;

  const breakEvenMonths = netMonthly > 0 ? input.salePrice / netMonthly : null;
  const annualNetRent = netMonthly * 12;
  const annualDepreciation = (input.salePrice * input.annualDepreciationPercent) / 100;
  const netAdvantage = annualNetRent - annualDepreciation; // yearly benefit of renting over selling now
  const advantagePercent = (netAdvantage / input.salePrice) * 100;

  let recommendation;
  let reason;
  if (netMonthly <= 0) {
    recommendation = "Sell";
    reason = "Rental income does not cover your monthly costs, so renting would lose money.";
  } else if (advantagePercent > RENT_THRESHOLD) {
    recommendation = "Rent";
    reason = "Yearly rental income is clearly higher than the value your vehicle loses.";
  } else if (advantagePercent < SELL_THRESHOLD) {
    recommendation = "Sell";
    reason = "Your vehicle loses more value in a year than renting would earn.";
  } else {
    recommendation = "Either";
    reason = "Rental income and depreciation are close, so other factors (hassle, need for cash) decide.";
  }

  return {
    grossMonthly,
    platformFee,
    netMonthly,
    breakEvenMonths,
    annualNetRent,
    annualDepreciation,
    netAdvantage,
    advantagePercent,
    recommendation,
    reason,
  };
}
