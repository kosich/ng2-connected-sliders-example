import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/Rx';

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
    public disabled:boolean = false;
    private value: number = 0;
    private slide$ = new BehaviorSubject<number>(0);
    private input$ = new BehaviorSubject<number>(0);
    private value$ = new BehaviorSubject<number>(0);
    private onChange: any = () => { };
    private onTouched: any = () => { };
    private sliderValue = 0;
    private sliderConfig: any;


    constructor() { 
        this.sliderConfig = { start: 0, animate: false, range: { 'min': 0, 'max': 100 } };
    }

    ngOnInit() {
        const { slide$, input$, value$ } = this;

        input$ 
        .distinctUntilChanged()
        .subscribe(v=>{
            value$.next(v)
            this.sliderValue = v;
        })

        slide$ 
        .distinctUntilChanged()
        .subscribe(v=>value$.next(v))

        value$
        .distinctUntilChanged()
        .subscribe(value=>{
            this.value = value;
            this.onChange(value);
            this.onTouched();
        });
    }

    onInputChange(value) {
        this.input$.next(value);
    }

    onSliderChange(value) {
        this.slide$.next(value);
    }

    public writeValue(value: number) {
        this.value = value;
        this.sliderValue = value;
    }

    public registerOnChange(fn: Function) {
        this.onChange = fn;
    }

    public registerOnTouched(fn: Function) {
        this.onTouched = fn;
    }
}
