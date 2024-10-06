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
  const localeType = 'ko';
  return [localeMap?.[localeType]!, localeType] as const;
};

export default useLocale;
