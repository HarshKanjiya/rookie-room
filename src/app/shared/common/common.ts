import { HttpHeaders } from "@angular/common/http";
import { DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop"
import { isObservable, of, retry, Subject, takeUntil } from "rxjs";

export function createEffect(generator: any) {
    const destroyRef = inject(DestroyRef);
    const origin$ = new Subject();
    generator(origin$).pipe(
        retry(),
        takeUntilDestroyed(destroyRef)
    ).subscribe();

    return ((observableOrValue: any) => {
        const observable$ = isObservable(observableOrValue)
            ? observableOrValue.pipe(retry())
            : of(observableOrValue);
        return observable$.pipe(takeUntilDestroyed(destroyRef)).subscribe((value) => {
            origin$.next(value);
        });
    });
}

export function enc(data: any) {
    return data
}
export function dcr(data: any) {
    return data
}

export function generateRandomString(length: number, type: 'number' | 'alphanumeric'): string {
    let characters: string;
    if (type === 'number') characters = '0123456789';
    else if (type === 'alphanumeric') characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    else throw new Error('Invalid type. Use "number" or "alphanumeric".');

    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}