
import React, { useEffect, useState } from 'react';

const StructuresTable = ({ components }) => {

    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Sequence</th>
                        <th>OUM</th>
                    </tr>
                </thead>
                <tbody>
                    {components.map((row) => (
                        <tr key={row.sequence}>
                            <td>{row.sequence}</td>
                            <td>{row.oum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default StructuresTable