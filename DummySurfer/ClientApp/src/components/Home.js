    import React, { useEffect, useState } from 'react';
    import './TableComponent.css'; // Import the CSS file
    import ComponentsTable from './ComponentsTable'
    import StructuresTable from './StructuresTable'

    const Home = () => {
        const [selectedStructure, setSelectedStructure] = useState('');
        const [searchByNumber, setSearchByNumber] = useState(true)

        const [structures, setStructures] = useState({});
        const [relatedStructures, setRelatedStructures] = useState([]);


        const [selectedTab, setSelectedTab] = useState(false);
        const [pagination, setPagination] = useState(false)


        useEffect(() => {
            console.log('structures ', structures)
            async function getRelatedComponents() {
                try {
                    const response = await fetch(`https://localhost:7221/Parts/getRelatedComponents?OUM=${structures.oum}`);
                    const data = await response.json();

                    console.log('related ', data)

                    setRelatedStructures(data);
                } catch (error) {
                    console.error('Error fetching Structures:', error);
                }
            }

            getRelatedComponents()
        }, [structures])
        // Event handler for input changes
        const handleInputChange = (event) => {
            setSelectedStructure(event.target.value);
        };

        const handleSelectChange = (event) => {
            console.log('event ', event.target.value)
            setSearchByNumber(event.target.value === 'true')
        }

        const getStructureByDescription = async (description) => {
            try {
                const response = await fetch(`https://localhost:7221/Parts/GetStructureByDescription?description=${description}`);
                const data = await response.json();

                setStructures(data);
            } catch (error) {
                console.error('Error fetching Structures:', error);
            }
        };

        const getStructureByNumber = async (sequence) => {
            try {
                const response = await fetch(`https://localhost:7221/Parts/GetStructureByNumber?sequence=${sequence}`);
                const data = await response.json();

                setStructures(data);
            } catch (error) {
                console.error('Error fetching Structures:', error);
            }
        }

        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, }}>
                    <select onChange={handleSelectChange} value={searchByNumber.toString()}>
                        <option value="true">Search By Item Number</option>
                        <option value="false">Search By Item Description</option>
                    </select>
                    <input
                        type="text"
                        id="itemInfo"
                        value={selectedStructure}
                        onChange={handleInputChange}
                    />
                    <button onClick={() => { searchByNumber ? getStructureByNumber(selectedStructure) : getStructureByDescription(selectedStructure) }}>
                        Submit
                    </button>
                </div>

                <div style={{ paddingLeft: 80, paddingRight: 80, width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <div style={{ display: 'flex', }} >
                            <label htmlFor="itemNumber">Item Number: </label>
                            <input
                                type="text"
                                id="ItemNumber"
                                placeholder={structures.sequence}
                                disabled={true}
                            />
                        </div>

                        <div style={{ display: 'flex', width: '100%' }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', marginTop: '3%' }}>
                        <div style={{ display: 'flex', width: '100%', }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                            />
                        </div>
                        <div style={{
                            display: 'flex', width: '100%', justifyContent: 'center'
                        }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                            />
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'end' }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                            />
                        </div>

                        <div style={{ display: 'flex', width: '100%', }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                            />
                        </div>
                        <div style={{
                            display: 'flex', width: '100%', justifyContent: 'center'
                        }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                            />
                        </div>
                        <div style={{ display: 'flex', width: '100%', justifyContent: 'end' }} >

                            <label htmlFor="itemDescription">Description: </label>
                            <input
                                type="text"
                                id="itemDescription"
                                placeholder={structures.item}
                                disabled={true}
                            />
                        </div>
                    </div>
                    <div style={{marginTop: '1%'} }>
                        {/* Tabs */}
                        <div style={{display: 'flex'} }>
                            <button onClick={() => setSelectedTab('components')}>Components</button>
                            <button onClick={() => setSelectedTab('whereused')}>Where Used</button>
                            <div style={{ display: 'flex', marginLeft: 40, justifyContent: 'center', gap: 5, alignItems: 'center' }} >

                                <label>Limit Results to First 10</label>
                                <input type="checkbox" checked={pagination} onChange={() => { setPagination(!pagination) }} />
                                
                            </div>
                              
                                
                        </div>

                        {selectedTab === 'components' ?
                            <ComponentsTable components={relatedStructures} pagination={pagination} />
                            :
                            <StructuresTable components={relatedStructures} pagination={pagination} />
                        }
                    </div>

                </div>
            </div>
        );
    };

    export default Home;
