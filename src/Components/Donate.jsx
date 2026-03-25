import { useState } from 'react';
import Card from './Card';

const predefinedAmounts = [100, 500, 1000, 10000, 25000, 50000];

const Donate = ({ onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    anonymous: false,
    message: '',
  });
  const [qrCodeData, setQrCodeData] = useState(null);
  const [showQR, setShowQR] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectedValue = Number(customAmount || selectedAmount || 0);

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount(String(amount));
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    setCustomAmount(value);
    setSelectedAmount(Number(value) || null);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedValue || selectedValue <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }

    if (!formData.firstName.trim()) {
      setError('First name is required.');
      return;
    }

    if (!formData.email.trim()) {
      setError('Email address is required.');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const apiRoot = import.meta.env.VITE_API_URL;

      if (!apiRoot) {
        throw new Error('Donation service is not configured yet.');
      }

      const response = await fetch(`${apiRoot}/api/qr-code/active?amount=${selectedValue}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Origin: window.location.origin,
        },
        mode: 'cors',
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const qrData = await response.json();

      if (!qrData.qrCodeUrl) {
        throw new Error('Invalid QR code data received');
      }

      setQrCodeData(qrData.qrCodeUrl);
      setShowQR(true);
    } catch (submitError) {
      console.error('Error fetching QR code:', submitError);
      setError(submitError.message || 'Unable to generate QR code. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card backgroundColor="bg-white" textColor="text-black">
      <div className="relative h-[90vh] overflow-y-auto p-4 md:p-8 lg:p-12">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 hover:bg-gray-100 p-1 transition-colors duration-200"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="pr-8">
          <p className="text-sm uppercase tracking-[0.2em] text-black/70">Tausi Initiative</p>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">Your gift today will educate, empower, and connect</h2>
          <p className="mt-3 text-black/80 max-w-3xl">
            Make your gift today. As a contributor to TAUSI Initiative, we make sure your donation goes directly to
            supporting our cause and strengthening the next generation of changemakers.
          </p>
        </div>

        {error && (
          <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500" />
          </div>
        ) : showQR ? (
          <div className="flex flex-col items-center w-fit mx-auto mt-10">
            <Card backgroundColor="bg-gray-50" textColor="text-black">
              <div className="p-4">
                <img src={qrCodeData} alt="Payment QR Code" className="w-64 h-64" />
              </div>
            </Card>
            <p className="text-lg font-semibold mt-6 mb-2">Scan to donate KES {selectedValue.toLocaleString()}</p>
            <p className="text-sm text-black/70 text-center max-w-md">
              {formData.anonymous
                ? 'This gift will be treated as an anonymous donation.'
                : `Thank you, ${formData.firstName}, for supporting Tausi Initiative.`}
            </p>
            <div className="mt-5 w-fit">
              <Card backgroundColor="bg-pink-500" textColor="text-black">
                <button onClick={() => setShowQR(false)} className="w-full py-3 px-10 text-lg font-bold">
                  Back to Form
                </button>
              </Card>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="border-[3px] border-black bg-gray-50 p-4 md:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]">
              <p className="text-lg font-bold">Choose Amount</p>
              <p className="mt-1 text-sm text-black/70">How much would you like to donate? Donation amount in KES.</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => handleAmountSelect(amount)}
                    className={`border-[3px] border-black px-3 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] transition-all ${
                      selectedValue === amount ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    KES {amount.toLocaleString()}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium mb-1">Enter Custom Amount</label>
                <input
                  type="number"
                  min="0"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-full border-[3px] border-black px-3 py-2 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-black"
                  onKeyDown={(event) => event.key === '-' && event.preventDefault()}
                />
              </div>
            </div>

            <div className="border-[3px] border-black bg-white p-4 md:p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)]">
              <p className="text-lg font-bold">Who&apos;s Giving Today?</p>
              <p className="mt-1 text-sm text-black/70">We&apos;ll never share this information with anyone.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-1">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-[3px] border-black px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-[3px] border-black px-3 py-2 bg-pink-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-[3px] border-black px-3 py-2 bg-blue-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-black"
                    required
                  />
                </div>

                <div className="md:col-span-2 flex items-start gap-3 border-[3px] border-black bg-slate-50 px-4 py-3">
                  <input
                    id="anonymous"
                    type="checkbox"
                    name="anonymous"
                    checked={formData.anonymous}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                  <label htmlFor="anonymous" className="text-sm text-black/80">
                    Make this an anonymous donation. Prevent your name and message from being displayed publicly.
                  </label>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">Comment (Optional)</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[110px] border-[3px] border-black px-3 py-2 bg-yellow-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.25)] focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder="Share a message of encouragement"
                  />
                </div>
              </div>
            </div>

            <div className="w-fit">
              <Card backgroundColor="bg-pink-500" textColor="text-black">
                <button type="submit" className="w-full p-3 text-base md:text-lg font-bold flex justify-center items-center">
                  Donate Now
                </button>
              </Card>
            </div>
          </form>
        )}
      </div>
    </Card>
  );
};

export default Donate;
