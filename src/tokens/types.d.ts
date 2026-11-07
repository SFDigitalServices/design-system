export type Token<Type extends string, Value> = {
  type: Type
  value: Value
}

export type TokenValue =
  | Token<'color', string>
  | Token<'dimension', string>
  | Token<'fontFamily', string | string[]>
  | Token<'fontWeight', string>

export type TokenMap = Record<string, TokenValue>
