import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="test"
export default class extends Controller {
  connect() {
    console.log(this.iconTarget)
    console.log("testing")
  }
};
