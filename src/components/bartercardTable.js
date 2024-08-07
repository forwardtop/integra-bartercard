import React from "react";

const tableData = {
  commitmentPeriods: [
    "M2M",
    "12 Months",
    "24 Months",
    "36 Months",
    "48 Months",
    "60 Months",
  ],
  prePayWithBartercard: [
    "0",
    "2 Months",
    "4 Months",
    "6 Months",
    "8 Months",
    "10 Months",
  ],
};

const BarterCardTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 mb-16">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-center text-lg font-medium text-[#91b828]  tracking-wider border border-slid border-gray-700">
              Commitment Period
            </th>
            <th className="px-6 py-3 text-center text-lg font-medium text-[#91b828] tracking-wider border border-slid border-gray-700">
              Pre-Pay with Bartercard
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 text-center">
          {tableData.commitmentPeriods.map((period, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-md  text-[#0460a3] border border-slid border-gray-700">
                {period}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-md text-[#0460a3] border border-slid border-gray-700">
                {tableData.prePayWithBartercard[index] || "-"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BarterCardTable;