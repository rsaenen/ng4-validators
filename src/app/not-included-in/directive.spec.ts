import { Component, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgModel } from '@angular/forms';
import { CustomFormsModule } from '../custom-forms.module';

import { createComponent } from '../../dev/test';


@Component({
    template: `
        <input #field type='text' [(ngModel)]='value' [notIncludedIn]='inArray' #fieldModel='ngModel'/>
    `
})
class NotIncludedInValidatorAppComponent {
    public value: string;
    public inArray = ['a', 'b', 'c'];

    @ViewChild('fieldModel') fieldModel: NgModel;
}


describe('NotIncludedInValidator', () => {

    let fixture: ComponentFixture<NotIncludedInValidatorAppComponent>;
    let component: NotIncludedInValidatorAppComponent;

    beforeEach(() => {
        fixture = createComponent(NotIncludedInValidatorAppComponent, [FormsModule, CustomFormsModule]);
        component = fixture.componentInstance;
        fixture.detectChanges();
        fixture.detectChanges();
        jasmine.clock().install();
    });

    afterEach(() => {
        fixture.debugElement.nativeElement.remove();
        fixture.destroy();
        jasmine.clock().uninstall();
    });

    it('should invalidate for in', async () => {
        expect(component.fieldModel.invalid).toBeFalse();
        component.value = 'a';
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.fieldModel.invalid).toBeTrue();
    });

    it('should validate for in', async () => {
        expect(component.fieldModel.invalid).toBeFalse();
        component.value = 'x';
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.fieldModel.invalid).toBeFalse();
    });

});

