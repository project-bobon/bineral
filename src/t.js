const textData = {
  CALCULATE: {
    EN: "Calculate",
    VN: "Tính kết quả"
  },
  FERTILIZER_CALCULATOR: {
    EN: "Fertilizer Calculator",
    VN: "Bảng tính lượng phân bón"
  },
  OM_CLAY_PERCENTAGE: {
    EN: "OM & Clay %",
    VI: "Tỉ lệ % mùn & sét"
  },
  SOIL_DENSITY: {
    EN: "Soil Density",
    VN: "Tỉ trọng đất"
  },
  REQUIRED_FIELD: {
    EN: "This field is required",
    VN: "Thông tin bắt buộc"
  }
};

let t = (data = "") => {
  let currentLang = "EN";
  if (typeof(textData[data]) === "undefined") {
    return "";
  } else {
    return textData[data][currentLang];
  }
};

export default t;
