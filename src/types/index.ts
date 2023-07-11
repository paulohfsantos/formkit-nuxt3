export interface IValues {
  name: string
  email: string
  sex: string
  description: string
}

export interface IInputs {
  id: number
  name: string
  label?: string
  placeholder?: string
  type: string
  validation?: string
  options?: string[]
  'validation-message'?: {
    is: (node: { value: string }) => string
  }
}