import { Directive, ElementRef, Input, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[scrollAnimation]',
  standalone: true
})

export class ScrollAnimationDirective {

  @Input() animationClass: string = 'animationDefaultClass';
  @Input() threshold: number = 0.5;
  constructor(private domElement: ElementRef, private renderer: Renderer2) { }


  private observer!: IntersectionObserver;
  alreadyAnimated = false;

  ngOnInit() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio >= this.threshold) { 
          this.renderer.addClass(this.domElement.nativeElement, this.animationClass);
          this.alreadyAnimated = true
        }

        
      });
    }, {
      threshold: this.threshold
    });

    this.observer.observe(this.domElement.nativeElement);
  }

      ngOnDestroy() {
        if (this.observer) {
          this.observer.disconnect();
        }
      }

}
