import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 8.3.21';
  sbob:string = "assets/images/a.png";
  sust:string = "assets/images/sust.png";
  eee:string = "assets/images/ic.png";
  fire:string = "assets/images/fire.png"
  flashStill:string = "assets/images/flashStill.jpg"
  flashRun1:string = "assets/images/flashRun1.jpg"
  flashRun2:string = "assets/images/flashRun2.jpg"
  flashBackground:string = "assets/images/flashBackground.jpg"


  func0()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashStill.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func1()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashRun1.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func2()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashRun1.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func3()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashRun1.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func4()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashRun1.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }
  
  func5()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashRun1.jpg");
  }

  func6()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashRun2.jpg");
  }

  func7()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashRun2.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func8()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashRun2.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func9()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashRun2.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  func10()
  {
    document.getElementById("1").setAttribute("src", "assets/images/flashRun2.jpg");
    document.getElementById("2").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("3").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("4").setAttribute("src", "assets/images/flashBackground.jpg");
    document.getElementById("5").setAttribute("src", "assets/images/flashBackground.jpg");
  }

  moveForward(a:number)
  {
    setTimeout(this.func1, a+0);
    setTimeout(this.func2, a+50);
    setTimeout(this.func3, a+100);
    setTimeout(this.func4, a+150);
    setTimeout(this.func5, a+200);
  }

  moveBackward(a:number)
  {
    setTimeout(this.func6, a+0);
    setTimeout(this.func7, a+50);
    setTimeout(this.func8, a+100);
    setTimeout(this.func9, a+150);
    setTimeout(this.func10, a+200);
  }

  func($event)
  {
    this.moveForward(0);
    this.moveBackward(200);
     this.moveForward(400);
     this.moveBackward(600);

    setTimeout(this.func0, 800);
  }
}