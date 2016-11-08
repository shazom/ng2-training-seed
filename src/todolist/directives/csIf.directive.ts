import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[csIf]'
})

export class CsIfDirective {

    private container: ViewContainerRef;
    private template;

    constructor(container: ViewContainerRef, template: TemplateRef<any>) {
        this.container = container;
        this.template = template;
    }

    @Input() set csIf(flag) {
        if (flag) {
            this.container.createEmbeddedView(this.template)
        } else {
            this.container.clear()
        }
    }

} 