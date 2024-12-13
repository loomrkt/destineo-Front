import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [],
  templateUrl: './brand.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandComponent { }
