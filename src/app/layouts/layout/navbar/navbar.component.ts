import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DropdownLanguageComponent } from '../../../components/dropdown-language/dropdown-language.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DropdownLanguageComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent { }
