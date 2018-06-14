import { Controller } from "stimulus"

export default class extends Controller {
  initialize() {
    this.textFieldElement.placeholder = this.placeholderWhenUnmasked
  }

  toggle() {
    this.textFieldElement.setAttribute('type', this.otherValue(this.textFieldCurrentType))
    if(this.textFieldCurrentType == 'text') {
      this.textFieldElement.placeholder = this.placeholderWhenUnmasked
    } else {
      this.textFieldElement.placeholder = this.placeholderWhenMasked
    }
  }

  get textFieldElement() {
    return this.targets.find("textfield")
  }

  get textFieldCurrentType() {
    return this.textFieldElement.getAttribute('type')
  }

  get placeholderWhenUnmasked() {
    return this.data.get("placeholder")
  }

  get placeholderWhenMasked() {
    return '●●●●●●●●●●'
  }

  otherValue(currentType) {
    return (currentType == 'text' ? 'password' : 'text')
  }

}
