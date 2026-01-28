import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'next-i18next';

interface NewsletterFormData {
  email: string;
}

export default function NewsletterForm() {
  const { t } = useTranslation('common');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>();

  const onSubmit = (data: NewsletterFormData) => {
    // Simulate newsletter subscription
    console.log('Newsletter subscription:', data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <div
        data-testid="newsletter-success"
        className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
      >
        <svg
          className="w-12 h-12 text-green-500 mx-auto mb-3"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <p className="text-green-800 font-medium">{t('subscribe_success')}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-2xl font-bold mb-2">{t('newsletter_title')}</h3>
      <p className="text-gray-600 mb-4">{t('newsletter_description')}</p>
      
      <form data-testid="newsletter-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <input
            type="email"
            data-testid="newsletter-email"
            placeholder={t('email_placeholder')}
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {errors.email && (
            <p data-testid="newsletter-error" className="text-red-500 text-sm mt-1">
              {t('invalid_email')}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          data-testid="newsletter-submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {t('subscribe')}
        </button>
      </form>
    </div>
  );
}
