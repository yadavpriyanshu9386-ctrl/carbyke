// Vehicle Health Score logic (SRS: FR-HS-01..06).
// Bands: 85-100 Excellent, 70-84 Good, 50-69 Average, below 50 Needs caution.
// Classes are full strings so Tailwind can find them. Colours match the dark DriveDeals theme.

export function getHealthBand(score) {
  if (score >= 85)
    return { label: "Excellent", className: "border-emerald-800 bg-emerald-950/60 text-emerald-200" };
  if (score >= 70)
    return { label: "Good", className: "border-sky-800 bg-sky-950/60 text-sky-200" };
  if (score >= 50)
    return { label: "Average", className: "border-amber-800 bg-amber-950/60 text-amber-200" };
  return { label: "Needs caution", className: "border-red-800 bg-red-950/60 text-red-200" };
}

// Weights from the documentation (Section 5.1). To be tuned with real data.
export const HEALTH_COMPONENTS = [
  { key: "documents", label: "Document verification", max: 30 },
  { key: "service", label: "Service and challan history", max: 20 },
  { key: "photos", label: "Photo quality and authenticity", max: 20 },
  { key: "seller", label: "Seller verification", max: 15 },
  { key: "reviews", label: "Reviews and platform history", max: 15 },
];

// Illustrative split of a total score across components, until the backend sends real values.
export function getMockBreakdown(score) {
  return HEALTH_COMPONENTS.map((c) => ({ ...c, value: Math.round((c.max * score) / 100) }));
}

// Preliminary score for a new listing, shown at the end of the Sell flow (FR-HS-01, FR-HS-04).
// input = { docsUploaded: number, photosUploaded: number, hasServiceRecords: boolean }
export function estimateInitialScore(input) {
  const documents = Math.round((30 * Math.min(input.docsUploaded, 3)) / 3);
  const photos = Math.round((20 * Math.min(input.photosUploaded, 6)) / 6);
  const service = input.hasServiceRecords ? 10 : 0;
  const total = documents + photos + service;

  const tips = [];
  if (input.docsUploaded < 3) tips.push("Upload RC, insurance and PUC to earn the full 30 document points.");
  if (!input.hasServiceRecords) tips.push("Add service records to earn history points.");
  tips.push("Complete seller ID verification to earn up to 15 points after approval.");
  tips.push("Reviews from completed deals add up to 15 points over time.");

  return {
    total,
    parts: [
      { label: "Documents", value: documents, max: 30 },
      { label: "Service history", value: service, max: 20 },
      { label: "Photos", value: photos, max: 20 },
      { label: "Seller verification", value: 0, max: 15 },
      { label: "Reviews", value: 0, max: 15 },
    ],
    tips,
  };
}
