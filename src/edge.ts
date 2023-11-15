class Tiktoken {
  encode(): number[] {
    return []
  }
  decode(): string {
    return ''
  }
}

export function getEncoding() {
  return new Tiktoken()
}

export function encodingForModel() {
  return new Tiktoken()
}
