import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  palettes = ['primary', 'accent', 'warn'];
  shades = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A100',
    'A200',
    'A400',
    'A700',
    'contrast',
    'default',
    'lighter',
    'darker',
    'text',
    'default-contrast',
    'darker-contrast',
    '50-contrast',
    '100-contrast',
    '200-contrast',
    '300-contrast',
    '400-contrast',
    '500-contrast',
    '600-contrast',
    '700-contrast',
    '800-contrast',
    '900-contrast',
    'A100-contrast',
    'A200-contrast',
    'A300-contrast',
    'A700-contrast',
  ];
}
