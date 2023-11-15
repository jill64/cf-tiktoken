import type { Tiktoken, TiktokenEncoding, TiktokenModel } from 'js-tiktoken'

declare function getEncoding(
  encoding: TiktokenEncoding,
  extendSpecialTokens?: Record<string, number>
): Tiktoken

declare function encodingForModel(
  model: TiktokenModel,
  extendSpecialTokens?: Record<string, number>
): Tiktoken

export {
  Tiktoken,
  TiktokenEncoding,
  TiktokenModel,
  encodingForModel,
  getEncoding
}
