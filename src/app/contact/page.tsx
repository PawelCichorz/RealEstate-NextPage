'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import RedBanner from '../Components/RedBanner';
import Search from '../Components/Search';
import SmallPromotedOffer from '../Components/SmallPromotedOffer';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
      } else {
        setFormError(result.message);
      }
    } catch (error) {
      console.error('Błąd przy wysyłaniu wiadomości:', error);
      setFormError('Wystąpił błąd przy wysyłaniu wiadomości.');
    }
  };

  return (
    <>
      <RedBanner text="Kontakt" buttonText="" />
      <div className="flex flex-col lg:flex-row lg:justify-between lg:mx-6 ">
        <div className="flex flex-col lg:w-full">
          <div className="flex flex-col lg:flex-row lg:justify-between m-6 items-center text-center">
            <div className="mb-4 lg:mb-0">
              <p className="font-bold">Biuro Nieruchomości Pawłowski</p>
              <p>Piłsudskiego 3a</p>
              <p className="mb-6">32-050 Skawina</p>
              <p>Tel: 666-555-555</p>
              <p className="mb-6">Tel: 519-666-000</p>
              <p className="text-red-500 pb-8">Email: firma@o2.pl</p>
              <div className="flex flex-col">
                <h3 className="pb-4">Media Społecznościowe</h3>
                <div className="flex">
                  <Link
                    className="p-2 text-[30px] text-blue-500"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    className="p-2 text-[30px] text-blue-500"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-[400px] w-[290px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.511399737564!2d19.810836156914398!3d49.9730034081195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165df7c68b4e5b%3A0xba930d5cf62e1de1!2sJ%C3%B3zefa%20Pi%C5%82sudskiego%203A%2C%2032-050%20Skawina!5e0!3m2!1spl!2spl!4v1725625532704!5m2!1spl!2spl"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-between m-6 items-center text-center">
            <div className="mb-4 lg:mb-0">
              <p className="font-bold">
                Biuro Nieruchomości Pawłowski Oddział Wadowice
              </p>
              <p>Batorego 2</p>
              <p className="mb-6">32-050 Wadowice</p>
              <p>Tel: 666-555-555</p>
              <p className="mb-6">Tel: 519-666-000</p>
              <p className="text-red-500 pb-8">Email: firma@gmail.com</p>
              <div className="flex flex-col">
                <h3 className="pb-4">Media Społecznościowe</h3>
                <div className="flex">
                  <Link
                    className="p-2 text-[30px] text-blue-500"
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    className="p-2 text-[30px] text-blue-500"
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-[400px] w-[290px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d641.511399737564!2d19.810836156914398!3d49.9730034081195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165df7c68b4e5b%3A0xba930d5cf62e1de1!2sJ%C3%B3zefa%20Pi%C5%82sudskiego%203A%2C%2032-050%20Skawina!5e0!3m2!1spl!2spl!4v1725625532704!5m2!1spl!2spl"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" flex justify-center text-center flex-col items-center w-full"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between mb-4 ">
                <div className="flex-1 lg:mr-4 mb-4 lg:mb-0">
                  <label htmlFor="name">Imię:</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: 'Imię jest wymagane' })}
                    className="w-full p-2 bg-gray-100"
                    placeholder="Imię"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div className="flex-1">
                  <label htmlFor="email">Email:</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { required: 'Email jest wymagany' })}
                    className="w-full p-2 bg-gray-100"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>
              <div className="mb-4  lg:w-[480px] ">
                <label htmlFor="message">Wiadomość:</label>
                <textarea
                  id="message"
                  {...register('message', {
                    required: 'Wiadomość jest wymagana',
                  })}
                  className="w-full p-2 bg-gray-100"
                  placeholder="Wiadomość"
                  rows={5}
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>
              {formError && <p className="text-red-500">{formError}</p>}
              <button
                type="submit"
                className="mt-4 mb-12 bg-blue-500 text-white p-2 w-[100px] "
              >
                Wyślij
              </button>
            </form>
          </div>
        </div>

        <div className="lg:w-[400px] lg:ml-6 flex flex-col items-center">
          <Search />
          <SmallPromotedOffer />
        </div>
      </div>
    </>
  );
};

export default Contact;
