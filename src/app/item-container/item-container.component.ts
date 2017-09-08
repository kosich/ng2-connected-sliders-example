import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { Observable } from 'rxjs/Rx';

@Component({
    selector: 'app-item-container',
    templateUrl: './item-container.component.html',
    styleUrls: ['./item-container.component.scss']
})
export class ItemContainerComponent implements OnInit {
    private items: number[];
    private form: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        const { fb } = this;
        this.form = fb.group({
            items: fb.array([])
        });
    }

    ngOnInit() {
        const { form, fb } = this;

        const items = fb.array(
            [13, 27, 44, 0, 26]
            .map(v => this.fb.group({ value: v }))
        );

        form.setControl('items', items);

        const itemsChange = items.controls.map((ctrl,index)=>ctrl.valueChanges.map(value=>({ value, index })));
        Observable
        .merge(...itemsChange)
        .subscribe(({ value, index })=>{
            const { value : v } = value;
            const leftOver = 100 - v;
            const values = leftOver / 4;
            const patch = Array(4).fill(values).map(value=>({ value }))
            items.patchValue(patch, { emitEvent: false });
        });
    }
}

