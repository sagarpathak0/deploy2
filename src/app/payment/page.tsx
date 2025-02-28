"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const Payment: React.FC = () => {
  const [amount, setAmount] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cname, setCname] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");
  const [modalMessage, setModalMessage] = useState<string | null>(null);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) =>
    setAmount(e.target.value);
  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 16);
    setCardNumber(value);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) =>
    setCname(e.target.value);
  const handleExpiryDateChange = (e: ChangeEvent<HTMLInputElement>) =>
    setExpiryDate(e.target.value);
  const handleCvvChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const amountValue = parseFloat(amount);

    if (isNaN(amountValue) || cardNumber.length !== 16 || cvv.length !== 3) {
      setModalMessage("❌ Payment Failed! Check your details.");
      return;
    }

    if (amountValue < 50000) {
      setModalMessage("✅ Payment Successful! 🎉");
    } else {
      setModalMessage("⚠️ 2FA Required! Verify your payment.");
    }

    // Clear input fields
    setAmount("");
    setCardNumber("");
    setExpiryDate("");
    setCname("");
    setCvv("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          💳 Payment Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Customer Name
            </label>
            <input
              type="text"
              value={cname}
              onChange={handleNameChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Customer's Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Amount (₹)
            </label>
            <input
              type="number"
              value={amount}
              onChange={handleAmountChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter Amount"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Card Number
            </label>
            <input
              type="text"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="1234 5678 9012 3456"
              maxLength={16}
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600">
                Expiry Date
              </label>
              <input
                type="month"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-600">
                CVV
              </label>
              <input
                type="text"
                value={cvv}
                onChange={handleCvvChange}
                className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="CVV"
                maxLength={3}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Pay Now
          </button>
        </form>
      </div>

      {/* Modal */}
      {modalMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm w-full">
            <p className="text-xl font-semibold text-gray-700">{modalMessage}</p>
            <button
              onClick={() => setModalMessage(null)}
              className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
