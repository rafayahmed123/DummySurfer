import React, { useEffect, useState } from 'react';

const ComponentsTable = ({ components, pagination }) => {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                    <tr>
                        <th>Sequence</th>
                        <th>Item</th>
                        <th>Material Quantity</th>
                        <th>OUM</th>
                    </tr>
                </thead>
                <tbody>
                    {components.slice(0, !pagination ? components.length : 10).map((row) => (
                        <tr key={row.sequence}>
                            <td>{row.sequence}</td>
                            <td>{row.item}</td>
                            <td>{row.materialQuantity}</td>
                            <td>{row.oum}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ComponentsTable