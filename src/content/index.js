import FEATURES from './features';
import ROADMAP from './roadmap';
import STORY from './story';
import COMMON from './common';

const CONTENT = [
  { key: 'features', content: FEATURES },
  { key: 'roadmap', content: ROADMAP },
  { key: 'story', content: STORY },
  { key: 'common', content: COMMON },
];

const LOCALIZED_CONTENT = {};
for (let i = 0; i < CONTENT.length; i++) {
  const contentLanguages = Object.keys(CONTENT[i]?.content);
  contentLanguages.forEach((language) => {
    if (!LOCALIZED_CONTENT[language]) {
      LOCALIZED_CONTENT[language] = {};
    }
    LOCALIZED_CONTENT[language][CONTENT[i]?.key] = {
      ...CONTENT[i]?.content?.[language],
    };
  });
}

export default LOCALIZED_CONTENT;
