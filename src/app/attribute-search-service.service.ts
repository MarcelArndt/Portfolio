import { Injectable } from '@angular/core';
import { Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttributeSearchServiceService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2){
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  allElements: Element[] = [];

  searchAttribute(attributeName: string){
    let allSelectedElements = document.querySelectorAll(`[${attributeName}]`);
    this.allElements = [];
    allSelectedElements.forEach((obj:Element) => {
    this.allElements.push(obj);
    });
    console.log(this.allElements);
  }

}
