import React, { useState } from "react";

const AddAccount = ({ onAddAccount, onClose }) => {
  const [newAccount, setNewAccount] = useState({
    username: "",
    password: "",
    gmail: "",
    numbers: "",
    role: "customer", // Mặc định là "customer"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Kiểm tra nếu trường là "numbers", chỉ cho nhập số
    if (name === "numbers") {
      const numericValue = value.replace(/[^0-9]/g, ""); // Loại bỏ ký tự không phải số
      setNewAccount({ ...newAccount, [name]: numericValue });
    } else {
      setNewAccount({ ...newAccount, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (
      !newAccount.username ||
      !newAccount.password ||
      !newAccount.gmail ||
      !newAccount.numbers ||
      !newAccount.role
    ) {
      alert("Please fill in all fields.");
      return;
    }
    const date = new Date().toLocaleDateString("en-GB"); // Format: DD-MM-YYYY
    onAddAccount({
      ...newAccount,
      createAT: date,
      updateAt: date,
    });
    onClose(); // Close form after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        <h2 className="mb-4 flex justify-center text-4xl font-bold">
          Add New Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={newAccount.username}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={newAccount.password}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Gmail</label>
            <input
              type="email"
              name="gmail"
              value={newAccount.gmail}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Phone Number</label>
            <input
              type="text"
              name="numbers"
              value={newAccount.numbers}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Role</label>
            <select
              name="role"
              value={newAccount.role}
              onChange={handleInputChange}
              className="w-full rounded-md border border-gray-300 p-2"
            >
              <option value="admin">Admin</option>
              <option value="staff">Staff</option>
              <option value="customer">Customer</option>
            </select>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Add Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;