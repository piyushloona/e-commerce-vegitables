import React, { useState } from 'react';

const Select = ({ options }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedOption, setSelectedOption] = useState('');

    // Filtered options based on the search term
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
        
            <select
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
                style={{ padding: '5px', width: '100%' }}
            >
                <option value="">Select an option</option>

                {/* Input inside Select */}
                <option >
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ padding: '5px', width: '100%' }}
                    />
                </option>

                {/* Dynamically render filtered options */}
                {filteredOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select