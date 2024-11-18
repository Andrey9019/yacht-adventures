import { useState } from "react";
import Button from "../ui/Button";

const Form = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const validationError = validateForm();
    if (validationError) {
      alert(validationError);
      return;
    }

    setTimeout(() => {
      setShowModal(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        comment: "",
      });
    }, 1000);
  };

  const validateForm = () => {
    const { fullName, email, phone } = formData;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10,15}$/;

    if (!fullName) return "Full Name is required";
    if (!emailPattern.test(email)) return "Invalid email format";
    if (!phonePattern.test(phone)) return "Invalid phone number";

    return null;
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col w-full max-w-[378px] ">
      {/* Поля форми */}
      <label className="text-sm md:text-base">Full Name</label>
      <input
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className="bg-transparent border-b border-[--white] mb-6 md:mb-7 p-[2px]  focus:border-gray-500"
        placeholder="Andrey Zirchenko"
      />
      <label className="text-sm md:text-base">Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="bg-transparent border-b border-[--white] mb-6 md:mb-7 p-[2px]  focus:border-gray-500"
        placeholder="example@ukr.net"
      />
      <label className="text-sm md:text-base">Phone Number</label>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="bg-transparent border-b border-[--white] mb-6 md:mb-7  p-[2px]  focus:border-gray-500"
        placeholder="0961234567"
      />
      <label className="text-sm md:text-base">Comment</label>
      <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        className="bg-transparent border-b border-white outline-none p-[2px] mb-6 md:mb-8  h-14 focus:border-gray-500"
        placeholder="Wishes for the order"
      />
      <Button
        text="Send"
        onClick={handleSubmit}
        icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="9"
            viewBox="0 0 18 9"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.5 0.169922L18 4.50005L12.5 8.83018V5.25005L0 5.25005L0 3.75005L12.5 3.75005V0.169922Z"
              fill="#F6F5EF"
            />
          </svg>
        }
      />
      {/* Модальне вікно */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-[335px] md:w-[570px] bg-[--dark-blue-2] py-10 px-6 md:p-16 rounded-[20px]">
            {/* Кнопка закриття */}
            <button
              onClick={closeModal} // функція закриття модального вікна
              className="absolute top-[14px] right-[14px] md:top-[32px] md:right-[32px]"
            >
              <svg
                className="md:w-[24px] md:h-[24px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#F6F5EF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#F6F5EF"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <img
              src="images/hero-card/yachtHero@1x.png"
              srcSet="images/hero-card/yachtHero@1x.png 1x, images/hero-card/yachtHero@2x.webp 2x"
              alt="Yacht"
              className="mb-6"
              loading="lazy"
              decoding="async"
            />

            <h2 className="text-2xl md:text-[32px] font-medium mb-[14px] md:mb-4">
              Thank you
            </h2>
            <p className="text-sm md:text-base">
              Thank you for choosing Yacht Adventures, your booking details have
              been received and our team will be in touch shortly to confirm
              your reservation and provide any additional information or
              assistance you may need.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
