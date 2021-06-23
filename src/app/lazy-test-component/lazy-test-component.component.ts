import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  template: `
  <p>I am Lazy loaded </p>
  <p>{{ inputText }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LazyTestComponent {
    @Input() public inputText!: string;
}
