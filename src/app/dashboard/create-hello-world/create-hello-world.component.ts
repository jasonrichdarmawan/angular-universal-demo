import { Component } from '@angular/core';

@Component({
  selector: 'app-create-hello-world',
  templateUrl: './create-hello-world.component.html',
  styleUrls: ['./create-hello-world.component.css']
})
export class CreateHelloWorldComponent {
  /// - Warning: SSR do not like var document.
  ngAfterContentInit() {
    const helloWorld = document.createTextNode("hello world")
    document.body.appendChild(helloWorld)
  }

  createHelloWorld() {
    const helloWorld = document.createTextNode("hello World")
    document.body.appendChild(helloWorld)
  }
}
