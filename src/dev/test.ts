import { Provider, Type } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';


export function createComponent<T>(type: Type<T>, imports: any[], providers: Provider[] = []): ComponentFixture<T> {
    TestBed.configureTestingModule({
            imports: [...imports],
            declarations: [type],
            providers: [...providers]
    }).compileComponents();

    const fixture = TestBed.createComponent(type);
    fixture.detectChanges();
    return fixture;
}
