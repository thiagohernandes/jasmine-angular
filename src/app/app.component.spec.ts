import { TestBed, 
  async, 
  ComponentFixture,
  inject,
  tick,
  fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('AppComponent',() => {
let component: AppComponent;
let fixture: ComponentFixture<AppComponent>;
let de: DebugElement;

beforeEach(async(() => {
TestBed.configureTestingModule({
imports: [FormsModule],
declarations: [ AppComponent ],
}).compileComponents();
}));

beforeEach(() => {
fixture = TestBed.createComponent(AppComponent);
component = fixture.componentInstance;
de = fixture.debugElement;
fixture.detectChanges();
});

it('criando o componente',() => {
expect(component).toBeTruthy();
})

it('title deve ter o resultado "works" ',() => {
expect(component.title).toBe('works');
})

it('tag h3 com o valor "app works!" ',() => {
expect(de.query(By.css('h3')).nativeElement.innerText).toBe('app works!');
})

it('nome change',() =>{
component.trocarNome('teste');
expect(component.nome).toBe('teste');
})

})