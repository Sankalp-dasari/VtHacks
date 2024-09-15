import React, { useState } from 'react';

const TechSupport = () => {
  const [queries, setQueries] = useState([]);
  
  const [newQuery, setNewQuery] = useState({
    title: '',
    description: '',
    address: '',
    contactInfo: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setQueries([...queries, newQuery]);

    setNewQuery({
      title: '',
      description: '',
      address: '',
      contactInfo: '',
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewQuery({
      ...newQuery,
      [name]: value,
    });
  };

  return (
    <div className="max-w-[1200px] mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-white">Tech Support Requests</h1>
      
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white">Submit a Tech Support Query</h2>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-semibold">Issue Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newQuery.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
              placeholder="Enter the issue title"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg font-semibold">Issue Description</label>
            <textarea
              id="description"
              name="description"
              value={newQuery.description}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
              placeholder="Describe the issue in detail"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg font-semibold">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={newQuery.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
              placeholder="Enter your address"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contactInfo" className="block text-lg font-semibold">Contact Info (Phone or Email)</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={newQuery.contactInfo}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00df9a]"
              placeholder="Enter your phone number or email"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#00df9a] text-white px-4 py-2 rounded-lg hover:bg-[#00b47a] transition duration-300"
          >
            Submit Query
          </button>
        </form>
      </div>

      <div className="space-y-8">
        {queries.map((query, index) => (
          <div key={index} className="flex bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6 w-full">
              <h2 className="text-xl font-semibold mb-2">{query.title}</h2>
              <p className="text-gray-600 mb-2">{query.description}</p>
              <p className="text-gray-600 mb-2"><strong>Address: </strong>{query.address}</p>
              <p className="text-gray-600"><strong>Contact Info: </strong>{query.contactInfo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSupport;
