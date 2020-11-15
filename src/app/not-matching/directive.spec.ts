import { Component, ViewChild } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { FormsModule, NgModel } from '@angular/forms';
import { CustomFormsModule } from '../custom-forms.module';

import { createComponent } from '../../dev/test';


@Component({
    template: `
        <input #field type='text' [(ngModel)]='value' [notMatching]='pattern' #fieldModel='ngModel'/>
    `
})
class NotMatchingValidatorAppComponent {
    public value: string;
    public pattern = /a+bc/;

    @ViewChild('fieldModel') fieldModel: NgModel;
}


describe('NotMatchingValidator', () => {

    let fixture: ComponentFixture<NotMatchingValidatorAppComponent>;
    let component: NotMatchingValidatorAppComponent;

    beforeEach(() => {
        fixture = createComponent(NotMatchingValidatorAppComponent, [FormsModule, CustomFormsModule]);
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

    it('should invalidate for matching', async () => {
        expect(component.fieldModel.invalid).toBeFalse();
        component.value = 'aabc';
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.fieldModel.invalid).toBeTrue();
    });

    it('should validate for not matching', async () => {
        expect(component.fieldModel.invalid).toBeFalse();
        component.value = 'abx';
        fixture.detectChanges();
        await fixture.whenStable();
        expect(component.fieldModel.invalid).toBeFalse();
    });

});

