import React from "react";

const ScholarshipTable = ({ filteredData, toggleRowExpansion, expandedRows }) => {
  const commonTableClass = "w-full mx-auto border-collapse text-sm sm:text-base";
  const commonHeaderClass = "bg-gray-200 font-bold text-center text-xs sm:text-sm md:text-base";
  const commonCellClass = "p-2 border border-gray-300 text-center text-xs sm:text-sm md:text-base";

  return (
    <div className="w-full mx-auto overflow-x-auto">
      <table className={`${commonTableClass} border border-gray-300`}>
        <thead>
          <tr className={commonHeaderClass}>
            <th className="p-2 border-r border-gray-300">Scholarship Name</th>
            <th className="p-2 border-r border-gray-300">Status</th>
            <th className="p-2 border-r border-gray-300">Gender</th>
            <th className="p-2 border-r border-gray-300">Category</th>
            <th className="p-2">Application Link</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <React.Fragment key={index}>
              <tr
                className={`${commonCellClass} ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
                onClick={() => toggleRowExpansion(index)}
              >
                <td className="p-2 border-r border-gray-300">{item["Scholarship Name"]}</td>
                <td className="p-2 border-r border-gray-300">{item.Status}</td>
                <td className="p-2 border-r border-gray-300">{item.Gender}</td>
                <td className="p-2 border-r border-gray-300">{item.Category}</td>
                <td className="p-2">
                  <a
                    href={item["Application Link"]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B52326] hover:underline"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Apply
                  </a>
                </td>
              </tr>
              {expandedRows[index] && (
                <tr className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                  <td colSpan="5" className="p-4 border border-gray-300">
                    <div className="text-left text-sm sm:text-base">
                      <p className="mb-2"><b>Eligibility:</b> {item.Eligibility}</p>
                      <p className="mb-2"><b>Benefits:</b> {item.Benefits}</p>
                      <p className="mb-2"><b>Doc Required:</b> {item["Doc Required"]}</p>
                      <p className="mb-2"><b>Can Class 11 Apply:</b> {item["Class 11 can Apply"]}</p>
                      <p className="mb-2"><b>Can Class 12 Apply:</b> {item["Class 12 can Apply"]}</p>
                      <p className="mb-2"><b>Family Income (in LPA):</b> {item["Family Income (in LPA)"]}</p>
                      <p className="mb-2"><b>Last Date:</b> {item["Last Date"]}</p>
                      <p className="mb-2"><b>Open for Stream:</b> {item["Open for Stream"]}</p>
                      <p className="mb-2"><b>Special Criteria:</b> {item["Special Criteria"]}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScholarshipTable;
