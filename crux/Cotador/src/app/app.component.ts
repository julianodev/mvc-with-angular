import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "ASP.NET MVC 5 / ANGULAR 5";
  description: string = "Uma demo utilizando ASP.NET MVC 5 com angular 5 para criar SPAS robustas.";

  value: number = 0;

  articles: any[] = [
    {
      title: "Angular 5",
      description:
        "Aprenda a mais nova versão do framework JS mais utilizado no mundo.",
      url: "https://angular.io/docs"
    },
    {
      title: "ASP.NET MVC",
      description:
        " O ASP.NET MVC oferece uma maneira poderosa e baseada em padrões para criar sites dinâmicos que permitem uma separação limpa de preocupações e lhe dá controle total sobre a marcação para um desenvolvimento agradável e ágil.",
        url: "https://www.asp.net/mvc"
    },
    {
      title: "C#",
      description: "Aprenda uma das linguagens de programação mais robusta do mercado.",
      url: "https://docs.microsoft.com/pt-br/dotnet/csharp/programming-guide/"
    }
  ];

}
