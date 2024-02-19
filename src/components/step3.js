import React from 'react';
import { useContext } from 'react';
import { useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { AuthContext } from '../config/AuthContext';


const Step3 = () => {
  const options = useMemo(() => countryList().getData(), [])
    
  const {company, setCompany} = useContext(AuthContext);
  const {employee, setEmployee} = useContext(AuthContext);
  const {country, setCountry} = useContext(AuthContext);
  const {primary, setPrimary} = useContext(AuthContext);

  const changeHandler = country => {
    setCountry(country.label)
  }
  const handleSelectChange = event => {
    setPrimary(event.target.value);
  };

  return (
    <div className='sticky top-0'>
      <div className="text-center">
        <h2 className="text-5xl font-semibold mb-4 text-red-500">Request quote</h2>
        <p className="text-xl p-10">Tell us about your company</p>
      </div>
      {/* Add Step 1 content here */}
      <div className="flex justify-between">
        <div className="flex flex-col w-full">
          <label className='text-xs'>Company</label>
          <input
            name="company"
            type="text"
            placeholder="Company Name"
            className="border rounded-lg p-2 mt-2"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="flex flex-col w-full ml-3">
          <label className='text-xs'>Number of Employees</label>
          <input
            name="employee"
            type="text"
            placeholder="No of employees"
            className="border rounded-lg p-2 mt-2"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <label className='text-xs'>Country</label>
        <Select options={options} value={country.label} onChange={changeHandler} />
      </div>
      <div className="flex flex-col mt-6">
      <label className='text-xs'>Primary Interest</label>
        <select
          value={primary}
          onChange={handleSelectChange}
          className="border rounded-lg p-2 mt-2"
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default Step3;
