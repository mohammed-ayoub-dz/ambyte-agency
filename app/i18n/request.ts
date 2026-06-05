import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ requestLocale }) => {
  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value;
  const requested = await requestLocale;
  const locale = cookieLocale && locales.includes(cookieLocale)
    ? cookieLocale
    : requested && locales.includes(requested)
      ? requested
      : 'en';
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});