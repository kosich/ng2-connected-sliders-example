import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subject } from 'rxjs/Rx';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ItemComponent),
            multi: true
        }
    ]
})
export class ItemComponent implements OnInit, ControlValueAccessor {
    private form: FormGroup;
    private sliderValue: number = 0;
    private slide$ = new Subject<number>();

    constructor(fb: FormBuilder) {
        this.form = fb.group(
            {
                input: []
                , disabled: []
            }
        );
    }

    ngOnInit() {
        const { slide$, form } = this;

        form
            .valueChanges
            .map(x => x.input)
            .subscribe((value: number) => {
                this.sliderValue = value;
            })

        this.slide$.subscribe(value => {
            this.form.patchValue({ input: value })
        });
    }

    onSliderSlide(value) {
        this.slide$.next(value);
    }

    public writeValue(value: number) {
        this.form.setValue({
            input: value,
            disabled: false
        }, {
            emitEvent: false,
        });

        this.sliderValue = value;
    }

    subscribe(fn: Function) {
        this.form.valueChanges
            .subscribe(({ input }) => fn(input));
    }

    public registerOnChange(fn: Function) {
        this.subscribe(fn);
    }

    public registerOnTouched(fn: Function) {
        this.subscribe(fn);
    }
}
