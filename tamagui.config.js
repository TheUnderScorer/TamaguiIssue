import { createAnimations } from '@tamagui/animations-moti';
import { createTamagui } from 'tamagui';
import { tokens, themes } from '@tamagui/themes';

export default createTamagui({
  tokens,
  themes,
  animations: createAnimations({
    '250ms': {
      type: 'timing',
      duration: 250,
    },
    fast: {
      type: 'spring',

      damping: 20,

      mass: 1.2,

      stiffness: 250,
    },

    medium: {
      type: 'spring',

      damping: 10,

      mass: 0.9,

      stiffness: 100,
    },

    slow: {
      type: 'spring',

      damping: 20,

      stiffness: 60,
    },
  }),
});
