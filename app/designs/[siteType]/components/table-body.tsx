import Image from "next/image";
import React, { useState } from "react";


type PlansTableProps = {
  TableData: object[];
};

function TableBody({ TableData }: PlansTableProps) {
  return (
    <tbody className="font-semibold">
      {TableData.map((item, index) => (
        <tr key={index}>
          {Object.entries(item).map(([key, value]) => (
            <React.Fragment key={key}>
              <td>{key}</td>
              {value.map((item: string, index: number) => (
                <td key={index}>
                  {typeof item !== "string" ? (
                    <div className="flex justify-center">
                      <Image src={item} alt="" />
                    </div>
                  ) : (
                    item
                  )}
                </td>
              ))}
            </React.Fragment>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;
