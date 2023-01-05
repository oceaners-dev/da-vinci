export interface ISelect {
  allowDeselect?: boolean
  clearable?: boolean
  closeOnSelect?: boolean
  disabled?: boolean
  dropdownPosition?: 'top' | 'bottom'
  getSelectedOptions?: (options: any) => void
  helperText?: string
  hideSelectedOptions?: boolean
  label?: string
  multiple?: boolean
  onChange?: (value: any) => void
  onDropdownOpen?: () => void
  options: IOption[]
  placeholder?: string
  renderOption?: (option: IOption) => React.ReactNode
  searchable?: boolean
  withoutDropdownIcon?: boolean
}

export interface IOption {
  [key: string]: any
  label: string
  value: string
}
