import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  comment: "",
};

const validationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "Invalid phone number")
    .required("Phone Number is required"),
  comment: Yup.string(),
});

const FormikForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setShowModal(true);
    resetForm();
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col w-full max-w-[378px]">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-sm md:text-base">Full Name</label>
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="ml-3 text-red-500 text-sm md:text-base"
                />
              </div>
              <Field
                type="text"
                name="fullName"
                className="bg-transparent border-b border-[--white] mb-6 md:mb-7 p-[2px] focus:border-gray-500"
                placeholder="Andrey Zirchenko"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-sm md:text-base">Email</label>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="ml-3 text-red-500 text-sm md:text-base"
                />
              </div>
              <Field
                type="email"
                name="email"
                className="bg-transparent border-b border-[--white] mb-6 md:mb-7 p-[2px] focus:border-gray-500"
                placeholder="example@ukr.net"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <label className="text-sm md:text-base">Phone Number</label>
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="ml-3 text-red-500 text-sm md:text-base"
                />
              </div>
              <Field
                type="tel"
                name="phone"
                className="bg-transparent border-b border-[--white] mb-6 md:mb-7 p-[2px] focus:border-gray-500"
                placeholder="0961234567"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm md:text-base">Comment</label>
              <Field
                as="textarea"
                name="comment"
                className="bg-transparent border-b border-white outline-none p-[2px] mb-6 md:mb-8 h-14 focus:border-gray-500"
                placeholder="Wishes for the order"
              />
            </div>

            <Button
              text="Send"
              type="submit"
              icon={<FaArrowRight />}
              onClick={() => {}}
            />
          </Form>
        )}
      </Formik>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative w-[335px] md:w-[570px] bg-[--dark-blue-2] py-10 px-6 md:p-16 rounded-[20px]">
            <button
              onClick={closeModal}
              className="absolute top-[14px] right-[14px] md:top-[32px] md:right-[32px]"
            >
              <IoMdClose />
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

export default FormikForm;
