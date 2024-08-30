import {Codec} from '../Codec';

export const optional = <V>(codec: Codec<V>): Codec<V | undefined> => ({
  encode: a => (a ? codec.encode(a) : 'undefined'),
  decode: s => (s !== 'undefined' ? codec.decode(s) : undefined),
});
