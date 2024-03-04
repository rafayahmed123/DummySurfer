const Form = ({getStructureByDescription, getStructureByNumber, searchByNumber, selectedStructure, handleInputChange, handleSelectChange, structures }) => {
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
        </div>
    </div>
}

export default Form
