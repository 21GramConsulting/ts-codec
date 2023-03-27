import {Codec} from '#Codec';
import {CorruptPayload} from '#CorruptPayload';

export const date: Codec<Date> = {
  decode: v => {
    const candidate = new Date(v);
    if (Number.isNaN(candidate.valueOf()))
      throw new CorruptPayload(
        date,
        'decode',
        `Failed to decode "${v}" as a date.`
      );
    return candidate;
  },
  encode: v => v.toISOString(),
};
