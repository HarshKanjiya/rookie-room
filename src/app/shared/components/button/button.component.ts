import { Component, input } from '@angular/core';

@Component({
  selector: 'Button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  isLoading = input<boolean>(false)
  isDisable = input<boolean>(false)
  customClass = input<string>("")
  type = input<"Primary" | "Secondary" | "Light" | "Link" | "Ghost">("Primary")
  color = ""

  ngOnInit() {
    switch (this.type()) {
      case "Primary":
        this.color = "bg-black dark:b-white b-1"
        break
      case "Secondary":
        this.color = "bg-white dark:b-black b-1"
        break
      case "Ghost":
        this.color = "bg-white dark:b-black b-0"
        break
      case "Light":
        this.color = ""
        break
      case "Link":
        this.color = "bg-white bg-black"
        break
    }
  }
}
