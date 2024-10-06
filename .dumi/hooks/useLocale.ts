import { useLocale as useDumiLocale } from 'dumi';

export interface LocaleMap<
  K extends PropertyKey = PropertyKey,
  V extends string | ((...params: any[]) => string) = string,
> {
  ko: Record<K, V>;
}

const useLocale = <
  K extends PropertyKey = PropertyKey,
  V extends string | ((...params: any[]) => string) = string,
>(
  localeMap?: LocaleMap<K, V>,
): [Record<K, V>, 'ko'] => {
  const { id } = useDumiLocale();
  const localeType = id === 'ko-KR' ? 'ko' : 'ko';
  return [localeMap?.[localeType]!, localeType] as const;
};

export default useLocale;
