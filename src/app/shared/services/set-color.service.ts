import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class SetColorService{
    private currentColor: string;

    constructor(){}

    public setColor(value: string) {
        this.currentColor = value;
    }

    public get color(): string {
        return this.currentColor;
    }

}
