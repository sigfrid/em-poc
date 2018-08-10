import { Controller } from "stimulus"

export default class extends Controller {


  change() {
    console.log(this.stateOption.text)
    console.log(this.cityOption.data.get("state"))
  }

  get stateSelect() {
    return this.targets.find("state")
  }

  get stateOption() {
    return this.stateSelect.options[this.stateSelect.selectedIndex]
  }

  get citySelect() {
    return this.targets.find("city")
  }

  get cityOption() {
    return this.citySelect.options[this.citySelect.selectedIndex]
  }

}
