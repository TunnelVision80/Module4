

const regionAvg = (req, res) => {
  const region = req.query.region || req.params.region;

  if (region) {
    // If a specific region is requested, return its value
    const regionData = data.regionAverages[region?.toLowerCase()];
    if (!regionData) {
      return res.status(400).json({ error: "Invalid region. Please select a valid region." });
    }

    return res.status(200).json({
      message: "Region data retrieved successfully",
      region,
      average: regionData,
    });
  } else {
    // If no region is specified, calculate the overall average
    const values = Object.values(data.regionAverages);
    const total = values.reduce((sum, num) => sum + num, 0);
    const overallAverage = total / values.length;

    return res.status(200).json({
      message: "Overall region average calculated successfully",
      overallAverage,
    });
  }
};

module.exports = regionAvg;
