import { useState, useMemo, useCallback } from 'react';
import LOCALIZED_CONTENT from 'Content/index';
import get from 'lodash.get';

const useTranslate = (contentKey) => {
  const [language, setLanguage] = useState('en');
  const content = useMemo(
    () => LOCALIZED_CONTENT[language][contentKey],
    [language, contentKey]
  );
  console.log(
    '🚀 ~ file: useTranslate.js ~ line 9 ~ useTranslate ~ LOCALIZED_CONTENT',
    LOCALIZED_CONTENT[language],
    content,
    language,
    contentKey
  );
  const t = useCallback(
    (key) => {
      return get(content, key);
    },
    [language]
  );
  console.log(content, t('home'));

  return {
    t,
    setLanguage,
    language,
    content,
  };
};

export default useTranslate;
